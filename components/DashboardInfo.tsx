import { ChatsTeardrop, Envelope } from "phosphor-react";
import {
  BottomSide,
  DashBoard,
  EmailHelpButton,
  OnlineHelpButton,
  Profile,
} from "../styles/pages/components/DashboardInfo";
import Image from "next/future/image";
import AvatarPic from "../assets/avatar.png";
import CoverPic from "../assets/cover.png";

import Avatar from "./Avatar";
import { useState } from "react";
import ChatModal from "./Modal";

function DashboardInfo() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleToOpenTheModal() {
    setIsModalOpen(true);
  }
  function handleToCloseTheModal() {
    setIsModalOpen(false);
  }

  return (
    <DashBoard>
      <Image className="cover" src={CoverPic} width={50} height={50} alt="" />
      <Profile>
        <Avatar src={AvatarPic} height={80} width={80} />
        <strong>Jean Carlos</strong>
      </Profile>
      <BottomSide>
        <OnlineHelpButton
          onClick={handleToOpenTheModal}
          onDoubleClickCapture={handleToCloseTheModal}
        >
          <ChatsTeardrop />
          Atendimento Online
        </OnlineHelpButton>

        <EmailHelpButton>
          <Envelope />
          E-mail de Contato
        </EmailHelpButton>
      </BottomSide>
      <ChatModal openModal={isModalOpen} setOpenModal={handleToOpenTheModal} />
    </DashBoard>
  );
}

export default DashboardInfo;
