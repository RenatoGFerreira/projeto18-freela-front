import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars.js"
import InfoCard from "../../components/InfoCard/InfoCard.js"
import { Cards } from "./Styled.js"
import { StyledForm } from "../../components/StyledForm.js"
import { StyledLink } from "../../components/StyledLink.js"

export default function HomePage(){
    return(
        <ScreenWithBars>
                <StyledForm>
                    <select name="experiências">
                        <option value="">-- Selecione sua próxima experiência--</option>
                        <option value="">Uma vista acima das nuvens na Serra do Caparaó</option>
                        <option value="">10 dias de Estrada Real</option>
                        <option value="">Rotas do Ouro de Ouro Preto e arredores</option>
                        <option value="">Climas Frios e intensos de Monte Verde</option>
                        <option value="">Navegar pelos Canions de Capitólio</option>
                        <option value="">Terras Mágicas de Sao Thomé das Letras</option>
                        <option value="">Mometos Mágicos na Serra do Caraça</option>
                        <option value="">Circuito das Aguas de Minas Gerais - Caxambú</option>
                        <option value="">Maior Museu aberto do Mundo em Inhotim</option>
                        <option value="">Rotas do Queijo e do Doce da Serra da Canastra</option>
                        <option value="">Viagem de Trem MINAS-ESPIRITO SANTO</option>
                    </select>
                    <button type="submit">Conhecer a Experiência</button>
                </StyledForm>

            <Cards>
                <InfoCard text={"De onde para aonde."}/>
                <InfoCard text={"Agende sua passagem com data e hora"}/>
                <InfoCard text={"Personalize a sua experiência"}/>
                <InfoCard text={"Viva como nunca!"}/>
            </Cards>

            <StyledLink to="/CheckInPage">Montar minha próxima Experiência</StyledLink>
        </ScreenWithBars>
    )
}