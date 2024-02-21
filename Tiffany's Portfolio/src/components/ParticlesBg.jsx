// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// // just a regular bg for now
// function ParticlesBg() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   console.log(container?.rect);
//   console.log(container?.canvas);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         fullScreen: true,
//         background: {
//           image: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default ParticlesBg;
