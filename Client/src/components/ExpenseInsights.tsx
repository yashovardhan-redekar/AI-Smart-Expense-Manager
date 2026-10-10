import type { Expense } from "../types/Expense";
import "./ExpenseInsights.css";

type ExpenseInsightsProps = {
  expenses: Expense[];
  budget: number;
};

function ExpenseInsights({
  expenses,
  budget,
}: ExpenseInsightsProps) {
  // Calculate total spending for each category
  const categoryTotals: { [key: string]: number } = {};

  expenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      expense.amount;
  });

  // Convert category object into array
  const categories = Object.entries(categoryTotals);

  // Calculate total expenses
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  // Find highest spending category
  const highestCategory =
    categories.length > 0
      ? categories.reduce((highest, current) =>
          current[1] > highest[1] ? current : highest
        )
      : null;

  // Calculate highest category percentage
  const highestCategoryPercentage =
    highestCategory && totalExpense > 0
      ? (highestCategory[1] / totalExpense) * 100
      : 0;

  // Calculate average expense
  const averageExpense =
    expenses.length > 0
      ? totalExpense / expenses.length
      : 0;

  // Find highest individual expense
  const highestExpense =
    expenses.length > 0
      ? expenses.reduce((highest, current) =>
          current.amount > highest.amount
            ? current
            : highest
        )
      : null;

  // Budget insight
  let budgetInsight = "";

  if (budget > 0) {
    if (totalExpense > budget) {
      budgetInsight = `🚨 You have exceeded your budget by ₹${(
        totalExpense - budget
      ).toFixed(2)}.`;
    } else {
      const budgetUsed = (totalExpense / budget) * 100;

      budgetInsight = `💰 You have used ${budgetUsed.toFixed(
        1
      )}% of your monthly budget.`;
    }
  }

  // Spending insight
  let spendingInsight = "";

  if (expenses.length > 0) {
    if (averageExpense > 2000) {
      spendingInsight =
        "💡 Your average expense is relatively high. Consider reviewing your larger expenses.";
    } else if (averageExpense > 1000) {
      spendingInsight =
        "💡 Your spending is moderate. Keep monitoring your larger transactions.";
    } else {
      spendingInsight =
        "✅ Your average expense is currently under control.";
    }
  }

  return (
    <div className="insights-container">
      <h2>💡 Smart Expense Insights</h2>

      {expenses.length === 0 ? (
        <p>
          No expenses available to generate insights.
        </p>
      ) : (
        <>
          {/* Highest Spending Category */}
          {highestCategory && (
            <p>
              🏆 Your highest spending category is{" "}
              <strong>{highestCategory[0]}</strong> with ₹
              {highestCategory[1].toFixed(2)} spent.
              That is{" "}
              {highestCategoryPercentage.toFixed(1)}%
              of your total spending.
            </p>
          )}

          {/* Highest Individual Expense */}
          {highestExpense && (
            <p>
              💸 Your highest individual expense is{" "}
              <strong>{highestExpense.title}</strong> costing ₹
              {highestExpense.amount.toFixed(2)}.
            </p>
          )}

          {/* Average Expense */}
          <p>
            🎯 Your average expense is ₹
            {averageExpense.toFixed(2)}.
          </p>

          {/* Budget Insight */}
          {budgetInsight && <p>{budgetInsight}</p>}

          {/* Spending Insight */}
          {spendingInsight && <p>{spendingInsight}</p>}
        </>
      )}
    </div>
  );
}

export default ExpenseInsights;