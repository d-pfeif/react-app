import "./ExpenseForm.css";
import { useState } from 'react'

function ExpenseForm() {
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setNewTitle(value)
    } else if (identifier === "amount") {
      setNewAmount(value)
    } else if (identifier === "date") {
      setNewDate(value)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    let expense = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate)
    }
    console.log(expense);

    inputChangeHandler('title', '')
    inputChangeHandler('amount', '')
    inputChangeHandler('date', '')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={(event) => inputChangeHandler("title", event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={newAmount} onChange={(event) => inputChangeHandler("amount", event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={newDate} onChange={(event) => inputChangeHandler("date", event.target.value)} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm