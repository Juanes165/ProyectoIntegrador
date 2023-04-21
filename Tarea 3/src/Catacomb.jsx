import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Catacomb() {
    const PATH = "/static/textures/catacomb/"
    
    const props = useTexture({
        aoMap: PATH + 'ao.jpg',
        map: PATH + "color.jpg",
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
    })

    return (
        <mesh castShadow={true} receiveShadow={true} rotation-y={Math.PI / 12}>
            <planeGeometry args={[2,2]}/>
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}