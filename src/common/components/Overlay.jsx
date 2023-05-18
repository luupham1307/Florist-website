import React from 'react'

export default function Overlay({onhandleclose}) {
  return (
    <div onClick={onhandleclose}  className='z-10 bg-black w-screen h-screen fixed top-0 bottom-0 left-0 right-0 opacity-50'></div>
  )
}
