import NavBar from "./components/NavBar";
import PostsList from "./components/data/PostsList";
import { Routes } from "react-router-dom";

function App() {
  return (
    // <Routes>
    <div className="App">
      <NavBar />

      <PostsList />
    </div>
    // </Routes>
  );
}

export default App;
