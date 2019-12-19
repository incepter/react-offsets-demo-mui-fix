import React from "react";
import TextField from "@material-ui/core/TextField";
import useNodeOffsets from "react-offsets";

export default function NewTextField(props) {
  let inputLabelRef = React.useRef();
  if (props.InputLabelProps && props.InputLabelProps.ref) {
    inputLabelRef = props.InputLabelProps.ref;
  }
  const offsets = useNodeOffsets(inputLabelRef);
  return (
    <TextField
      InputProps={{
        ...props.InputProps,
        labelWidth: offsets.offsetWidth
      }}
      InputLabelProps={{
        ...props.InputLabelProps,
        ref: inputLabelRef
      }}
      {...props}
    />
  );
}
