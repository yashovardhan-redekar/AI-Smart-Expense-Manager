import type { Expense } from "../types/Expense";
import "./TotalExpense.css";

type TotalExpenseProps = {
  expenses: Expense[];
};

function TotalExpense({
  expenses,
}: TotalExpenseProps) {

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="total-expense">

      <h2>
        💰 Total Expense: ₹{total}
      </h2>

      <h3>
        📄 Number of Expenses: {expenses.length}
      </h3>

    </div>
  );
}

export default TotalExpense;