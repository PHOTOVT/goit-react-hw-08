import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { TextField } from "@mui/material";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const onFilter = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <p>Сontact search</p>
      <TextField
        fullWidth
        id="search"
        name="search"
        label="Search"
        type="text"
        value={filterName}
        onChange={(e) => onFilter(e.target.value)}
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
    </div>
  );
};

export default SearchBox;
