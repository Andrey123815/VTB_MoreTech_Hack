import React from 'react';
import {Autocomplete, TextField} from "@mui/material";

const users = [
  'Андрей Дьяконов',
  'Андрей Горбенко',
  'Николай',
  'Юлия',
];

function AutocompleteInput(props) {
  return (
    <>
      <Autocomplete
        id="userChoice"
        freeSolo
        autoComplete={true}
        autoSelect={true}
        autoHighlight={true}
        sx={props.sx}
        options={users}
        renderInput={(params) =>
          <TextField
            {...params}
            label="Имя пользователя"
            sx={{
              scale: "0.7", width: "calc(295px/0.7)",
              marginLeft: "-65px", background: "#FFFFFF",
              fontFamily: "Gilroy"
          }}
          />}
      />
    </>
  );
}

export default AutocompleteInput;

// export default AutocompleteInput;
