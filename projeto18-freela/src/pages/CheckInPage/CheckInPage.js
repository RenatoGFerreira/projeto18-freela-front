import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars"
import CheckCard from "../../components/CheckCard/CheckCard.js"
import { ScreenContainer, TextContainer, Cards } from "./Styled"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import apiViagens from "../../services/apiVIagens.js";
import { ThreeDots } from "react-loader-spinner";

export default function CheckInPage(){
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [ experience, setExperience] = useState()

    useEffect(getInforViagens, [])

    function getInforViagens(){
        apiViagens.getInfoViagens(id)
        .then((res) => {
            console.log(res.data)
            setExperience(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
    }
    
    return(
        <ScreenWithBars>
        <ScreenContainer>
            {isLoading? (
             <ThreeDots width={80} height={80} color="#126ba5" />
            ) : (
                <TextContainer>
                <h1>{experience.experience}</h1>
                <h2>{experience.name}</h2>
                <p>{experience.description}</p>

                <Cards>
                    {experience.travelDates.map((item) => (
                    <Link to={`/ConfirmPage/${item.id}`} key={item.id}>
                        <CheckCard 
                        id={item.id}
                        date={item.date}
                        partida={item.local}
                        preco={item.price}

                        />
                    </Link>
                    ))}
                </Cards> 
                </TextContainer>
            )}
        </ScreenContainer>
        </ScreenWithBars>
    )
}

