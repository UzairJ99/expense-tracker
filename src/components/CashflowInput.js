/*
This component is to add income streams.
*/

// LIBRARIES
import React from "react";

const CashflowInput = ({incomeHandler, index}) => {

  return (
    <>
      <div>Income {index + 1}</div>
      <input
        placeholder={0}
        type="text"
        onChange={(e) => incomeHandler(e, index)}
      />
    </>
  );
};

export default CashflowInput;