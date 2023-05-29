import styled from "styled-components";

export const Square = styled.div`
  box-sizing: border-box;
  width: 190px;
  height: 254px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
  z-index: 5;
  :hover {
  border: 1px solid black;
  transform: scale(1.05);
  :active {
  transform: scale(0.95) rotateZ(1.7deg);
}
}
`