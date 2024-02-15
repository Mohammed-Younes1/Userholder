import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import Posts from "./Posts";

function PostsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [comments, setComments] = useState([]);

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
      .then(([posts, users,comments]) => {
        console.log(posts);
        console.log(users);
        console.log(comments)
        setIsLoading(false); // Set isLoading to false when both posts and users are loaded
        setLoadedPosts(posts);
        setLoadedUsers(users);
        setComments(comments);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const getUser = (userId) => {
    const user = loadedUsers.find((user) => user.id === userId);
    return user ? user : null;
  }

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
              name={getUser(post.userId).name}
              companyName={getUser(post.userId).company.name}
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
