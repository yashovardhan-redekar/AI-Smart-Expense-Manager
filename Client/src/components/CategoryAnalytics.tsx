import type { Expense } from "../types/Expense";
import { getCategoryTotals } from "../utils/expenseUtils";
import "./CategoryAnalytics.css";

type CategoryAnalyticsProps = {
  expenses: Expense[];
};

function CategoryAnalytics({
  expenses,
}: CategoryAnalyticsProps) {
  const categoryTotals = getCategoryTotals(expenses);

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const sortedCategories = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1]
  );
  const topCategory = sortedCategories[0];

  return (
    <div className="category-analytics">
      <h2>📊 Spending by Category</h2>
      {topCategory && totalExpense > 0 && (
  <div className="top-category">
    <p>🏆 Top Spending Category</p>

    <h3>{topCategory[0]}</h3>

    <strong>
      ₹{topCategory[1].toFixed(2)}
    </strong>

    <span>
      {((topCategory[1] / totalExpense) * 100).toFixed(1)}%
      of total spending
    </span>
  </div>
)}

<div className="category-stats">
  <div className="category-stat-card">
    <span>💰 Total Spending</span>
    <strong>₹{totalExpense.toFixed(2)}</strong>
  </div>

  <div className="category-stat-card">
    <span>🗂️ Categories</span>
    <strong>{sortedCategories.length}</strong>
  </div>
</div>
      {sortedCategories.length === 0 ? (
        <p className="no-category-data">
          No expenses available.
        </p>
      ) : (
        <div className="category-analytics-list">
          {sortedCategories.map(([category, total]) => {
            const percentage =
              totalExpense > 0
                ? (total / totalExpense) * 100
                : 0;

            return (
              <div
                className="category-analytics-item"
                key={category}
              >
                <div className="category-analytics-header">
                  <span>{category}</span>

                  <strong>
                    ₹{total.toFixed(2)} (
                    {percentage.toFixed(1)}%)
                  </strong>
                </div>

                <div className="category-analytics-bar-container">
                  <div
                    className="category-analytics-bar"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CategoryAnalytics;