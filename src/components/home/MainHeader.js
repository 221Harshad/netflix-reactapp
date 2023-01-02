import React from "react";
import { NavLink } from "react-router-dom";
function MainHeader() {
  return (
    <>
      <div className="container-fluid p-0">
        {/* <!--Header-part carrying image--> */}
        <div className="container-fluid top-part p-2" id="bak-image">
          <div className="container-fluid p-0">
            {/* <!--Header part carrying logo and buttons--> */}

            <div className="row">
              <div className="col d-flex justify-content-start">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                  style={{ width: 150 }}
                  alt="netflix-logo"
                />
              </div>
              <div className="col d-flex justify-content-end">
                <div className="dropdown">
                  <div>
                    <div className="select">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <select>
                        <option value="">English</option>
                        <option value="">Hindi</option>
                        <option value="">Malayalam</option>
                      </select>
                    </div>
                    {/* <a className="button" href="/login">Sign In</a>  */}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ height: 35 }}
                >
                  <NavLink to="/signin" style={{ textDecoration: "none" }}>
                    Sign In
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div
            className="container d-flex justify-content-center"
            style={{ width: 816, height: 538, marginTop: 20 }}
          >
            <div
              className="card"
              style={{ backgroundColor: "transparent", width: "auto" }}
            >
              <div className="card-body" id="card-heading">
                <h1 className="card-title">
                  Unlimited movies, TV shows and more.
                </h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3 className="card-text">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className="container btn d-flex">
                  <input
                    type="email"
                    id="email"
                    placeholder=" &nbsp Email address"
                    style={{ width: 500, height: 60 }}
                  />
                  <button>Get Started </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
