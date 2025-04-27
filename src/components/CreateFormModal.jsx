import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from '../store/defaultCardSlice';

const CreateFormModal = () => {
  const open = useSelector((store) => store.defaultCard.value);
  const dispatch = useDispatch();

  const handleButtonClose = () => {
    dispatch(handleClose());
  }

  return (
    <Dialog
      open={open}
      onClose={handleButtonClose}
      maxWidth={"sm"}
      fullWidth={"100%"}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        },
      }}
    >
      <DialogTitle>Create Feedback Form</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="text"
          label="Label"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button color="success" type="submit">Create</Button>
        <Button
          style={{
            color: "#00000080"
          }}
          onClick={handleButtonClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateFormModal;