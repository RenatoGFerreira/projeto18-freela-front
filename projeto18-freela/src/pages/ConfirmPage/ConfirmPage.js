import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars";
import apiViagens from "../../services/apiVIagens.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function ConfirmPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [ticket, setTicket] = useState();

  useEffect(getInforTicket, []);

  function getInforTicket() {
    apiViagens
      .getInfoTicket(id)
      .then((res) => {
        console.log(res.data);
        setTicket(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  }
  return (
    <ScreenWithBars>
      {isLoading ? (
        <ThreeDots width={80} height={80} color="#126ba5" />
      ) : (
        <>
          <h1>{ticket.destino}</h1>
          <h2>item</h2>
          <div>item</div>
        </>
      )}
    </ScreenWithBars>
  );
}
