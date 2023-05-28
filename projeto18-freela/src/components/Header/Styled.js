import styled from "styled-components";
import alto_caparao from "../../images/alto_caparao.jpg"

export const ScreenContainer = styled.div`
    width: 100%;
    height: 50px;
    padding: 0px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 10;
    background: #185795;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    & > img {
        cursor: pointer;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-size: 20px;    
        font-family: 'Knewave', cursive;
        color: #000;
    }
    p{
        font-family: 'Rock Salt', cursive;
        color: #fff;
        align-self: flex-end;
        padding-right: 7px;
    }
    a{
        text-decoration: none;
    }
`

export const PhotoContainer = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    img{
        width: 100%;
        opacity: 0.6;   
    }
`

export const ImageContainer = styled.div`
    background-image: url(alto_caparao);
`
