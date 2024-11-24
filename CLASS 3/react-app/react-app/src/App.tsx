import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Increament from "./Components/Count_btn";
// import Timer from "./Components/timer";
// import Usememo from "./Components/Usememo";
import Useref from "./Components/useref";
import TodoApp from "./Components/todo";

function App() {
  return (
    <>
      <div className="container">
        <div className="body">
          <Header />
          <TodoApp />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
