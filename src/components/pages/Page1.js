import React from "react";
// import logo from '../../css/images/tv.png'
function Page1() {
  return (
    <>
      <section className="part1">
        <div className="content">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="animation">
          <video loop="loop" autoplay="autoplay">
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
          <img
            src={require('../../css/images/tv.png')}
            className="logotv"
            alt="logo"
          />
        </div>
      </section>
    </>
  );
}

export default Page1;
