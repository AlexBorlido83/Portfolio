import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Officev2(props) {
  const { nodes, materials } = useGLTF("models/roomv3.gltf");
  const texture = useTexture("textures/Baked.png");

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  return (
    <group {...props} dispose={null}>
      <group
        name="Chair"
        position={[-0.215, 0.432, -0.843]}
        rotation={[-Math.PI, 0.089, -Math.PI]}
      >
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_2"
          geometry={nodes["Node-Mesh_2"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_3"
          geometry={nodes["Node-Mesh_3"].geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="computerScreen"
        position={[-0.52, 1.21, -2.273]}
        rotation={[Math.PI, -0.003, Math.PI]}
      >
        <mesh
          name="computerScreen_2"
          geometry={nodes.computerScreen_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="computerScreen_2_1"
          geometry={nodes.computerScreen_2_1.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Houseplant_mesh"
        geometry={nodes.Houseplant_mesh.geometry}
        material={textureMaterial}
        position={[2.188, -0.036, -2.101]}
      />
      <group name="Shelf" position={[0, 2.215, -2.814]}>
        <mesh
          name="SM_ShelfSM_Shelf1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="SM_ShelfSM_Shelf1_1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Mouse"
        geometry={nodes.Mouse.geometry}
        material={textureMaterial}
        position={[0.676, 1.212, -2.002]}
        rotation={[-Math.PI, 0.531, -Math.PI]}
      />
      <mesh
        name="Keyboard"
        geometry={nodes.Keyboard.geometry}
        material={textureMaterial}
        position={[-0.047, 1.211, -1.964]}
      />
      <group
        name="Desk"
        position={[0, 0, -2.256]}
        rotation={[Math.PI, -1.552, Math.PI]}
      >
        <mesh
          name="Plane001_Plane002_BlackWood"
          geometry={nodes.Plane001_Plane002_BlackWood.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood_1"
          geometry={nodes.Plane001_Plane002_BlackWood_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood_2"
          geometry={nodes.Plane001_Plane002_BlackWood_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood_3"
          geometry={nodes.Plane001_Plane002_BlackWood_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood_4"
          geometry={nodes.Plane001_Plane002_BlackWood_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Lamp001"
        position={[-2.313, 2.164, -1.698]}
        rotation={[Math.PI, 0.341, -2.618]}
      >
        <mesh
          name="Cylinder400"
          geometry={nodes.Cylinder400.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Cylinder400_1"
          geometry={nodes.Cylinder400_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Cylinder400_2"
          geometry={nodes.Cylinder400_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Cylinder400_3"
          geometry={nodes.Cylinder400_3.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Rug"
        geometry={nodes.Rug.geometry}
        material={textureMaterial}
        position={[-0.173, -0.009, 1.123]}
      />
      <mesh
        name="RubberFigPottedPlant_mesh"
        geometry={nodes.RubberFigPottedPlant_mesh.geometry}
        material={textureMaterial}
        position={[-0.79, 2.643, -2.701]}
      />
      <mesh
        name="Plane"
        geometry={nodes.Plane.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane_1"
        geometry={nodes.Plane_1.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane_2"
        geometry={nodes.Plane_2.geometry}
        material={textureMaterial}
      />
    </group>
  );
}

useGLTF.preload("models/roomv3.gltf");
