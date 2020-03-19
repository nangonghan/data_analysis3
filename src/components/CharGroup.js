import React from 'react'
import { motion } from "framer-motion"
import LineChart from './LineChart'

function ChatGroup(props) {
    //定义显示的数据类别
    const dataType = {
        "tuiGuang": [
            { dataType: "实际消耗", unit: "元", },
            { dataType: "完播率", unit: "%" },
            { dataType: "订阅成本", unit: "元" },
            { dataType: "CPC", unit: "元" },
            { dataType: "转微成本", unit: "元" },
            { dataType: "转微数", unit: "人" }
        ],
        "Designer": [
            { dataType: "UV", unit: "个" },
            { dataType: "UV/PV", unit: "%" },
            { dataType: "转化率", unit: "%" },
            { dataType: "点击率", unit: "%" }
        ],
        "yunYing": [
            { dataType: "订阅率", unit: "%" },
            { dataType: "播放转微率", unit: "%" },
            { dataType: "粉转微率", unit: "%" },
            { dataType: "CPM", unit: "元" },
            { dataType: "完播成本", unit: "元" },
            { dataType: "订阅数", unit: "人" }
        ]
    }
    //map上面的数组
    if (props.type === "tuiGuang" ) {
        // eslint-disable-next-line
        var groupType = dataType.tuiGuang  
    } else if (props.type === "Designer") {
        // eslint-disable-next-line
        var groupType = dataType.Designer
    } else {
        // eslint-disable-next-line
        var groupType = dataType.yunYing
    }
    const groupList = groupType.map((item, index) => {
        return (
            <motion.li 
                whileHover={{ scale: 1.01, y:-2,boxShadow: "0px 10px 80px 10px rgba(1, 10, 243, 0.1)" }} 
                transition={{ duration: 0.45 }} 
                key={index} 
                className="chatUnit">
                <LineChart type={item.dataType} unit={item.unit} />
            </motion.li>
        )
    })
    return (
        <ul className="chatGroup">
            {groupList}
        </ul>
    )

}

export default ChatGroup