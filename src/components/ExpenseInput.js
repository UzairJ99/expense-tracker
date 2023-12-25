import React from "react";

const ExpenseInput = ({expense, index}) => {
    return (
        <div key={index}>
        <div>{expense?.name}</div>
        <div>{expense?.value}</div>
        </div>
      )
}

export default ExpenseInput;