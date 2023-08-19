

import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const setExpenseFilterHandler = (event) => {
    props.onFilterYearChange(Number(event.target.value))
  }

  return (
    <div className="expense-filter">
      <label>Filter Year:</label>
      <select className="expense-filter__select" name="year" onChange={setExpenseFilterHandler}>
        <option></option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  )
}

export default ExpenseFilter