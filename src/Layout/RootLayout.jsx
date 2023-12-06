import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <div>
          <p className=" text-center p-2 bg-orange-500">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
        </div>
        <div className=" px-[132px] py-[24px] flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                className=" bg-orange-500 mr-[50px]"
              >
                <path
                  d="M4.16797 37.1667L15.0013 26.3333H25.8346V15.5L36.668 26.3333L25.8346 37.1667H4.16797Z"
                  fill="white"
                />
                <path
                  d="M4.16797 15.5L15.0013 26.3333V15.5H25.8346L36.668 4.66667H15.0013L4.16797 15.5Z"
                  fill="white"
                />
              </svg>
            </div>

            <nav>
              <ul className=" container mx-auto flex items-center justify-center gap-[26px]">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button>Sign Up</button>
            <button className=" bg-orange-500  rounded-lg w-[80px] h-[40px]">
              Login
            </button>
          </div>
        </div>
      </header>
      <footer>
        <Outlet />
        <div className=" container mx-auto flex items-center justify-between">
          <div className="container mx-auto">
            <div>
              <svg
                className=" bg-orange-500 w-[40px] h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M4.16797 36.6667L15.0013 25.8334H25.8346V15.0001L36.668 25.8334L25.8346 36.6667H4.16797Z"
                  fill="white"
                />
                <path
                  d="M4.16797 15.0001L15.0013 25.8334V15.0001H25.8346L36.668 4.16675H15.0013L4.16797 15.0001Z"
                  fill="white"
                />
              </svg>
            </div>
            <br />
            <div>
              <p>💼hello@skillbridge.com</p>
              <br />
              <p>📞+91 91813 23 2309</p>
              <br />
              <p>💎Somewhere in the World</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            <div>
              <h1 className=" font-medium w-[100px]">Home</h1>
              <p>Benefits</p>
              <p>Our Courses</p>
              <p>Our Testimonials</p>
              <p>Our FAQ</p>
            </div>
            <div className=" mb-[50px]">
              <h1 className=" font-medium w-[100px]">About Us</h1>
              <p>Company</p>
              <p>Achievements</p>
              <p>Our Goals</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default RootLayout;

 