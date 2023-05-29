import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars.js";
import apiViagens from "../../services/apiVIagens.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { ScreenContainer, InfoTravel, InfoUser } from "./Styled.js";
import {StyledForm} from "../../components/StyledForm.js"
import {StyledInput} from "../../components/StyledInput.js"




export default function ConfirmPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [ticket, setTicket] = useState();
  const [form, setForm] = useState({ email: "", name: "", cpf: "" })


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

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
}

function handleSend(e) {
    e.preventDefault()
    setIsLoading(true)

}

  return (
    <ScreenWithBars>
      {isLoading ? (
        <ThreeDots width={80} height={80} color="#126ba5" />
      ) : (
        <ScreenContainer>
          <InfoTravel>
          <h1>Experiência: {ticket.experiencia}</h1>
          <h1>Destino: {ticket.destino}</h1>
          <h2>Partida: {ticket.partida}</h2>
          <h2>Data: {ticket.data}</h2>
          <h2>Hora: {ticket.hora}</h2>
          </InfoTravel>
          <InfoUser>
          <StyledForm onSubmit={handleSend}>
                <StyledInput
                    name="email"
                    placeholder="email"
                    type="email"
                    required
                    disabled={isLoading}
                    value={form.email}
                    onChange={handleForm}
                />
                <StyledInput
                    name="name"
                    placeholder="nome"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.name}
                    onChange={handleForm}
                />
                <StyledInput
                    name="cpf"
                    placeholder="foto"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.cpf}
                    onChange={handleForm}
                />

                <button disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#fff" />
                    ) : (
                        "Cadastrar"
                    )}
                </button>
            </StyledForm>
          </InfoUser>
        </ScreenContainer>
      )}
    </ScreenWithBars>
  );
}
