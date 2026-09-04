import { useEffect, useState } from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";
import Dashboard from "./Dashboard";
import CategorySummary from "./CategorySummary";
import CategoryAnalytics from "./CategoryAnalytics";
import BudgetTracker from "./BudgetTracker";
import ExpenseInsights from "./ExpenseInsights";
import "./ExpenseTracker.css";


import type { Expense } from "../types/Expense";

function ExpenseTracker() {
  // Load expenses from localStorage
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");

    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  });
  //budget
  const [budget, setBudget] = useState<number>(() => {
  const savedBudget = localStorage.getItem("monthlyBudget");

  if (savedBudget) {
    return Number(savedBudget);
  }

  return 0;
});

useEffect(() => {
  localStorage.setItem("monthlyBudget", String(budget));
}, [budget]);

  // Search
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // Editing states
  const [editingIndex, setEditingIndex] =
    useState<number | null>(null);

  const [editingExpense, setEditingExpense] =
    useState<Expense | null>(null);

  // Save expenses whenever they change
  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  // Delete one expense
  const deleteExpense = (indexToDelete: number) => {
    setExpenses(
      expenses.filter(
        (_, index) => index !== indexToDelete
      )
    );
  };

  // Clear all expenses
  const clearAllExpenses = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all expenses?"
    );

    if (confirmDelete) {
      setExpenses([]);
      localStorage.removeItem("expenses");

      setEditingIndex(null);
      setEditingExpense(null);
    }
  };

  // Edit expense
  const editExpense = (index: number) => {
    setEditingIndex(index);
    setEditingExpense(expenses[index]);
  };

  return (
    
  <div className="expense-container">
     <h1 className="title">
  💰 Expense Tracker
</h1>

      {expenses.length > 0 && (
  <button
    className="clear-btn"
    onClick={clearAllExpenses}
  >
    🗑️ Clear All Expenses
  </button>
)}
      <br />
      <br />

     <Dashboard expenses={expenses} />

<BudgetTracker
  expenses={expenses}
  budget={budget}
  setBudget={setBudget}
/>

<ExpenseInsights
  expenses={expenses}
  budget={0}
/>
      <ExpenseForm
        key={editingIndex ?? "new"}
        expenses={expenses}
        setExpenses={setExpenses}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
        editingExpense={editingExpense}
        setEditingExpense={setEditingExpense}
      />

      <br />

      <input
      className="search-box"
        type="text"
        placeholder="🔍 Search Expense"
        value={searchText}
        onChange={(e) =>
          setSearchText(e.target.value)
        }
      />
      <select
  className="category-filter"
  value={selectedCategory}
  onChange={(e) =>
    setSelectedCategory(e.target.value)
  }
>
  <option value="">All Categories</option>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
  <option value="Shopping">Shopping</option>
  <option value="Bills">Bills</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Health">Health</option>
  <option value="Education">Education</option>
  <option value="Other">Other</option>
</select>
<button
  className="clear-filter-btn"
  onClick={() => {
    setSearchText("");
    setSelectedCategory("");
  }}
>
  Clear Filters
</button>

      <br />
      <br />

      <ExpenseList
  expenses={expenses}
  searchText={searchText}
  selectedCategory={selectedCategory}
  deleteExpense={deleteExpense}
  editExpense={editExpense}
/>
      <br />

      <CategorySummary expenses={expenses} />

<br />

<CategoryAnalytics expenses={expenses} />

<br />

<TotalExpense expenses={expenses} />
    </div>
  );
}

export default ExpenseTracker;