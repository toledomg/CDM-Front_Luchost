import React from "react";
import { forwardRef } from "react";

function InputDefer({ label, id, type, error, placeholder, ...rest }, ref) {
  return (
    <>
      <label htmlFor={id}> {label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {error ? <p>{error}</p> : null}
    </>
  );
}

export default forwardRef(InputDefer);
