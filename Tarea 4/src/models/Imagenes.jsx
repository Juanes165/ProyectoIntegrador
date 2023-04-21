import { useTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";

export default function Imagenes() {
    const PATH = "/static/textures/"
    
    const [randomNumber, setRandomNumber] = useState(1)

    const textureProps = useTexture({
        map: PATH + (randomNumber+1) + ".jpg",
    })

    const onHandleTextureChange = (event) => {
        setRandomNumber(((randomNumber + 1) % 4))
        console.log(randomNumber+1)
    }

    return (
        <mesh castShadow={true} receiveShadow={true} rotation-y={7 * Math.PI / 12} position={[-1,0,-3]} onPointerEnter={onHandleTextureChange}>
            <boxGeometry args={[0.5, 3.5, 4.5]}/>
            <meshStandardMaterial {...textureProps} toneMapped={false}/>
        </mesh>
    )
}