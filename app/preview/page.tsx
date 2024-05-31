'use client'
import React from 'react'
import './globals.css'
import Preview from '@/components/Preview'
import { RecoilRoot } from 'recoil'
function App() {
  return (
    <>
      <RecoilRoot>
        <Preview />
      </RecoilRoot>
    </>
  )
}

export default App
