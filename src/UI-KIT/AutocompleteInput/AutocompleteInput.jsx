import React from 'react';
import {Autocomplete, TextField} from "@mui/material";

const users = [
  'Андрей Дьяконов',
  'Андрей Горбенко',
  'Николай',
  'Юлия',
];

function AutocompleteInput(props) {
  const width = props.size === 'small' ? '250px' : '370px';
  const marginLeft = props.size === 'small' ? "-50px" : "-55px";
  return (
    <div className="auto-complete-input">
      <Autocomplete
        id="userChoice"
        freeSolo
        fullWidth={true}
        autoComplete={true}
        // autoSelect={true}
        autoHighlight={true}
        sx={props.sx}
        options={users}
        renderInput={(params) =>
          <TextField
            {...params}
            label={null}
            // fullWidth={true}
            sx={{
              scale: "0.7", width,
              marginLeft, background: "#FFFFFF",
              fontFamily: "Gilroy", /*input: { borderRadius: '20px' }*/
            }}
          />}
      />
    </div>
  );
}

export default AutocompleteInput;

// export default AutocompleteInput;
