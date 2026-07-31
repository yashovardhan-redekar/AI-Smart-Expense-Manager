import type { Expense } from "../types/Expense";

type ExpenseItemProps = {
  expense: Expense;
  index: number;
  deleteExpense: (index: number) => void;
  editExpense: (index: number) => void;
};

function ExpenseItem({
  expense,
  index,
  deleteExpense,
  editExpense,
}: ExpenseItemProps) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{expense.title}</h3>

      <p>Amount: ₹{expense.amount}</p>

      <p>Category: {expense.category}</p>

      <p>Date: {expense.date}</p>

      <button onClick={() => editExpense(index)}>
        Edit
      </button>

      <button onClick={() => deleteExpense(index)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;