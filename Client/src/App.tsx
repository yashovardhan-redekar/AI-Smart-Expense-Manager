import Welcome from "./components/welcome";
import Greeting from "./components/Greeting";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Welcome />
      <Greeting name="Yash" />
      <Greeting name="Rahul" />
      <Greeting name="Priya" />
      <Footer />
    </>
  );
}

export default App;