import { useState, ChangeEvent } from "react";
import { 
  Modal, 
  Typography,
  Box,
  TextField,
  Button,
  Input,
} from "@mui/material";

import { validateNameUser } from "./CreateChatLinkModal.utils";

import styles from "./CreateChatLinkModal.styles";

interface ICreateChatLinkModalProps {
  isShow: boolean;
  handleOpenModal: () => void;
}

const CreateChatLinkModal = ({
  isShow,
  handleOpenModal,
}: ICreateChatLinkModalProps) => {
  const [nameUser, setNameUser] = useState<string>('');
  const [isShowLink, setIsShowLink]  = useState<boolean>(false);

  const isDisableButton = !validateNameUser(nameUser);

  const handleInputName = (event: ChangeEvent<HTMLInputElement>) => setNameUser(event.target.value);

  const handleCreateUser = () => setIsShowLink(validateNameUser(nameUser));

  const renderInputLink = () => {
    if (!isShowLink) return null;
  
    const linkChat = `http://localhost:3000/chat/${(+new Date()).toString(16)}`; //TODO убрать в env или в константу 

    return <Input defaultValue={ linkChat }  />
  }
    
  
  return (
    <Modal 
      open={ isShow } 
      onClose={ handleOpenModal }
    >
      <Box sx={ styles.modal_content }>
        <Typography id="modal-modal-title" variant="h4" component="h3">
          Создание аккаунта
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="p">
          Придумайте имя, от которого вы будете писать другим пользователям.
        </Typography>
        <TextField 
          required 
          value={ nameUser } 
          label="Имя пользователя" 
          type="text"
          onChange={ handleInputName }
        />
        { renderInputLink() }
        <Button 
          variant="contained" 
          disabled={ isDisableButton }
          onClick={ handleCreateUser }
        >
          Создать чат
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateChatLinkModal;
