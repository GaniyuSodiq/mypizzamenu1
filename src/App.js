import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <header>
        <h1>Fast React Pizza Co.</h1>
      </header>
    </div>
  );
}
function Menu() {
  return <ul></ul>;
}

function Pizza() {
  return;
}

function Footer() {
  return;
}

function Order() {
  return;
}

export default App;
