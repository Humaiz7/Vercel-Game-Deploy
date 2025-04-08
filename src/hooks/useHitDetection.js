import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { state as player } from "../stores/player";

export default function useHitDetection(vehicle, rowIndex) {
  useFrame(() => {
    if (!vehicle.current) return;
    if (!player.ref) return;

    if (
      rowIndex === player.currentRow ||
      rowIndex === player.currentRow + 1 ||
      rowIndex === player.currentRow - 1
    ) {
      const vehicleBoundingBox = new THREE.Box3();
      vehicleBoundingBox.setFromObject(vehicle.current);

      const playerBoundingBox = new THREE.Box3();
      playerBoundingBox.setFromObject(player.ref);

      if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
        window.alert("Game over!");
        window.location.reload();
      }
    }
  });
}