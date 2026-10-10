import type { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

type ExpenseListProps = {
  expenses: Expense[];
  searchText: string;
  selectedCategory: string;
  deleteExpense: (index: number) => void;
  editExpense: (index: number) => void;
};

function ExpenseList({
  expenses,
  searchText,
  selectedCategory,
  deleteExpense,
  editExpense,
}: ExpenseListProps) {

  // ==============================
  // Filter Expenses
  // ==============================

  const filteredExpenses = expenses.filter((expense) => {

    // Search filter
    const matchesSearch =
      expense.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

    // Category filter
    const categoryFilter =
      selectedCategory.trim().toLowerCase();

    const matchesCategory =
      categoryFilter === "" ||
      categoryFilter === "all" ||
      categoryFilter === "all categories" ||
      expense.category.toLowerCase() === categoryFilter;

    return matchesSearch && matchesCategory;
  });


  // ==============================
  // Display
  // ==============================

  return (
    <div className="list-container">

      <h2>📋 Expense List</h2>

      {filteredExpenses.length === 0 ? (

        <p>No expenses found.</p>

      ) : (

        filteredExpenses.map((expense) => {

          // Find the original index
          // so Edit/Delete work correctly
          const originalIndex =
            expenses.indexOf(expense);

          return (
            <ExpenseItem
              key={originalIndex}
              expense={expense}
              index={originalIndex}
              deleteExpense={deleteExpense}
              editExpense={editExpense}
            />
          );
        })

      )}

    </div>
  );
}

export default ExpenseList;