import type { Expense } from "../types/Expense";
import { getCategoryTotals } from "../utils/expenseUtils";

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

  return (
    <div>
      <h2>📊 Spending by Category</h2>

      {Object.keys(categoryTotals).length === 0 ? (
        <p>No expenses available.</p>
      ) : (
        Object.entries(categoryTotals).map(
          ([category, total]) => {
            const percentage =
              totalExpense > 0
                ? (total / totalExpense) * 100
                : 0;

            return (
              <div key={category}>
                <p>
                  <strong>{category}</strong> : ₹{total} (
                  {percentage.toFixed(1)}%)
                </p>

                <div
                  style={{
                    width: "100%",
                    background: "#ddd",
                    height: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      width: `${percentage}%`,
                      background: "#007bff",
                      height: "10px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            );
          }
        )
      )}
    </div>
  );
}

export default CategoryAnalytics;