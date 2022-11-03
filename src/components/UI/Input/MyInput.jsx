import React from "react";

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className="MyInput" />;
});

export default MyInput;
