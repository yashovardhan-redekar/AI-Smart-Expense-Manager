import type { Expense } from "../types/Expense";
import "./CategorySummary.css";

type CategorySummaryProps = {
  expenses: Expense[];
};

function CategorySummary({
  expenses,
}: CategorySummaryProps) {
  const categoryTotals: { [key: string]: number } = {};

  expenses.forEach((expense) => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += expense.amount;
    } else {
      categoryTotals[expense.category] = expense.amount;
    }
  });

  return (
    <div className="category-summary">
      <h2>📊 Category Summary</h2>

      {Object.keys(categoryTotals).length === 0 ? (
        <p>No expenses available.</p>
      ) : (
        Object.entries(categoryTotals).map(
          ([category, total]) => (
            <div
              key={category}
              className="category-item"
            >
              <span className="category-name">
                {category}
              </span>

              <span className="category-amount">
                ₹{total}
              </span>
            </div>
          )
        )
      )}
    </div>
  );
}

export default CategorySummary;