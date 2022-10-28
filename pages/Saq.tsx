import {
  Cardholder,
  CaretDown,
  CurrencyDollar,
  MapPin,
  Truck,
} from "phosphor-react";
import { useState } from "react";
import DashboardInfo from "../components/DashboardInfo";
import { HeadersContainer, MainContainer, InfoCard } from "../styles/pages/saq";

function Saq() {
  const [shipState, setShipState] = useState(false);
  const [paymentState, setPaymentState] = useState(false);
  const [pixState, setPixState] = useState(false);
  const [mailState, setMailState] = useState(false);
  const [quote, setQuote] = useState("");

  const handleOpenExtraInfo = (props: any) => {
    switch (props.target.id) {
      case "ship":
        const shipMessage = `Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorem
        sint cumque itaque dolorum illo, omnis voluptatibus.`;

        setShipState(true);
        setQuote(shipMessage);
        break;
      case "payment":
        const paymentMessage = `Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorem
        sint cumque itaque dolorum illo, omnis voluptatibus.`;

        setPaymentState(true);
        setQuote(paymentMessage);
        break;
      case "pix":
        const pixMessage = `Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorem
        sint cumque itaque dolorum illo, omnis voluptatibus.`;

        setPixState(true);
        setQuote(pixMessage);
        break;
      case "mail":
        const mailMessage = `Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorem
        sint cumque itaque dolorum illo, omnis voluptatibus.`;

        setMailState(true);
        setQuote(mailMessage);
        break;
      default:
        break;
    }
  };

  const handleCloseshipInfo = () => setShipState(false);
  const handleClosePaymentInfo = () => setPaymentState(false);
  const handleClosePixInfo = () => setPixState(false);
  const handleCloseMailInfo = () => setMailState(false);

  return (
    <>
      <HeadersContainer>
        <h1>SAQ</h1>
      </HeadersContainer>
      <MainContainer>
        <DashboardInfo />

        <InfoCard
          className="info"
          onMouseOver={handleOpenExtraInfo}
          onMouseOut={handleCloseshipInfo}
          id="ship"
        >
          <Truck />
          {shipState === false ? (
            <strong>
              Posso alterar o endereço de entrega com o objeto em transporte?
            </strong>
          ) : (
            <strong>{quote}</strong>
          )}
          <CaretDown size={32} />
        </InfoCard>

        <InfoCard
          className="info"
          onMouseOver={handleOpenExtraInfo}
          onMouseOut={handleClosePaymentInfo}
          id="payment"
        >
          <Cardholder />
          {paymentState === false ? (
            <strong>Qual é o prazo para confirmação de pagamento?</strong>
          ) : (
            <strong>{quote}</strong>
          )}
          <CaretDown size={32} />
        </InfoCard>

        <InfoCard
          className="info"
          onMouseOver={handleOpenExtraInfo}
          onMouseOut={handleClosePixInfo}
          id="pix"
        >
          <CurrencyDollar />
          {pixState === false ? (
            <strong>Como comprar pelo PIX</strong>
          ) : (
            <strong>{quote}</strong>
          )}
          <CaretDown size={32} />
        </InfoCard>

        <InfoCard
          className="info"
          onMouseOver={handleOpenExtraInfo}
          onMouseOut={handleCloseMailInfo}
          id="mail"
        >
          <MapPin />
          {mailState === false ? (
            <strong>Como realizar o rastreio nos Correios?</strong>
          ) : (
            <strong>{quote}</strong>
          )}
          <CaretDown size={32} />
        </InfoCard>
      </MainContainer>
    </>
  );
}
export default Saq;
