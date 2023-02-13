import { motion } from "framer-motion";
import { useState } from "preact/hooks";
import Input from "../components/Input.tsx";

const MotionTest = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div class="flex items-center">
      <div>
        <motion.div
          className="w-[200px] h-[200px] rounded-2xl border-4 border-red-500 border-solid pointer-events-none"
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div class="flex flex-col pl-1.5">
        <Input value={x} set={setX}>
          X
        </Input>
        <Input value={y} set={setY}>
          Y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          Rotate
        </Input>
      </div>
    </div>
  );
};

export default MotionTest;
