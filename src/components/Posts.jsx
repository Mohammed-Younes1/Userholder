
import React, { useEffect } from "react";
import Comment from "./Comment";


function Posts({ comments, Idpost, name, isLoading,setIsLoading }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); 
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <div className="z-[60] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center inset-0">
        <div className="w-[100%] bg-white shadow-md rounded-lg px-6 py-10">
          {isLoading ? (
            <div className="">Loading . . .</div>
          ) : (
            <Comment comments={comments} Idpost={Idpost} name={name} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
