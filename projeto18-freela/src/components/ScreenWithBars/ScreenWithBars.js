import { ScreenContainer } from "./Styled.js"
import Footer from "../Footer/Footer.js"
import Header from "../Header/Header.js"

export default function ScreenWithBars({children}){
    return(
        <ScreenContainer>
            <Header/>
            {children}
            <Footer/>
        </ScreenContainer>
    )
}