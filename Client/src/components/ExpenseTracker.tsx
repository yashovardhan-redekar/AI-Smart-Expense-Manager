import { useEffect, useState } from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";
import Dashboard from "./Dashboard";
import CategorySummary from "./CategorySummary";
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

  // Search
  const [searchText, setSearchText] = useState("");

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

      <br />
      <br />

      <ExpenseList
        expenses={expenses}
        searchText={searchText}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />

      <br />

      <CategorySummary expenses={expenses} />

      <br />

      <TotalExpense expenses={expenses} />
    </div>
  );
}

export default ExpenseTracker;