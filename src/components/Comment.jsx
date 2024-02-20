import React from 'react';

function Comment({ comments, Idpost, name }) {
  
  return (
    <div>
      {comments.map((comment) => {
      
        if (Idpost === comment.postId) {
          return <h3 className="text-start text-md py-2" key={comment.id}><span className='font-bold'>{name}:</span> {comment.body}</h3>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Comment;
