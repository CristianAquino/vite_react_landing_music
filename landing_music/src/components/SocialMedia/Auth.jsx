import { FaTwitter } from "react-icons/fa";

const infoInputSty =
  "border-none outline-none bg-inputColor rounded-[8px] py-[4px] px-[8px] flex-1";

const infoInputDivSty =
  "flex gap-[1rem] h-[2rem] w-[100%] items-center justify-center";

const Auth = () => {
  return (
    //   auth
    <div className="flex items-center justify-center h-[100vh] gap-[4rem] relative">
      {/* a left */}
      <div className="flex items-center justify-center gap-[2rem]">
        <FaTwitter className="text-orange text-[4rem]" />
        {/* webname */}
        <div>
          <h1 className="text-[3rem] bg-red-500 bg-buttonBg bg-100% bg-repeat bg-auth">
            ZKC Media
          </h1>
          <h6 className="text-[0.85rem] font-bold">
            Explore the ideas throughout the world
          </h6>
        </div>
      </div>
      <LogIn />
    </div>
  );
};

function LogIn() {
  return (
    // a-right
    <div>
      {/* infoForm authform */}
      <form className="flex flex-col justify-center items-center gap-[2rem] bg-cardColor rounded-[1rem] p-[1rem]">
        <h3 className="font-bold">Log In</h3>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            placeholder="Username"
            className={infoInputSty}
            name="username"
          />
        </div>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="password"
            className={infoInputSty}
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="flex items-center gap-[2rem]">
          <span className="text-[12px]">Don't have an account Sign up</span>
          <button className="flex items-center justify-center self-end text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] w-[6rem]hover:cursor-pointer ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    // a right
    <div>
      {/* infoForm authform */}
      <form className="flex flex-col justify-center items-center gap-[2rem] bg-cardColor rounded-[1rem] p-[1rem]">
        <h3 className="font-bold">Sign Up</h3>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            className={infoInputSty}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            className={infoInputSty}
          />
        </div>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            placeholder="Userames"
            name="username"
            className={infoInputSty}
          />
        </div>
        <div className={infoInputDivSty}>
          {/* infoInput */}
          <input
            type="text"
            placeholder="Password"
            name="password"
            className={infoInputSty}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirmpassword"
            className={infoInputSty}
          />
        </div>
        <div>
          <span className="text-[12px]">Already have an account. Login!</span>
        </div>
        <button className="flex items-center justify-center self-end text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] w-[6rem]hover:cursor-pointer ">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
