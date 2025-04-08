import { useThree } from "@react-three/fiber";
import usePlayerAnimation from "../hooks/usePlayerAnimation";
import { useRef, useEffect } from "react";
import { setRef } from "../stores/player";



export function Player() {
    const player = useRef(null);
    const camera = useThree((state) => state.camera);
    usePlayerAnimation(player);
    useEffect(() => {
      if (!player.current) return;
  
      // Attach the camera to the player
      player.current.add(camera);
      setRef(player.current);
    });
    return (
      <group ref={player}>
        <mesh position={[0, 0, 10]}>
          <boxGeometry args={[15, 15, 20]} />
          <meshLambertMaterial color={0xffffff} />
        </mesh>
      </group>
    );
  }