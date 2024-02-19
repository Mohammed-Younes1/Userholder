import React, { useState } from "react";
import Comment from "./Comment";
import "../../src/App.css";

function Cards({ body, name, companyName, comments, postId }) {
  const [isClicked, setIsClicked] = useState(false);

  const clickCommentsButton = () => {
    setIsClicked(!isClicked);
  };

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
        {/* className="truncate" */}
        <div className="flex text-left px-10 py-[10px]">
          <p className="overflow-hidden text-sm max-h-[120px] w-[250px] truncate-3-lines">
            {body}
          </p>
        </div>
        <div className="flex ">
          <button onClick={clickCommentsButton}>Comments</button>
          {isClicked && <Comment comments={comments} postId={postId}  name={name}/>}
        </div>
      </div>
    </div>
  );
}

export default Cards;


 {/* {isClicked && (
          <div>
            {comments.map((comment) => {
              if (postId === comment.postId) {
                return <h3 className="ml-[-40px]"key={comment.id}>{comment.body}</h3>;
              } else {
                return null;
              }
            })}
          </div>
        )} */}