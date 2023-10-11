import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { Suspense, useEffect, useState } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { frameMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);
  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...frameMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 45 }}>
          <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={3} damping={0.1}>
            <ScrollManager section={section} onSectionChanged={setSection} />
            <Scroll>
              <Suspense>
                {started && (
                  <Experience
                    section={section}
                    menuOpened={menuOpened}
                    setMenuOpened={setMenuOpened}
                  />
                )}
              </Suspense>
            </Scroll>
            <Scroll html>{started && <Interface />}</Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChanged={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
      <Cursor />
      <Leva hidden />
    </>
  );
}

export default App;
