import { CardContainer } from "./Styled"

export default function TravelCard({name}){
    return(
        <CardContainer>
            <h1>{name}</h1>
        </CardContainer>
    )
}