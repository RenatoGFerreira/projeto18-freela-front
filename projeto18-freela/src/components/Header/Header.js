import { Link } from "react-router-dom"
import { ScreenContainer, LogoContainer, PhotoContainer, ImageContainer } from "./Styled.js"
import alto_caparao from "../../images/alto_caparao.jpg"

export default function Header(){
    return (
        <ImageContainer>
        <ScreenContainer>
            <Link to="/">
            <LogoContainer>
                <span>VIAGENS ALUCINANTES</span>
                <p>Minas Gerais</p>
            </LogoContainer>
            </Link>
        </ScreenContainer>
        <PhotoContainer>
        <img src={alto_caparao} alt="vista do alto caparaó"/>
        </PhotoContainer>
        </ImageContainer>
    )
}