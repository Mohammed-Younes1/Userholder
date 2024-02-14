import { useEffect, useState } from "react";
import PostsList from "./PostsList";

function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPost] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setLoadedPost(data);
      });
    // .catch((error) => console.error("Error loading posts:", error));
  }, []);
  useEffect(() => {
    setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setLoadedUsers(data);
      });
    // .catch((error) => console.error("Error loading users:", error));
  }, []);

  if (isLoading) {
    <section>
      <p>Loading . . . . . . </p>
    </section>;
  }
  return (
    <div>
      <h1>this is</h1>
      {/* <PostsList postsL={loadedPosts} loadedUsers={loadedUsers.map(({company})=>company.name)}/> */}
      <PostsList postsL={loadedPosts} loadedUsers={loadedUsers} />
    </div>
  );
}
export default Posts;
