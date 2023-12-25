import React, { useEffect } from 'react';
import {useState} from 'react';
import './App.css';
import ExpenseInput from './components/ExpenseInput';
import CashflowInput from './components/CashflowInput';

function App() {
  const [cashflows, setCashflows] = useState([0]);
  const [expenses, setExpenses] = useState([]);
  const [input, setInput] = useState({name: 'purchase', value: 0});
  const [balance, setBalance] = useState(0);

  const addCashflow = () => {
    let newcashflow = [...cashflows];
    newcashflow.push(0);
    setCashflows(newcashflow);
  }

  const addExpense = () => {
    let newexpenses = [...expenses];
    newexpenses.push({
      name: input.name,
      value: input.value
    });
    setExpenses(newexpenses);
  }

  const handleExpenseNameChange = (e) => {
    let newinput = {
      name: e.currentTarget.value,
      value: input.value
    }
    setInput(newinput);
  }

  const handleExpenseValueChange = (e) => {
    let newinput = {
      value: e.currentTarget.value,
      name: input.name
    }
    setInput(newinput);
  }

  const handleIncomeChange = (e, stream) => {
    let newincome = [...cashflows];
    newincome[stream] = e.currentTarget.value;
    setCashflows(newincome);
  }

  useEffect(() => {
    let sum = 0;
    cashflows.length > 0 && cashflows.forEach(stream => sum += parseFloat(stream));
    expenses.length > 0 && expenses.forEach(item => sum -= parseFloat(item.value))
    setBalance(sum.toFixed(2));
  },[cashflows, expenses])

  return (
    <>
      <div>Expense Tracker</div>
      <div>
        {
          cashflows.map((income, index) => {
            return (
              <CashflowInput incomeHandler={handleIncomeChange} index={index} />
            )
          })
        }
      </div>
      <button onClick={()=>addCashflow()}>Add income stream</button>
      <div>
        {
          expenses.map((expense, index) => {
            <ExpenseInput expense={expense} index={index} />
          })
        }
      </div>

      <input type="text" onChange={handleExpenseNameChange}/>
      <input type="text" onChange={handleExpenseValueChange} />
      <button onClick={()=>addExpense()}>Add expense</button>

      <div>BALANCE:</div>
      <div>{balance}</div>
    </>
  );
}

export default App;
