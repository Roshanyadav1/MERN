import Image from "next/image";
import profilePic from "./profile_pic.png";

const Home = () => {
  return (
    <div className="container h-screen mx-auto px-4 md:flex">
      {/* ------------------------ Profile section--------------------------- */}
      <div className="md:w-3/12 w-full flex">
        <div className="mt-8">
          {/* ----------------Avatar section ------------------------*/}
          <div className="avatar justify-center items-center">
            <div className="rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <Image
                src={profilePic}
                alt="Picture of the author"
                placeholder="blur"
              />
            </div>
          </div>
          {/* ----------------Avatar section end ------------------------*/}

          <div className=" mt-4">
            <h2 className=" text-2xl font-bold">Roshan Yadav</h2>
            <p className=" font-light text-sm">Roshanyadav1</p>
          </div>
          <div className="grid gap-2">
            <p className="leading-10">Front-end developer</p>
            <button className="btn btn-sm btn-wide btn-outline">
              Edit profile
            </button>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              4 followers . 2 following
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              @baelworks innovation
            </p>

            {/* ------------------------ Achivement section--------------------------- */}
            <div className="divider p-0 m-0"></div>
            <p className=" text-lg font-bold">Achivements</p>

            <div className="avatar">
              <div className=" w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src={profilePic}
                  alt="Picture of the author"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex">
              <button className="btn btn-xs btn-outline btn-info">Beta</button>
              <button className="link bg-none text-sky-300 font-semibold ms-1">
                Send feedback
              </button>
            </div>
            {/* ------------------------ Achivement section end --------------------------- */}
            {/* ------------------------ Highlight section--------------------------- */}
            <div className="divider p-0 m-0"></div>
            <p className=" text-lg font-bold">Highlight</p>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <button className="btn btn-xs btn-outline btn-secondary">
                PRO
              </button>
            </div>
            <div className="divider p-0 m-0"></div>
            {/* ------------------------ Highlight section end --------------------------- */}
          </div>
        </div>
      </div>
      {/* ------------------------ Profile section end --------------------------- */}

      {/* ////////////////////////// */}
      {/* ------------------------ Projects section --------------------------- */}
      <div className="md:w-10/12 w-full">
        <div className="container sm:pt-16 md: sm:pl-16 ">
          {/* -------------------- navbar menu -------------------- */}
          <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
            <li className=" bg-slate-400 rounded-lg text-black">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
                Projects
                <span className="badge badge-sm">99+</span>
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Updates
                <span className="badge badge-sm badge-warning">NEW</span>
              </a>
            </li>
            <li>
              <a>
                Stats
                <span className="badge badge-xs badge-info"></span>
              </a>
            </li>
          </ul>
          {/* -------------------- navbar menu end -------------------- */}

          {/* -------------------------------  Adding advertisement herer -------------------- */}
          <div
            className="hero min-h-16 my-3"
            style={{
              backgroundImage: `url(${profilePic})`,
            }}>
            <div className="hero-overlay bg-opacity-60 rounded-md"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there !</h1>
                <p className="mb-5">
                  Welcome to the project management system. Here you can manage
                  your projects and tasks.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          {/* -------------------------------  Adding advertisement end -------------------- */}
          {/* --------------------------------Search component----------------------------------- */}
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-cyan-50 bg-transparent input-md w-full me-2 my-4"
            />
            <button className="btn btn-active btn-primary">Add Project</button>
          </div>

          {/* ----------------------------Card container----------------------- */}
          <div className="card shadow-lg compact side bg-base-100 my-3">
            <div className="card-body">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="card-title">Projects</h2>
                </div>
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------------Card container end----------------------- */}
        </div>
      </div>
      {/* ------------------------ Projects section end --------------------------- */}
    </div>
  );
};

export default Home;
