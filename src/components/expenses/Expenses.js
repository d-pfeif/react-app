import ExpenseItem from "./ExpenseItem";
import Card from "../core/Card";

import "./Expenses.css";

function Expenses(props) {
  const expenseItemList = props.expenses.map((e) => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)

  return (
    <Card className="expenses">
      { expenseItemList }
    </Card>
  );
}

export default Expenses;
