import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../core/Card";
import { useState } from 'react'

import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('');
  const filterYearHandler = (newFilterYear) => {
    setFilterYear(newFilterYear)
  }

  const filteredExpenseItemList = filterYear ? props.expenses.filter((e) => e.date.getFullYear() === filterYear) : props.expenses
  let expenseItemList = filteredExpenseItemList.map((e) => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)

  if (expenseItemList.length === 0) {
    expenseItemList = <p className="expenses__no-data">There are no expenses for this date.</p>
  }

  return (
    <Card className="expenses">
      <ExpenseFilter filterYear={filterYear} onFilterYearChange={filterYearHandler} />
      <ExpenseChart expenses={expenseItemList} />
      { expenseItemList }
    </Card>
  );
}

export default Expenses;
