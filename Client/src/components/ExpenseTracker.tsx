import { useEffect, useState } from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalExpense from "./TotalExpense";

import type { Expense } from "../types/Expense";

function ExpenseTracker() {

  // Load expenses directly when state is created
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");

    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  });


  const [searchText, setSearchText] = useState("");


  // Editing states
  const [editingIndex, setEditingIndex] =
    useState<number | null>(null);

  const [editingExpense, setEditingExpense] =
    useState<Expense | null>(null);


  // Save expenses whenever expenses change
  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);


  // Delete expense
  const deleteExpense = (indexToDelete: number) => {

    setExpenses(
      expenses.filter(
        (_, index) => index !== indexToDelete
      )
    );

  };


  // Start editing an expense
  const editExpense = (index: number) => {

    setEditingIndex(index);

    setEditingExpense(expenses[index]);

  };


  return (
    <>
      <h1>Expense Tracker</h1>


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


      <TotalExpense
        expenses={expenses}
      />

    </>
  );
}

export default ExpenseTracker;