import { TextField } from "@mui/material";

const EditForm = ({ editedContact, handleEditChange }) => {
  return (
    <form>
      <TextField
        label="New name"
        name="name"
        value={editedContact.name}
        onChange={handleEditChange}
        fullWidth
        margin="normal"
        sx={{
          marginBottom: 2,
          "& label.Mui-focused": { color: "indigo" },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": { borderColor: "indigo" },
            "&.Mui-focused fieldset": {
              borderColor: "indigo",
              borderWidth: 2,
            },
          },
        }}
      />
      <TextField
        label="New number"
        name="number"
        value={editedContact.number}
        onChange={handleEditChange}
        fullWidth
        margin="normal"
        sx={{
          marginBottom: 2,
          "& label.Mui-focused": { color: "indigo" },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": { borderColor: "indigo" },
            "&.Mui-focused fieldset": {
              borderColor: "indigo",
              borderWidth: 2,
            },
          },
        }}
      />
    </form>
  );
};

export default EditForm;
