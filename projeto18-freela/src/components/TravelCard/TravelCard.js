import { CardContainer, CardFigure, TextContainer } from "./Styled";

export default function TravelCard({ name }) {
  return (
    <CardContainer>
      <CardFigure>
        <TextContainer>{name}</TextContainer>
      </CardFigure>
    </CardContainer>
  );
}
