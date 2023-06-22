const Login = () => {
  return (
    <div className=" w-screen h-screen grid place-items-center" >
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <p>Good to see you !</p>
          <input type="text" placeholder="Enter your email" className="input input-bordered input-md w-full max-w-xs my-1.5" />
          <input type="password" placeholder="Enter your password" className="input input-bordered input-md w-full max-w-xs my-1.5" />
          <div className="card-actions justify-end">
            <button className="btn">Login</button>
          </div>
            <p>
              Don't have an account ? 
            <a className="link link-hover">Sign in </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
