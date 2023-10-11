import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

export const AnimationLogo = (props) => {
  const { animationLogo, section } = props;
  const containerRef = useRef();
  let animation = null;

  const handleMouseEnter = () => {
    if (animation) {
      animation.setSpeed(3);
      animation.setDirection(1);
      animation.loop = true;
      animation.play();
    }
  };

  const handleMouseLeave = () => {
    if (animation) {
      animation.setSpeed(3);
      animation.setDirection(-1);
      animation.loop = false;
      animation.play();
    }
  };

  const onClickHandler = () => {
    if (animationLogo && animationLogo?.nm === "LinkedIn") {
      window.open("https://www.linkedin.com/in/alex-borlido-863aa696/");
    }
    if (animationLogo && animationLogo?.nm === "Github") {
      window.open("https://github.com/AlexBorlido83?tab=repositories");
    }
  };

  useEffect(() => {
    if (animationLogo) {
      if (animation) {
        animation.destroy();
      }
      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animationLogo,
      });
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, [animationLogo, section]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClickHandler}
      style={{
        cursor: "pointer", // Change the cursor to "pointer" on hover
        pointerEvents: "auto", // Ensure pointer events are enabled
      }}
    />
  );
};
