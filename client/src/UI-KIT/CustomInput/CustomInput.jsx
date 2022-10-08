import React from 'react';

function CustomInput(props) {
  const {styles, placeholder} = props.settings;

  return (
    <React.Fragment>
      <input style={styles} type="text" placeholder={placeholder}/>
    </React.Fragment>
  );
}

export default CustomInput;
