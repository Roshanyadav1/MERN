"use client";
import { registerUser } from "@/services/main";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  userName: string;
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
    const res = await registerUser(data);

    console.log(res);
  };
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="card w-96 bg-neutral text-neutral-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body text-center">
            <h2 className="font-bold text-2xl">Register</h2>
            <p>Hello , nice to meet you</p>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("userName", { required: true })}
              className="input input-bordered input-md w-full max-w-xs my-1.5"
            />
            {errors.userName && (
              <span className="text-red-600 text-start -mt-2">
                Name is required !
              </span>
            )}
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
                Register
              </button>
            </div>
            <p>
              Don't have an account ?
              <Link href="/login" legacyBehavior>
                <a className="link link-hover"> Log in </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
