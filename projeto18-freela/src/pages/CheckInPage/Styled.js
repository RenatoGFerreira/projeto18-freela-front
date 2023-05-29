import styled from "styled-components"

export const ScreenContainer = styled.div`

    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export const TextContainer = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    h1{
        font: 600 1.5rem monospace;
        text-align: center;
    }
    h2{
        font: 600 1.2rem monospace;
        text-align: center;
    }
    p{
        width: 80%;
        margin: 20px;
        align-self: center;
        font: 600 1.0rem monospace;

    }
`
export const Cards = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border-radius: 10px;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    z-index: 5;
`