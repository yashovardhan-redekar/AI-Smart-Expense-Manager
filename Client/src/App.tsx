import Welcome from "./components/welcome";
import Greeting from "./components/Greeting";
import Footer from "./components/Footer";
import Student from "./components/Student";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import NameInput from "./components/NameInput";
import UserForm from "./components/UserForm";
import Fruitlist from "./components/Fruitlist";
import Studentlist from "./components/Studentlist"
import Studentmanager from "./components/Studentmanager";
import ExpenseTracker from "./components/ExpenseTracker";
function App() {
  return (
    <>
      <Welcome />
     <Greeting name="Yash" age={21} />
     <Student
        name="Yash"
        branch="Computer Engineering"
        cgpa={9.95}
        />
      <Footer />
      <Counter />
      <LikeButton />
      <NameInput />
      <UserForm />
      <Fruitlist />
      <Studentlist />
      <Studentmanager />
      <ExpenseTracker />
    </>
  );
}

export default App;