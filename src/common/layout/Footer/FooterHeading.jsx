import React from "react";

export default function FooterHeading({
  headingText,
  headingColor,
  headingFontFamily,
  fontSize
}) {
  return (
    <h4
      className={`${headingFontFamily} ${fontSize} ${headingColor} mb-[18px] font-normal`}
    >
      {headingText}
    </h4>
  );
}
