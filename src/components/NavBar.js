import UserholderSVG from "./SVG/UserholderSVG";


function NavBar() {

  function SignInHandler(){
    console.log('Sign in')
  }
  function SignUpHandler(){
    console.log('Sign UP')
  }
    return (
      <div className="flex justify-between bg-indigo-200 ">
        <div className="ml-20">
            <UserholderSVG height={75} width={75}/>
        </div>
        <div className="flex py-4 align-middle px-8">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-2" onClick={SignInHandler}>Sign in</button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-2" onClick={SignUpHandler}>Sign up</button>
        </div>
      </div>
    )
  }
  
  export default NavBar;
  