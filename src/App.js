/*
This is the file for the apps main UI. It will contain
a form-like structure to add income streams and expenses.
This page will also show an overall balance.
*/



// LIBRARIES
import React, { useEffect } from "react";
import { useState } from "react";
// STYLES
import "./App.css";
// COMPONENTS
import ExpenseInput from "./components/ExpenseInput";
import CashflowInput from "./components/CashflowInput";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  // cashflows will be the income streams
  const [cashflows, setCashflows] = useState([0]);
  const [expenses, setExpenses] = useState([]);
  // input/output values
  const [input, setInput] = useState({ name: "purchase", value: 0 });
  const [balance, setBalance] = useState(0);

  /**
   * adds a new income stream to the list
   */
  const addCashflow = () => {
    let newcashflow = [...cashflows];
    newcashflow.push(0);
    setCashflows(newcashflow);
  };

  /**
   * adds a new expense to the list
   */
  const addExpense = () => {
    let newexpenses = [...expenses];
    newexpenses.push({
      name: input.name,
      value: input.value,
    });
    setExpenses(newexpenses);
    console.log(expenses);
  };

  /**
   * This will update the expense's name as it will appear
   * on the list of expenses
   * @param {DOMElement} e input box
   */
  const handleExpenseNameChange = (e) => {
    let newinput = {
      name: e.currentTarget.value,
      value: input.value,
    };
    setInput(newinput);
  };

  /**
   * This will update the cost of the expense as it will
   * appear on the list of expenses and will be used in
   * calculating the final balance.
   * @param {DOMElement} e input box
   */
  const handleExpenseValueChange = (e) => {
    let newinput = {
      value: e.currentTarget.value,
      name: input.name,
    };
    setInput(newinput);
  };

  /**
   * Updates the value of the income stream as it will be
   * used in calculation of the final balance.
   * @param {DOMElement} e input box
   * @param {integer} stream the index of the income stream from the list
   */
  const handleIncomeChange = (e, stream) => {
    let newincome = [...cashflows];
    newincome[stream] = e.currentTarget.value;
    setCashflows(newincome);
  };

  // always update the final balance on any changes to cashflows and expenses
  useEffect(() => {
    let sum = 0;
    // add positive cashflow
    cashflows.length > 0 &&
      cashflows.forEach((stream) => (sum += parseFloat(stream)));
    // subtract negative cashflow
      expenses.length > 0 &&
      expenses.forEach((item) => (sum -= parseFloat(item.value)));
    setBalance(sum.toFixed(2));
  }, [cashflows, expenses]);

  return (
    <>
      <div>Expense Tracker</div>

      {/* income streams */}
      <div>
        {cashflows.map((income, index) => {
          return (
            <CashflowInput incomeHandler={handleIncomeChange} index={index} />
          );
        })}
      </div>
      <button onClick={() => addCashflow()}>Add income stream</button>
      
      {/* expenses */}
      <div>
        {expenses.map((expense, index) => {
          return (<ExpenseItem key={index} expense={expense} />)
        })}
      </div>

      <ExpenseInput
        expenseHandler={addExpense}
        handleExpenseNameChange={handleExpenseNameChange}
        handleExpenseValueChange={handleExpenseValueChange}
      />

      {/* final balance */}
      <div>BALANCE:</div>
      <div>{balance}</div>
    </>
  );
}

export default App;
