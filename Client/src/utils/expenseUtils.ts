import type { Expense } from "../types/Expense";

export function getCategoryTotals(
  expenses: Expense[]
): { [key: string]: number } {
  const categoryTotals: { [key: string]: number } = {};

  expenses.forEach((expense) => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += expense.amount;
    } else {
      categoryTotals[expense.category] = expense.amount;
    }
  });

  return categoryTotals;
}