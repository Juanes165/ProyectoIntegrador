import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Sphere from './Sphere'
import Coral from './Coral'
import Floor from './Floor'
import Catacomb from './Catacomb'

import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from 'three'

export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const spotLightRef = useRef()

    // HELPERS
    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    // useHelper(hemisphereLightRef, HemisphereLightHelper, 1)
    // useHelper(pointLightRef, PointLightHelper, 1)
    // useHelper(spotLightRef, SpotLightHelper, 1)

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* LUCES */}
        <directionalLight  ref={directionalLightRef} castShadow={true} position={[0, 10, -6]} intensity={1.5} shadow-mapSize={ [ 1024, 1024 ] }/>
        {/* <hemisphereLight  ref={hemisphereLightRef} castShadow={true} position={[0, 3, -5]} intensity={1.5}/> */}
        {/* <pointLight  ref={pointLightRef} castShadow={true} position={[3, 3, 3]} intensity={1.5} shadow-mapSize={ [ 1024, 1024 ] }/> */}
        {/* <spotLight  ref={spotLightRef} castShadow={true} position={[0, 2.5, 0]} intensity={1.5} shadow-mapSize={ [ 1024, 1024 ] }/> */}
        {/* <rectAreaLight castShadow={true} position={[0, 4, 3]} intensity={10}/> */}

        <ambientLight intensity={0.5} />
        <Sphere/>

        <mesh position={[-2.5, 0, 0]} rotation={[0,0,1]}>
            <Coral />
        </mesh>

        <mesh position={[2.5, 0, 0]}>
            <Catacomb />
        </mesh>
        <Floor/>
    </>
}