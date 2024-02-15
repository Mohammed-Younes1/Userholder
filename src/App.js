import NavBar from "./components/NavBar";
import PostsList from "./components/data/PostsList";
import Backdrop from "./components/Backdrop";
import { useState } from "react";
import { Routes } from "react-router-dom";

function App() {
  const [modalIsOpen, SetModalIsOpen] = useState(true);

  function closeModalHandler() {
    SetModalIsOpen(false);
  }

  return (
    // <Routes>
      <div className="App">
        <NavBar />

        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        <PostsList />
      </div>
    // </Routes>
  );
}

export default App;
