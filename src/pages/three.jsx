import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import styles from "./three.module.css";

export default function Three() {
  const rendererDOM = useRef();
  const cube = useRef();
  const renderer = useRef();
  const scene = useRef();
  const camera = useRef();
  useEffect(() => {
    const rect = rendererDOM.current.getBoundingClientRect();
    const width = rect.width || rect.right - rect.left; // 可能需要处理兼容性
    const height = rect.height || rect.bottom - rect.top; // 可能需要处理兼容性
    // 场景
    scene.current = new THREE.Scene();
    // 相机
    camera.current = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);
    // 渲染器
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(width, height);
    rendererDOM.current.appendChild(renderer.current.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube.current = new THREE.Mesh(geometry, material);
    scene.current.add(cube.current);
    camera.current.position.z = 5;
    animate();
  }, []);
  function animate() {
    requestAnimationFrame(animate);
    cube.current.rotation.x += 0.01;
    cube.current.rotation.y += 0.01;
    renderer.current.render(scene.current, camera.current);
  }
  return (
    <main>
      <h2>Three Test</h2>
      <div className={styles.rendererDOM} ref={rendererDOM}></div>
    </main>
  );
}
