import React, { useState } from "react";
import { motion } from "framer-motion";
import LineChart from "./LineChart";
import { Checkbox, Row, Col } from "antd";

function ChatGroup(props) {
  //定义显示的数据类别
  const dataType = [
    { dataType: "实际消耗", unit: "元" },
    { dataType: "完播率", unit: "%" },
    { dataType: "订阅成本", unit: "元" },
    { dataType: "CPC", unit: "元" },
    { dataType: "转微成本", unit: "元" },
    { dataType: "转微数", unit: "人" },
    { dataType: "UV", unit: "个" },
    { dataType: "UV/PV", unit: "%" },
    { dataType: "转化率", unit: "%" },
    { dataType: "点击率", unit: "%" },
    { dataType: "订阅率", unit: "%" },
    { dataType: "播放量", unit: "个" },
    { dataType: "播放转微率", unit: "%" },
    { dataType: "粉转微率", unit: "%" },
    { dataType: "CPM", unit: "元"},
    { dataType: "完播成本", unit: "元" },
    { dataType: "订阅数", unit: "人" }
  ];

  //定义一个筛选数组
  const [seletedArr, setSeletedArr] = useState([]);
  function onChange(checkedValues) {
    setSeletedArr(checkedValues);
    
  }
  //map选则的数组
  const groupType = [];
  
  //根据已选择的index做筛选
  seletedArr.forEach(key=>{
    groupType.push(dataType.find(item=>item.dataType===key))
  })
  const groupList = groupType.map((item,index) => {
    return (
      <motion.li
        whileHover={{
          scale: 1.01,
          y:-2,
          boxShadow: "0px 10px 80px 10px rgba(1, 10, 243, 0.1)"
        }}
        transition={{ duration: 0.45 }}
        key={index}
        className="chatUnit"
      >
        <LineChart type={item.dataType} unit={item.unit} />
      </motion.li>
    );
  });
  //多选框
  const gap = 4;
  const CheckboxGroup = dataType.map( (item,index) => {
      return(
        <Col span={gap} key={index}>
          <Checkbox value={item.dataType} > {item.dataType}</Checkbox>
        </Col>
      )
  })
  return (
    <div>
      <motion.div 
          className="seleted"         
          whileHover={{
            scale: 1.01,
            y:-2,
            boxShadow: "0px 10px 80px 10px rgba(1, 10, 243, 0.1)"
          }}
        transition={{ duration: 0.45 }}>
        <Checkbox.Group style={{ width: "100%"}} onChange={onChange}>
          <Row >
            {CheckboxGroup}
          </Row>
        </Checkbox.Group>
      </motion.div>
      <ul className="chatGroup">{groupList}</ul>
    </div>
  );
}

export default ChatGroup;