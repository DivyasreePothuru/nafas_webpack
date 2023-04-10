import React from "react";

import "./Main.css";
import Button from "./Button";
import Slider from "./Slider";

// import images for background images
import picture1 from "../images/picture1.png";
import picture2 from "../images/picture2.png";
import picture3 from "../images/picture3.png";

export default function Main() {
  const playMovie = (e) => {
    e.target.play();
  };
  const stopMovie = (e) => {
    e.target.pause();
  };

  return (
    <main>
      <section>
        {/* https://upmostly.com/tutorials/react-background-image */}
        <div
          className="main_image"
          style={{ backgroundImage: `url(${picture1})` }}
        ></div>
        <div className="main overlay">Bild 1</div>

        <p>
          <span>Platzhalter-Home 1</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          eum tenetur architecto odit possimus explicabo ea? Deleniti tempora
          impedit modi autem error corrupti ut eveniet inventore possimus nulla
          dicta architecto fuga pariatur obcaecati, iste doloremque totam
          laudantium beatae consequatur magnam! Beatae dolorum non facilis sequi
          numquam id architecto hic.
        </p>
        <Button />
      </section>

      <hr />
      
      <section>
        <div
          className="main_image"
          style={{ backgroundImage: `url(${picture2})` }}
        ></div>
        <div className="main overlay">Bild 2</div>
        <h1>Anlässe</h1>
        <p>
          <span>Platzhalter-Home 2</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          eum tenetur architecto odit possimus explicabo ea? Deleniti tempora
          impedit modi autem error corrupti ut eveniet inventore possimus nulla
          dicta architecto fuga pariatur obcaecati, iste doloremque totam
          laudantium beatae consequatur magnam! Beatae dolorum non facilis sequi
          numquam id architecto hic.
        </p>
        <div
          className="main_image"
          style={{ backgroundImage: `url(${picture3})` }}
        ></div>
        <div className="main overlay">Bild 3</div>

        <Button />

        <div className="main_video">
          <video
            controls
            muted="true"
            // mobile version
            // onClick={playMovie}
            // PC version
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
          >
            <source src= "images/video_nafas.mp4" type="video/mp4"/>
          </video>
          <div className="main overlay">Video 1</div>
        </div>
      </section>

      <hr />

      <section>
        <h1>Statistik (Platzhalter Home 3)</h1>
      </section>

      <hr />

      <section>      
        <Slider/>
        <div className="main overlay">Bild(er) 4</div>
      </section>
    </main>
  );
}
