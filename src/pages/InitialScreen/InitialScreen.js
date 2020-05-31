import React from "react";
import Typical from "react-typical";
import { StyledHeader, StyledImage, StyledImageWrapper } from "./styles";
import { Link, useLocation } from "react-router-dom";

//Images import
import personalImage1x from "../../img/jpg/personalPicture@1x.jpg";
import personalImage2x from "../../img/jpg/personalPicture@2x.jpg";
import personalImage3x from "../../img/jpg/personalPicture@3x.jpg";
import personalImage4x from "../../img/jpg/personalPicture@4x.jpg";
import personalImage5x from "../../img/jpg/personalPicture@5x.jpg";

import personalImage1xwebp from "../../img/webp/personalPicture@1x.webp";
import personalImage2xwebp from "../../img/webp/personalPicture@2x.webp";
import personalImage3xwebp from "../../img/webp/personalPicture@3x.webp";
import personalImage4xwebp from "../../img/webp/personalPicture@4x.webp";
import personalImage5xwebp from "../../img/webp/personalPicture@5x.webp";

function InitialScreen() {
  const location = useLocation();

  return (
    <div>
        <StyledHeader>
        <StyledImageWrapper>
          <picture>
            <source
              srcset={`${personalImage1xwebp} 429w, ${personalImage2xwebp} 857w, ${personalImage3xwebp} 1286w, ${personalImage4xwebp} 1714w, ${personalImage5xwebp} 2143w`}
              type="image/webp"
            />
            <StyledImage
              srcset={`${personalImage1x} 429w, ${personalImage2x} 857w, ${personalImage3x} 1286w, ${personalImage4x} 1714w, ${personalImage5x} 2143w`}
              alt=""
            />
          </picture>
        </StyledImageWrapper>
        <h1>
          <code>Hi, I'm Vicente Quesada Camón</code>
        </h1>
        <p style={{ marginTop: 30 }}>
          I'm a
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " developer 💻",
              1000,
              " student 👨🏼‍🎓",
              1000,
              " curious person 😯",
              1000,
              "n outgoing person 👍🏻",
              1000,
              " wannabe musician 🎵",
              1000,
              " singer 🎤",
              1000,
              " piano player 🎹",
              1000,
              " guitar player 🎸",
              1000,
              " languages lover 🌏",
              1000,
              " roller skater 👨🏼‍🦽",
              1000,
            ]}
          />
        </p>
        <div style={{ marginTop: 30 }}>
          <Link
            inline={false}
            isActive={location.pathname === "/"}
            element={Link}
            to={"/me"}
            // key={"Discover"}
          >
            {"See more"}
          </Link>
        </div>
      </StyledHeader>
    </div>
  );
}

export default InitialScreen;
