import Cards from "../Cards";

function PostsList({ postsL,loadedUsers }) {
  if (!postsL || !loadedUsers) {
    console.log(`${postsL} postsL ${loadedUsers} LoadedUsers`)
    return <p>No data available</p>;
  }


  return (
    <ul className="grid grid-cols-1 md:grid-cols-3">
      {postsL.map((posts,index) => {
        return (
            <Cards
              key={posts.id}
              id={posts.id}
              name={posts.title}
              company={loadedUsers[1]}
            // company={(loadedUsers[index] && loadedUsers[index].company.name) || ''}
              body={posts.body}
            />
          )
      })}
    </ul>
  );
}
export default PostsList;
