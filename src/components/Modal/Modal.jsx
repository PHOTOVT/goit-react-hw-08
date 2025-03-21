import { createPortal } from "react-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/slice";
import { selectIsOpenModal } from "../../redux/modal/selectors";

const ModalWindow = ({ onSuccess, children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpenModal);

  const onClose = () => dispatch(closeModal());

  return createPortal(
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Notification
          </Typography>
          {children}
          <Button
            onClick={onSuccess}
            variant="contained"
            color="success"
            sx={{
              backgroundColor: "black",
              "&:hover": { backgroundColor: "indigo" },
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
              marginRight: "5px",
            }}
          >
            Confirm
          </Button>
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              backgroundColor: "black",
              "&:hover": { backgroundColor: "indigo" },
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Decline
          </Button>
        </Box>
      </Modal>
    </>,
    document.getElementById("modal-root")
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "1px solid #777",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default ModalWindow;
