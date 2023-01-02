import React from 'react'

function Page3() {
  return (
    <>
    <section className="part3">
        
        <div className="content">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="animation" id="animation3">
          <video loop="loop" autoplay="autoplay" className="vid" >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
          <a href="/photos/device-pile-in.png"
            ><img alt='' src={require('../../css/images/device-pile-in.png')} className="logo" id="logo3"
          /></a>
        </div>
        
      </section>
    </>
  )
}

export default Page3
