import styled from "styled-components";

export const CardContainer = styled.div`
    perspective: 400px;
`

export const CardFigure = styled.div`
  width: 500px;
  height: 110px;
  background: #185795;
  border: 2px solid #555555;
  border-radius: 10px;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform .5s;
  margin: 10px;
  :hover{
    transform: translateZ(5px) rotateX(5deg) rotateY(5deg);
  }
`

export const TextContainer = styled.div`
    color: #fff;
    padding: 10px;
    position: absolute;
    top: 30%;
    right: 5%;
    transform: translateY(-50%);
    transition: transform .5s;
    font: 600 1.2rem monospace;
    text-shadow: -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
`