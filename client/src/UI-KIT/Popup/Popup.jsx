import React from 'react';
import {Box, Modal} from "@mui/material";

function Popup(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={{width: "min-content"}}>
        {props.children}
      </Box>
    </Modal>
  );
}

export default Popup;
