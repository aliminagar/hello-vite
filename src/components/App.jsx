// App.jsx
import "../components/App.css"; // import "./App.css"; // we'll talk about CSS soon
import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Animal selectedAnimal="chris" />
    </div>
  );
}

export default App;
