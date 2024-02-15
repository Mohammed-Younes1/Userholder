import { useState } from "react";

function Cards({ body, name, companyName, comments, postId }) {
  const [isClicked, setIsClicked] = useState(false);
  
  const clickCommentsButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="p-6">
      <div className="bg-gray-100 max-w-lg shadow-md rounded-md p-6 ml-2 mr-2">
        <div className="flex">
          <img
            src="profile.jpg"
            alt="Profile-Picture"
            className="w-16 h-16 rounded-full"
          />
          <div className="px-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-500">{companyName}</p>
          </div>
        </div>


        <div className="flex text-left">{body}</div>
        <button onClick={clickCommentsButton}>Comments</button>
        {isClicked && (
          <div>
            {comments.map((comment) => {
              if (postId === comment.postId) {
                return <h1 key={comment.id}>{comment.body}</h1>;
                
              } else {
                return null;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
