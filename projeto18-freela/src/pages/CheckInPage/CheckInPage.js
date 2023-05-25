import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import CheckCard from "../../components/CheckCard/CheckCard.js"
import { Cards } from "./Styled"
export default function CheckInPage(){
    return(
        <ScreenWithBars>
        <h1>Passagens para a Experiência</h1>
        <h2>10 dias de Estrada Real</h2>
        <Cards>
            <CheckCard/>
            <CheckCard/>
            <CheckCard/>
            <CheckCard/>
            <CheckCard/>
            <CheckCard/>
            <CheckCard/>
            <CheckCard/>
            <CheckCard/>
        </Cards>
        </ScreenWithBars>
    )
}