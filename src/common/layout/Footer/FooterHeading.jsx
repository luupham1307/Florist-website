import React from 'react'

export default function FooterHeading({headingText, headingColor}) {
  return (
    <h4 className="font-[Libre Baskerville] sm:text-2xl ${headingColor} sm:text-[#111111] sm:leading-6 sm:mb-[18px] sm:font-normal ">
    {headingText}
  </h4>
  )
}
