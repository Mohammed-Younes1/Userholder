function Cards(props) {
  

  return (
    <div className="p-6">
      <div className="bg-gray-100 max-w-lg shadow-md rounded-md p-6 ml-2 mr-2  ">
        <div className="flex">
          <img
            src="profile.jpg"
            alt="Profile-Picture"
            className="w-16 h-16 rounded-full"
          />
          <div className="px-2">
            <h2 className="text-lg font-semibold">{props.name}</h2>
            <p className="text-gray-500">{props.company}</p>
          </div>
        </div>
        <div className="flex text-left ">
         {props.body}
        </div>
      </div>
    </div>
  );
}

export default Cards;
