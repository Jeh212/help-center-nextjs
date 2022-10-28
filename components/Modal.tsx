import {
  OverLayChatModal,
  Chat,
  AttendantChatSection,
  MessageBox,
  Menssage,
  AttendantInfo,
  CustomerChatSection,
  CustomerInfo,
  CustomerMessageBox,
  CustomerMessage,
  NewMessageArea,
  NewMessageBox,
  ChatActionButtons,
} from "../styles/pages/components/Modal";
import Avatar from "./Avatar";
import AvatarPic from "../assets/avatar.png";
import { Paperclip, PaperPlaneTilt } from "phosphor-react";

interface ModalProps {
  openModal: boolean;
  setOpenModal: () => void;
}

function ChatModal({ openModal, setOpenModal }: ModalProps) {
  if (!openModal) return null;
  return (
    <>
      <OverLayChatModal>
        <h1>Chat Online</h1>
        <Chat>
          <AttendantChatSection>
            <AttendantInfo>
              <Avatar src={AvatarPic} height={70} width={70} />
              <strong>Jean Carlos</strong>
            </AttendantInfo>
            <MessageBox>
              <time>Publicado há 1h</time>
              <Menssage>
                <p>Olá Boa tarde, como eu posso em ajuda?</p>
              </Menssage>
            </MessageBox>
          </AttendantChatSection>

          <CustomerChatSection>
            <CustomerInfo>
              <Avatar src={AvatarPic} height={70} width={70} />
              <strong>Jean Carlos</strong>
            </CustomerInfo>

            <CustomerMessageBox>
              <time className="customer-time">Publicado há 1h</time>
              <CustomerMessage>
                <p>Olá Boa tarde, tenho algumas duvidas!</p>
              </CustomerMessage>
            </CustomerMessageBox>
          </CustomerChatSection>

          <NewMessageArea className="message-box">
            <NewMessageBox>
              <textarea placeholder="Digite a sua mensagem"></textarea>
            </NewMessageBox>

            <ChatActionButtons>
              <button>
                <PaperPlaneTilt size={13} />
                Enviar
              </button>
              <button>
                <Paperclip size={13} />
                Anexo
              </button>
            </ChatActionButtons>
          </NewMessageArea>
        </Chat>
      </OverLayChatModal>
    </>
  );
}
export default ChatModal;
