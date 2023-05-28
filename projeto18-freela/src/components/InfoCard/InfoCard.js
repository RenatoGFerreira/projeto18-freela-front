import { Square } from "./Styled.js"

export default function InfoCard({text}){
    return(
        <Square>
            <h1>{text}</h1>
        </Square>
    )
}