import React from 'react'

export default function FooterHeading({headingText, headingColor,headingFontFamily}) {
  return (
    <h4 className={`${headingFontFamily} text-2xl ${headingColor} leading-6 mb-[18px] font-normal`}>
    {headingText}
  </h4>
  )
}
