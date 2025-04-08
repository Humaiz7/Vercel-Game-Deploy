import { tileSize } from "../constants";
import { useRef } from "react";
import useVehicleAnimation from "../hooks/useVehicleAnimation";
import useHitDetection from "../hooks/useHitDetection";

export function Car({
  rowIndex,
  initialTileIndex,
  direction,
  speed,
  color,
}) {

  const car = useRef(null);
  useVehicleAnimation(car, direction, speed);
  useHitDetection(car, rowIndex);
  
  return (

    <group
      ref={car}
      position-x={initialTileIndex * tileSize}
      rotation-z={direction ? 0 : Math.PI}
    >
      <mesh position={[0, 0, 12]}>
        <boxGeometry args={[60, 30, 15]} />
        <meshLambertMaterial color={color} />
      </mesh>
      <mesh position={[-6, 0, 25.5]}>
        <boxGeometry args={[33, 24, 12]} />
        <meshLambertMaterial color={0xffffff} />
      </mesh>
      <mesh position={[-18, 0, 6]}>
        <boxGeometry args={[12, 33, 12]} />
        <meshLambertMaterial color={0x333333} />
      </mesh>
      <mesh position={[18, 0, 6]}>
        <boxGeometry args={[12, 33, 12]} />
        <meshLambertMaterial color={0x333333} />
      </mesh>
    </group>
  );
}