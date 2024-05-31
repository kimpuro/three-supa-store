import React from 'react'
import { Canvas } from '@react-three/fiber'
import ShowRoom from '@/components/three/ShowRoom'
import ColorComp from '@/components/ColorComp'
import { Suspense } from 'react'
import SpinButton from '@/components/SpinButton'

export default function Preview() {
  const angle = 0
  const dis = 2.0
  return (
    <>
      <Suspense fallback={<SpinButton />}>
        <Canvas
          className="h-dvh w-full"
          // shadows
          // orthographic
          camera={{
            position: [dis * Math.sin(angle), 0.8, dis * Math.cos(angle)],
          }}
        >
          {/* <axesHelper args={[5]} /> */}
          {/* <gridHelper /> */}
          <color attach={'background'} args={['#b7f2f1']} />
          <ShowRoom />
        </Canvas>
      </Suspense>
      <ColorComp />
    </>
  )
}
