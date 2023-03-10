import "./App.css";
import data from "./data";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const cards = data.map((item) => {
    return (
      <>
        <Card key={item.id} {...item} />
        <hr />
      </>
    );
  });
  return (
    <div className="App">
      <Header />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
