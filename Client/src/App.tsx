// import ProfileCard from "./components/ProfileCard";

// function App() {
//   return (
//     <>
//       <ProfileCard
//         name="Yashovardhan Redekar"
//         branch="Computer Engineering"
//         year="Final Year"
//         cgpa={7.91}
//         skills="React, TypeScript, Java"
//       />

//       <ProfileCard
//         name="Rahul Sharma"
//         branch="Information Technology"
//         year="Third Year"
//         cgpa={8.45}
//         skills="Python, Django"
//       />

//       <ProfileCard
//         name="Priya Patil"
//         branch="Computer Engineering"
//         year="Second Year"
//         cgpa={9.12}
//         skills="C++, React"
//       />
//     </>
//   );
// }

// export default App;


import { useContext } from "react";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeContext from "./context/ThemeContext";
import UserList from "./components/UserList";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <ThemeButton />
      <ExpenseTracker />
      <UserList />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;