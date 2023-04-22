import { useVideoTexture } from "@react-three/drei";
import React from "react";


export default function VideoYT() {

    const URL = "https://media.graphassets.com/DOREYt8xQmiQj0pfJBrQ"

    // CORS anonimos para la peticion
    const videoProps = { start: true, loop: true, crossOrigin: "anonymous" }

    const texture = useVideoTexture(URL, videoProps)

    return (
        <mesh castShadow={true} receiveShadow={true} rotation-y={Math.PI/12} position={[2.5, 0, 0]}>
            <boxGeometry args={[0, 2.6, 4.5]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    )
}
