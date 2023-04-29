import ListItem from "./components/ListItem";

const App = () => {
  return (
    <div className="App" style={{ padding: "3rem" }}>
      <div className="container" style={{ width: "10rem" }}>
        <ListItem name="Test" />
      </div>
    </div>
  );
};

export default App;
