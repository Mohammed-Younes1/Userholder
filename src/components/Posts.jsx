import React from "react";
import Comment from "./Comment";

function Posts({ comments, postId, name }) {
  return (
    <div>
      <div className="z-[60] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center inset-0">
        <div className="w-[100%] bg-white shadow-md rounded-lg px-6 py-10">
          <Comment comments={comments} postId={postId} name={name} />
        </div>
      </div>
    </div>
  );
}

export default Posts;
