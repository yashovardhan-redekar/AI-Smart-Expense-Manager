import Welcome from "./components/welcome";
import Greeting from "./components/Greeting";
import Footer from "./components/Footer";
import Student from "./components/Student";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

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
    </>
  );
}

export default App;