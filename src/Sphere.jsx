import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Sphere() {
    const PATH = "/static/textures/lava/"
    
    const props = useTexture({
        aoMap: PATH + 'ao.jpg',
        map: PATH + "color.jpg",
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        maskMap: PATH + 'mask.jpg',
    })

    return (
        <mesh castShadow={true} receiveShadow={true} rotation-y={Math.PI / 12}>
            <sphereGeometry/>
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}