import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";

function Expenses(props) {
  const expenseItemList = props.expenses.map((e) => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />)

  return (
    <div className="expenses">
      { expenseItemList }
    </div>
  );
}

export default Expenses;
