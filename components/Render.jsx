import {
  Backdrop,
  Environment,
  Float,
  Ring,
  // RoundedBox,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Robot } from "./Robot";
import baffle from "baffle";
import { useEffect } from "react";
import Link from "next/link";

const Render = () => {
  useEffect(() => {
    const target = baffle(".title");
    target.set({
      characters: "░P░h░a░n░t░o░m░",
      speed: 100,
    });
    target.start();
    target.reveal(1000, 1000);
  });

  return (
    <>
      {/* BG Color */}
      <color attach="background" args={["#333333"]} />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />

      <ScrollControls pages={6} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

        {/* Items outside scroll remain fixed */}

        <Robot scale={0.8} />
        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5} // Stretches the floor segment, 0.25 by default
          segments={100} // Mesh-resolution, 20 by default
          scale={[50, 30, 10]}
          position={[4, -10, 0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Ring
            scale={3.5}
            position-z={-2.5}
            position-y={-1}
            args={[0, 0.95, 60]}
            receiveShadow
          >
            <meshStandardMaterial color="#2a3a3f" />
          </Ring>
        </Float>

        <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>

        <Scroll html className="w-full relative">
          {/* DOM contents in here will scroll along */}
          <div className="w-screen h-screen relative">
            <h1 className="title text-[#cdcbca] absolute mx-auto top-[60vh] left-[50%] text-7xl sm:text-[8rem] md:text-[10rem] lg:text-[13rem] -translate-x-[50%] -translate-y-[50%]">
              PHANTOM
            </h1>
          </div>

          <div className="row absolute top-[175vh] left-0 sm:left-4 md:left-[5%] lg:left-[10%] xl:left-[15%] text-justify">
            <h2 className="max-w-sm md:max-w-md">Be a Man of the Future.</h2>
            <p className="max-w-sm md:max-w-md lg:max-w-lg">
              Featuring a sleek, metallic design inspired by advanced
              technology, this aftershave bottle is as stylish as it is
              functional. But it's not just a pretty face - inside, you'll find
              a nourishing and protective aftershave formula that will leave
              your skin feeling refreshed and hydrated.
            </p>
            <Link href="https://www.pacorabanne.com/">
              <button>Read more</button>
            </Link>
          </div>

          <div className="row absolute top-[300vh] right-0 sm:right-2 md:right-[3%] lg:right-[7%] xl:right-[12%] text-justify flex justify-end ">
            <div className="col sm:absolute sm:right-[40px] w-fit">
              <h2 className="max-w-sm md:max-w-md">Tech-Savvy Side</h2>
              <p className="max-w-sm md:max-w-md lg:max-w-lg">
                Featuring a sleek, metallic design inspired by advanced
                technology, this aftershave bottle is as stylish as it is
                functional. But it's not just a pretty face - inside, you'll
                find a nourishing and protective aftershave formula that will
                leave your skin feeling refreshed and hydrated.
              </p>
              <Link href="https://www.pacorabanne.com/">
                <button>Read more</button>
              </Link>
            </div>
          </div>

          <h2 className="absolute top-[450vh] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full text-center max-w-sm sm:max-w-xl xl:max-w-7xl ">
            Cutting-Edge of Grooming
          </h2>

          <Link href="https://www.pacorabanne.com/">
            <button className="absolute top-[585vh] sm:top-[590vh] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              Buy now
            </button>
          </Link>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Render;
