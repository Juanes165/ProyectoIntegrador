import { useVideoTexture } from "@react-three/drei";
import React, { useState } from "react";


export default function VideoYT() {

    const URL = "/static/kirby.mp4"

    const [videoProps, setVideoProps] = useState({start: false, loop: true, crossOrigin: "anonymous"})

    const onHandleVideoPlay = (event) => {
        setVideoProps({start: true, loop: true, crossOrigin: "anonymous"})
    }


    const texture = useVideoTexture(URL, videoProps)

    const [stream, setStream] = useState()

    return (
        <mesh castShadow={true} receiveShadow={true} rotation-y={Math.PI / 12} position={[3,0,-1]} onPointerUp={onHandleVideoPlay}>
            <boxGeometry args={[0.5, 3.5, 4.5]}/>
            <meshBasicMaterial map={texture} toneMapped={false}/>
        </mesh>
    )
}

function VideoMaterial({ src }) {
    const texture = useVideoTexture(src)
  
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }