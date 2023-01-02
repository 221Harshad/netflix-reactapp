import React from "react";

function Page2() {
  return (
    <>
      <section className="part2">
        <div className="img">
          <img src={require("../../css/images/mobile-0819.jpg")} alt="img" />
        </div>

        <div className="card2">
          <div className="img2">
            <img src={require('../../css/images/boxshot.png')} alt="boxshotimage" />
          </div>
          <div className="text1">
            <span style={{ fontweight: 400, color: "white" }}>
              Stranger Things
            </span>
            <br />
            <span style={{ fontweight: 700, color: "#0071eb" }}>
              Downloading...
            </span>
          </div>
          <div className="animation2">
            <img
              src={require('../../css/images/download-icon.gif')}
              alt="gif"
              style={{ width: 110 }}
            />
          </div>
        </div>
        <div className="content">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </section>
    </>
  );
}

export default Page2;
