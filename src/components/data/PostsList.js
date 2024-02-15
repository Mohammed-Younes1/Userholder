import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import Posts from "../Posts";

function PostsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [usersObj, setUsersObj] = useState({}); // Declare usersObj state

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
        response.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
        response.json()
      ),
    ])
      .then(([posts, users, comments]) => {
        setIsLoading(false);

        setLoadedPosts(posts);
        const postObj = Object.fromEntries(
          posts.map((post) => [post.id, post])
        );

        setLoadedUsers(users);
        const usersObj = Object.fromEntries(
          users.map((user) => [user.id, user])
        );
        setUsersObj(usersObj); // Set usersObj state here

        setComments(comments);
        const commentsObj = Object.fromEntries(
          comments.map((comment) => [comment.id, comment])
        );
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const getUser = (userId) => {
    return usersObj[userId] || null;
  };

  // const getUser = (userId) => {
  //   const user = loadedUsers.find((user) => user.id === userId);
  //   console.log(user)
  //   return user ? user : null;
  // }
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3">
          {loadedPosts.map((post) => (
            <Cards
              key={post.id}
              title={post.title}
              body={post.body}
              companyName={getUser(post.userId).company.name}
              name={getUser(post.userId).name}
              comments={comments}
              postId={post.id}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default PostsList;
