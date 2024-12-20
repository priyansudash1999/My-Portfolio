import { Html, useProgress } from "@react-three/drei"

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A loader component to be used while the 3D scene is loading.
 * @returns {ReactElement} The component.
 */
/******  a58d584d-c6e3-4a8a-877f-8c6c81b2fd38  *******/
const Loader = () => {

  const {progress} = useProgress();
  
  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={{ fontSize: 14, color: "#f1f1f1", fontWeight: 800, marginTop: 40 }}></p>
    </Html>
  )
}

export default Loader