import React from "react";

const ExpenseInput = ({ expenseHandler, handleExpenseNameChange, handleExpenseValueChange }) => {
  return (
    <>
      <input type="text" onChange={handleExpenseNameChange} />
      <input type="text" onChange={handleExpenseValueChange} />
      <button onClick={() => expenseHandler()}>Add expense</button>
    </>
  );
};

export default ExpenseInput;
