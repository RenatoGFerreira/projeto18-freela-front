import styled from "styled-components";

export const Cards = styled.div`
    margin: 80px 0px;
    border-radius: 80% 13% 98% 3%/ 9% 98% 8% 98%;
    background: linear-gradient(90deg, rgba(199,196,251,0.5) 0%, rgba(24,87,149,.5) 67%, rgba(24,87,149,.5) 100%);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    width: 95%;
    height: 432px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    z-index: 5;
`


export const Lista = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    z-index: 5;
`

export const PhraseEffect = styled.div`
    z-index: 5;
    h1{
        font-size: 45px;
        font-family: 'Bangers', cursive;
        font-weight: 900;
        letter-spacing: 0.3rem ;
        line-height: 4.1rem ;
        text-align: center;

    }
    span{
        color: #fff;
        box-shadow: 1px black;
        -webkit-text-stroke: 1px #000;
    }
`