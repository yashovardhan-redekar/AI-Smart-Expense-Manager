import type { Expense } from "../types/Expense";

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

  // Calculate percentage of total spending
  const highestCategoryPercentage =
    highestCategory && totalExpense > 0
      ? (highestCategory[1] / totalExpense) * 100
      : 0;

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

  return (
    <div className="insights-container">
      <h2>💡 Expense Insights</h2>

      {/* Highest Spending Category */}
      {highestCategory ? (
        <p>
          Your highest spending category is{" "}
          <strong>{highestCategory[0]}</strong> with ₹
          {highestCategory[1]} spent.{" "}
          That is{" "}
          {highestCategoryPercentage.toFixed(1)}%
          of your total spending.
        </p>
      ) : (
        <p>
          No expenses available to generate insights.
        </p>
      )}

      {/* Budget Insight */}
      {budgetInsight && (
        <p>{budgetInsight}</p>
      )}
    </div>
  );
}

export default ExpenseInsights;