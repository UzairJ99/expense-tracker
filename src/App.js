import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [cashflows, setCashflows] = useState([1]);
  const [expenses, setExpenses] = useState([{}]);
  const [input, setInput] = useState({name: 'purchase', value: 0});

  const addCashflow = () => {
    let newcashflow = [...cashflows];
    newcashflow.push(1);
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

  return (
    <>
      <div>Expense Tracker</div>
      <div>
        {
          cashflows.map((income, index) => {
            return (
              <div key={index}>
              <div>Income {index+1}</div><input />
              </div>
            )
          })
        }
      </div>
      <button onClick={()=>addCashflow()}>Add income stream</button>
      <div>
        {
          expenses.map((expense, index) => {
            return (
              <div key={index}>
              <div>{expense?.name}</div>
              <div>{expense?.value}</div>
              </div>
            )
          })
        }
      </div>

      <input type="text" onChange={handleExpenseNameChange}/>
      <input type="text" onChange={handleExpenseValueChange} />
      <button onClick={()=>addExpense()}>Add expense</button>
    </>
  );
}

export default App;
