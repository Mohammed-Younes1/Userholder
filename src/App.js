import NavBar from "./components/NavBar";
import "./App.css";
import PostsList from "./components/data/PostsList";
// import CommentsList from "./components/data/CommentsList";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <PostsList/>
      {/* <CommentsList/> */}
     
    </div>
  );
}

export default App;
