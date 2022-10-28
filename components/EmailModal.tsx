import {
  Envelope,
  IdentificationBadge,
  Question,
  Paperclip,
  PaperPlaneTilt,
} from "phosphor-react";
import {
  EmailContainer,
  EmailForm,
  InputDestinationEmail,
  InputName,
  InputSubject,
  OverLayEmailModal,
  NewEmailMessage,
  ContentContainer,
  NewMessageBox,
  SendEmailButton,
} from "../styles/pages/components/EmailModa";

interface EmailModalProps {
  openEmailModal: boolean;
  setOpenEmailModal: () => void;
}

export default function EmailModal({
  openEmailModal,
  setOpenEmailModal,
}: EmailModalProps) {
  if (!openEmailModal) return null;

  return (
    <OverLayEmailModal>
      <h1>Atendimento E-Mail</h1>
      <EmailContainer>
        <EmailForm>
          <InputName>
            <IdentificationBadge size={22} />
            <input type="text" placeholder="Nome" />
          </InputName>

          <InputDestinationEmail>
            <Envelope size={22} />
            <input type="email" placeholder="E-Mail" />
          </InputDestinationEmail>

          <InputSubject>
            <Question size={22} />
            <input type="text" placeholder="Assunto" />
          </InputSubject>
        </EmailForm>

        <NewEmailMessage>
          <ContentContainer>
            <NewMessageBox>
              <textarea placeholder="Digite a sua messagem"></textarea>
            </NewMessageBox>
            <SendEmailButton>
              <button>
                <PaperPlaneTilt size={13} />
                Enviar
              </button>
              <button>
                <Paperclip size={13} />
                Anexo
              </button>
            </SendEmailButton>
          </ContentContainer>
        </NewEmailMessage>
      </EmailContainer>
    </OverLayEmailModal>
  );
}
