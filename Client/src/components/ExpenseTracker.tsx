import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";

function ExpenseTracker() {
  return (
    <>
      <h1>Expense Tracker</h1>

      <ExpenseForm />

      <ExpenseList />

      <TotalExpense />
    </>
  );
}

export default ExpenseTracker;