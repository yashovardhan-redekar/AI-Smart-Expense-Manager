import type { Expense } from "../types/Expense";
import { getCategoryTotals } from "../utils/expenseUtils";
import "./CategorySummary.css";

type CategorySummaryProps = {
  expenses: Expense[];
};

function CategorySummary({
  expenses,
}: CategorySummaryProps) {
  const categoryTotals = getCategoryTotals(expenses);

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