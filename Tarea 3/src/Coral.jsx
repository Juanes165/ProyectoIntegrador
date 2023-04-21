import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Coral() {
    const PATH = "/static/textures/coral/"
    
    const props = useTexture({
        aoMap: PATH + 'ao.jpg',
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
    })

    return (
        <mesh castShadow={true} receiveShadow={true} rotation-y={Math.PI / 12}>
            <tetrahedronGeometry/>
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}