import { useState } from "react";
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { CreateChatLinkModal } from "./components/CreateChatLinkModal";

const CreateChat = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOpenModal = () => setIsShowModal(!isShowModal);

  return (
    <>
      <Fab 
        color="primary" 
        aria-label="add" 
        onClick={ handleOpenModal }
      >
        <AddIcon />
      </Fab>
      <CreateChatLinkModal isShow={ isShowModal } handleOpenModal={ handleOpenModal } />
    </>
  )
};

export default CreateChat;
