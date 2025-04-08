import { tilesPerRow, tileSize } from "../constants";

export function Road({ rowIndex, children }) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh>
        <planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
        <meshLambertMaterial color={0x454a59} />
      </mesh>
      {children}
    </group>
  );
}