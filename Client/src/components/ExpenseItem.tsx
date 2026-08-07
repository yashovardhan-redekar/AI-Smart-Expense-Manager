import type { Expense } from "../types/Expense";
import "./ExpenseItem.css";

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
    <div className="expense-card">

      <div className="expense-details">
        <h3>{expense.title}</h3>

        <p><strong>💰 Amount:</strong> ₹{expense.amount}</p>

        <p><strong>📂 Category:</strong> {expense.category}</p>

        <p><strong>📅 Date:</strong> {expense.date}</p>
      </div>

      <div className="button-group">
        <button
          className="edit-btn"
          onClick={() => editExpense(index)}
        >
          ✏ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteExpense(index)}
        >
          🗑 Delete
        </button>
      </div>

    </div>
  );
}

export default ExpenseItem;