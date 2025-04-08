import { tilesPerRow, tileSize } from "../constants";

export function Grass({ rowIndex, children }) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
        <meshLambertMaterial color={0xbaf455} />
      </mesh>
      {children}
    </group>
  );
}