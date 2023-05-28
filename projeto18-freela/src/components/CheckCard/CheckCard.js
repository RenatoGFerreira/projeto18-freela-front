import { Square } from "./Styled.js"

export default function CheckCard({id, date, partida, preco}){
    return(
        <Square>
            id do card={id}
            data={date}
            partida={partida}
            preco={preco}
        </Square>
    )
}