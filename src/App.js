import React from "react";
import './App.css';
//引入组件
import Banner from './components/Banner'
import Header from './components/Header'
import ChatGroup from './components/CharGroup'
import CustomizeChatGroup from './components/CustomizeChatGroup'
import Section from './components/Section'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div>
        <h2 className="title" id="tuiGuang">推广数据实时走势</h2>
        <ChatGroup type={"tuiGuang"}/>
      </div>
      <Section title={"设计师数据实时走势"} id={"designer"}/>
      <ChatGroup type={"Designer"} />
      <Section title={"运营数据自定义分析"} id={"yunYing"}/>
      <CustomizeChatGroup  />
    </div>
  );
}
export default App;
