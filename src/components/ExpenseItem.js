import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <div>
      <div>{expense?.name}</div>
      <div>{expense?.value}</div>
    </div>
  );
};

export default ExpenseItem;
