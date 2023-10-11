import { Environment, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { frameMotionConfig } from "../config";
import { useScroll } from "@react-three/drei";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const data = useScroll();
  const { viewport } = useThree();
  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...frameMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...frameMotionConfig,
    });
  }, [menuOpened]);

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);
    curSection = Math.min(curSection, 2);
    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <Sky />
      <Environment preset="sunset" />
      <motion.group
        position={[2.3, 0, 2.22]}
        rotation={[-3.141592653589793, 1.047197551196598, -3.141592653589793]}
        scale={1.2}
        animate={"" + section}
        variants={{
          0: {
            scaleX: 1.2,
            scaleY: 1.2,
            scaleZ: 1.2,
          },
          1: {
            y: -viewport.height + 1.2,
            x: 0,
            z: 7,
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
            rotateY: 3,
          },
          2: {
            x: -4,
            y: -viewport.height * 2 - 1.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
        }}
        transition={{ duration: 0.6 }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.5, 0.5, 0.5]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Office section={section} />
      </motion.group>
      <Projects />
    </>
  );
};
