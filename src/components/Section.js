import React from 'react';
import styled from 'styled-components';
import Wave from './Wave'

const SectionGroup = styled.div`
   width:100%;
   background:url(${props => props.image});
   height: 520px;
   background-size:cover;
   display:grid;
   position: relative;
   z-index:-7 !important;
   @media(max-width:720px){
       height:780px;
   }
`
const SectionText = styled.h2`
    color:white;
    font-size:50px;
    text-align:center;
    font-weight: 700;
    line-height:520px
   
`
const WaveTop = styled.div`
   position:absolute;
   width:100%;
   top:-6px;
   transform:rotate(180deg);
`
const WaveBottom = styled.div`
   position:absolute;
   width:100%;
   bottom:-6px;

`
function Section(props) {
        return (
            <SectionGroup image={require('../images/wallpaper3.jpg')}>
                <WaveTop><Wave /></WaveTop>
                <WaveBottom><Wave /></WaveBottom>
                <SectionText id={props.id}>{props.title}</SectionText>
            </SectionGroup>
        )
    }


export default Section