import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/footer/Footer";
import Color from "./Components/colorchange/Color";

function App() {
  return (
    <>
      <ToDoList />
      <Footer />
      <Color />
    </>
  );
}

export default App;
