import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Floor from './models/Floor'
import Video from './models/Video'
import Imagenes from './models/Imagenes'

export default function Experience() {
    return <>
        {/* <mesh
            onClick={(e) => console.log('click')}
            onContextMenu={(e) => console.log('context menu')}
            onDoubleClick={(e) => console.log('double click')}
            onWheel={(e) => console.log('wheel spins')}
            onPointerUp={(e) => console.log('up')}
            onPointerDown={(e) => console.log('down')}
            onPointerOver={(e) => console.log('over')}
            onPointerOut={(e) => console.log('out')}
            onPointerEnter={(e) => console.log('enter')}
            onPointerLeave={(e) => console.log('leave')}
            onPointerMove={(e) => console.log('move')}
            onPointerMissed={() => console.log('missed')}
            onUpdate={(self) => console.log('props have been updated')}
        /> */}

        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow shadow-normalBias={0.04} />
        <ambientLight intensity={0.5} />
        <Sky />

        <Video />

        <Imagenes />

        <Floor />
    </>
}