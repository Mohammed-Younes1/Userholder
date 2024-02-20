import React, { useEffect, useState } from "react";
import "../../src/App.css";
import Posts from "./Posts";
import Backdrop from "./Backdrop";
// comments
function Cards({ body, name, companyName, comments, id, Idpost }) {
  const [isClicked, setIsClicked] = useState(false);
  const [fetchedComments, setFetchedComments] = useState([]);

  useEffect(() => {
    if (!isClicked) {

      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${Idpost}`)
        .then((response) => response.json())
        .then((postIdComments) => {
          setFetchedComments(postIdComments)
        });
    } else {
      console.log("closing");
    }
  }, [isClicked, Idpost]);

  const clickCommentsButton = () => {
    setIsClicked((prev) => !prev);
    // setIsClicked(!isClicked);
  };
  //https://jsonplaceholder.typicode.com/posts?_start=5&_limit=5
  return (
    <div className="p-6">
      <div className="bg-gray-100 max-w-lg max-h-[280px] h-[250px] shadow-md rounded-md p-6 ml-2 mr-2">
        <div className="flex">
          <img
            src="profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div className="px-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-500">{companyName}</p>
          </div>
        </div>
        <div className="flex text-left px-5 py-[10px]">
          <p className="overflow-hidden text-sm max-h-[120px] w-[250px] truncate-3-lines">
            {body}
          </p>
        </div>
        <div className="flex ">
          <button onClick={clickCommentsButton}>Comments</button>
          {isClicked && <Backdrop click={clickCommentsButton} />}
          {isClicked && (
            <Posts comments={fetchedComments} Idpost={Idpost} name={name} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
