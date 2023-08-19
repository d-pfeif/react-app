import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../core/Card";
import { useState } from 'react'

import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('');
  const filterYearHandler = (newFilterYear) => {
    setFilterYear(newFilterYear)
  }

  const filteredExpenseItemList = filterYear ? props.expenses.filter((e) => e.date.getFullYear() === filterYear) : props.expenses
  console.log(filteredExpenseItemList, filterYear);
  const expenseItemList = filteredExpenseItemList.map((e) => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)
  return (
    <Card className="expenses">
      <ExpenseFilter filterYear={filterYear} onFilterYearChange={filterYearHandler} />
      { expenseItemList }
    </Card>
  );
}

export default Expenses;
