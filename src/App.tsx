import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0,210,238), rgb(0,83,238))",
      "linear-gradient(135deg, rgb(238,0,153), rgb(221,0,238))",
      "linear-gradient(135deg, rgb(0,238,155), rgb(238,178,0))",
    ]
  );
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
