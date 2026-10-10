import type { Expense } from "../types/Expense";
import "./MonthlyAnalysis.css";

type MonthlyAnalysisProps = {
  expenses: Expense[];
};

function MonthlyAnalysis({ expenses }: MonthlyAnalysisProps) {
  const monthlyTotals: { [key: string]: number } = {};

  expenses.forEach((expense) => {
    const date = new Date(expense.date);

    const month = date.toLocaleString("en-IN", {
      month: "long",
      year: "numeric",
    });

    monthlyTotals[month] =
      (monthlyTotals[month] || 0) + expense.amount;
  });

  const months = Object.entries(monthlyTotals).sort((a, b) => {
    const dateA = new Date(a[0]);
    const dateB = new Date(b[0]);

    return dateB.getTime() - dateA.getTime();
  });

  const highestMonthlyExpense =
    months.length > 0
      ? Math.max(...months.map(([, total]) => total))
      : 0;

const highestSpendingMonth =
  months.length > 0
    ? months.find(([, total]) => total === highestMonthlyExpense)?.[0]
    : "";

  return (
    <div className="monthly-analysis">
      <h2>📅 Monthly Expense Analysis</h2>

      {months.length === 0 ? (
        <p>No monthly expense data available.</p>
      ) : (
        <>
          <div className="monthly-chart">
            <div className="monthly-highlight">
  🏆 Highest spending month:{" "}
  <strong>{highestSpendingMonth}</strong>
  {" "}— ₹{highestMonthlyExpense.toFixed(2)}
</div>

            {months.map(([month, total]) => {
              const width =
                highestMonthlyExpense > 0
                  ? (total / highestMonthlyExpense) * 100
                  : 0;

              return (
                <div className="chart-row" key={month}>
                  <div className="chart-label">
                    <span>{month}</span>
                    <strong>₹{total.toFixed(2)}</strong>
                  </div>

                  <div className="chart-bar-container">
                    <div
                      className="chart-bar"
                      style={{ width: `${width}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="monthly-list">
            {months.map(([month, total]) => (
              <div className="monthly-card" key={month}>
                <div>
                  <h3>{month}</h3>
                  <p>Total spending</p>
                </div>

                <strong>₹{total.toFixed(2)}</strong>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MonthlyAnalysis;