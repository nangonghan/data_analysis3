import React, { useState, useEffect } from "react";
//关于echat必须引入的包
import ReactEcharts from "echarts-for-react";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
//css
import "./LineChart.css";
import Papa from "papaparse";
//motion
import { motion } from "framer-motion";
//antd
import { Radio } from "antd";
import "antd/dist/antd.css";

function LineChart(props) {
  //日期周期选择
  function onChange(value) {
    setDataState(value.target.value);
  }
  const [dataState, setDataState] = useState("day");
  //本地CSV引入
  const [data, setData] = useState([]);
  useEffect(() => {
    var csvType = require("./" + dataState + ".csv");
    //google云
    Papa.parse(csvType, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: x => {
        setData(x.data);
      }
    });
  }, [dataState]);
  // 数据类型
  const dataType = props.type;
  //老师数据
  //日期
  let time = [];
  //都老师
  let teacherDu = [];
  //曹茂桂
  let teacherCao = [];
  //曹茂桂新
  let teacherCao1 = [];
  //杨凯
  let teacherYang = [];
  data.forEach(item => {
    const teacherId = item["teacher"];
    // eslint-disable-next-line
    if (props.unit === "%") {
      // eslint-disable-next-line
      //这种是百分比，因为单位是百分比，所以要乘100
      var number = 10000;
    } else {
      // eslint-disable-next-line
      var number = 100;
    }
    const floatData = Math.floor(item[dataType] * number) / 100;
    if (teacherId === 1) {
      time.push(item["日期"]);
      teacherDu.push(floatData);
    } else if (teacherId === 2) {
      teacherCao.push(floatData);
    } else if (teacherId === 3) {
      teacherCao1.push(floatData);
    } else if (teacherId === 4) {
      teacherYang.push(floatData);
    }
  });

  //toggle 是否显示数据
  const [isTap, setIsTap] = useState(true);
  //定义表头的名字
  const teacher1 = "都业华";
  const teacher2 = "曹茂桂";
  const teacher3 = "曹茂桂新";
  const teacher4 = "杨凯";
  //显示近15天的数据

  //表格数据
  const option = {
    title: {
      text: props.type
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: [teacher1, teacher2, teacher3, teacher4],
      left: "30%",
      selectedMode: "single"
    },
    grid: {
      left: "3%",
      right: "8%",
      bottom: "14%",
      top: "18%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: time,
      name: "时间",
      axisLabel:{
        rotate:45
      }
    },
    yAxis: {
      type: "value",
      name: "单位:" + props.unit
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: [0],
        startValue: time.length - 14,
        endValue: time.length
      }
    ],
    series: [
      {
        name: teacher1,//都业华
        type: "line",
        data: teacherDu,
        itemStyle: { normal: { label: { show: isTap ? true : false } } }, //是否显示数值
        smooth: true ,//true 曲线，false折线,
        symbol: 'circle',//折线点设置为实心点
        symbolSize: 6,   //折线点的大小
        
      },
      {
        name: teacher2, //曹茂桂旧
        type: "line",
        data: teacherCao,
        itemStyle: { normal: { label: { show: isTap ? true : false } } }, //是否显示数值
        smooth: true, //true 曲线，false折线
        symbol: 'circle',//折线点设置为实心点
        symbolSize: 6,   //折线点的大小
      },
      {
        name: teacher3, //曹茂桂新
        type: "line",
        data: teacherCao1,
        itemStyle: { normal: { label: { show: isTap ? true : false } } }, //是否显示数值
        smooth: true, //true 曲线，false折线
        symbol: 'circle',//折线点设置为实心点
        symbolSize: 6,   //折线点的大小
        
      },
      {
        name: teacher4, //杨凯
        type: "line",
        data: teacherYang,
        itemStyle: { normal: { label: { show: isTap ? true : false } } }, //是否显示数值
        smooth: true,
        symbol: 'circle',//折线点设置为实心点
        symbolSize: 6,   //折线点的大小
         //true 曲线，false折线
      }
    ]
  };

  //定义两种状态
  const container = {
    hidden: { backgroundColor: "#F0F0F0" },
    visible: { backgroundColor: "#4CD964" }
  };
  const item = {
    hidden: { x: 0 },
    visible: { x: 19 }
  };
  //
  return (
    <div className="chartContainer">
      <div className="dataRange">
        <Radio.Group defaultValue="day" buttonStyle="solid" onChange={onChange}>
          <Radio.Button value="day">日</Radio.Button>
          <Radio.Button value="week">周</Radio.Button>
          <Radio.Button value="month">月</Radio.Button>
        </Radio.Group>
      </div>
      <motion.div
        className="container"
        initial="hidden"
        animate={isTap ? "visible" : "hidden"}
        variants={container}
      >
        <p>显示数据: </p>
        <motion.div
          className="knob"
          variants={item}
          onClick={() => {isTap ? setIsTap(false) : setIsTap(true)}}
        ></motion.div>
      </motion.div>
      <ReactEcharts
        option={option}
        opts={{ renderer: "svg" }}
        style={{ height: "340px" }}
      />
    </div>
  );
}

export default LineChart;
