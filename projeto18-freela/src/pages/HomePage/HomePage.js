import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import { Cards, Lista } from "./Styled.js";
import { StyledLink } from "../../components/StyledLink.js";
import apiViagens from "../../services/apiVIagens";
import { useState } from "react";
import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import TravelCard from "../../components/TravelCard/TravelCard.js";

export default function HomePage() {
  const [viagens, setViagens] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(getViagens, []);

  function getViagens() {
    apiViagens
      .getViagens()
      .then((res) => {
        setViagens(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  }

  return (
    <ScreenWithBars>
      <Cards>
        <InfoCard text={"Escolha sua próxima experiência."} />
        <InfoCard text={"Veja os pacotes disponivels com os locais de partida e data."} />
        <InfoCard text={"Dê um upgrade na a sua experiência"} />
        <InfoCard text={"Viva uma experiência como nunca!"} />
      </Cards>
      <Lista>
        
        {isLoading ? (
          <ThreeDots width={80} height={80} color="#126ba5" />
        ) : (
          viagens.map((viagem) => (
            <Link to={`/CheckInPage/${viagem.id}`} key={viagem.id}>
              <TravelCard name={viagem.experience} />
            </Link>
          ))
        )}
      </Lista>

      <StyledLink to="/CheckInPage">
        Verificar todas as cidades.
      </StyledLink>
    </ScreenWithBars>
  );
}