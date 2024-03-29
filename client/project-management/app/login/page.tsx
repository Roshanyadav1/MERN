"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginUser } from "@/services/main";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    console.log("data is " ,data)
    const res = await loginUser(data);

  };

  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="card w-96 bg-neutral text-neutral-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body text-center">
            <h2 className="font-bold text-2xl">Login</h2>
            <p>Good to see you !</p>
            <input
              type="text"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="input input-bordered input-md w-full max-w-xs my-1.5"
            />
            {errors.email && (
              <span className="text-red-600 text-start -mt-2">
                Email is required !
              </span>
            )}
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="input input-bordered input-md w-full max-w-xs my-1.5"
            />
            {errors.password && (
              <span className=" text-red-600 text-start -mt-2">
                Password is required !
              </span>
            )}
            <div className="card-actions m-auto justify-end">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
            <p>
              Don't have an account ?
              <Link href="/signin" legacyBehavior>
                <a className="link link-hover"> Register </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
