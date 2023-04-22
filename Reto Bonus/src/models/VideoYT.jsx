import { useVideoTexture, Html } from "@react-three/drei";
import React, { useRef, useState } from "react";


export default function VideoYT() {

    const videoURL = "https://www.youtube.com/embed/UJETerHAdJE"

    return (
        <mesh castShadow={true} receiveShadow={true} rotation-y={Math.PI/2} position={[-1, 0, -2]}>

            <boxGeometry args={[0, 2.6, 4.5]}>
                <Html
                    position={[-1, 0, -2]}
                    transform
                    distanceFactor={1.1}
                >
                    <iframe width="1600px" height="900px" src={videoURL}></iframe>
                </Html>
            </boxGeometry>
        </mesh>
    )
}

function VideoMaterial({ src }) {
    const texture = useVideoTexture(src)

    return <meshBasicMaterial map={texture} toneMapped={false} />
}