import React from 'react';

function Comment({ comments, postId, name }) {
  return (
    <div>
      {comments.map((comment) => {
        if (postId === comment.postId) {
          return <h3 className="ml-[-40px]" key={comment.id}><span className='font-bold'>{name}:</span> {comment.body}</h3>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Comment;
