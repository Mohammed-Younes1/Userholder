import Userholder from "./SVG/Userholder";


function NavBar() {
    return (
      <div className="flex justify-between bg-indigo-200 ">
        <div className="ml-20">
            <Userholder height={75} width={75}/>
        </div>
        <div className="flex py-4 align-middle px-8">
            <button className="bg-purple-500 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-xl w-24 mr-2">login</button>
            <button className="bg-purple-500 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded-xl w-24">logout</button>
        </div>
      </div>
    )
  }
  
  export default NavBar;
  