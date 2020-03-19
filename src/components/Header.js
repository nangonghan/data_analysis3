import React, { useEffect, useState } from 'react'
import './header.css'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = (event) => {
            if (window.pageYOffset > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    //锚点跳转
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }
    return (
        <div className={scrolled ? "Header HeaderScrolled" : "Header"} >
            <div className="HeaderGroup">
                <span onClick={() => scrollToAnchor('top') }>< img src={require('../images/logo.png')} alt="logo" /></span>
                <span onClick={() => scrollToAnchor('tuiGuang') }>推广数据</span>
                <span onClick={() => scrollToAnchor('designer') }>设计数据</span>
                <span onClick={() => scrollToAnchor('yunYing')  }>运营分析</span>
            </div>
        </div>
    )
}
export default Header