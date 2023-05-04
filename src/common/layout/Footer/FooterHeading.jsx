import React from "react";

export default function FooterHeading({
  headingText,
  headingColor,
  headingFontFamily,
}) {
  return (
    <h4
      className={`${headingFontFamily} text-h4 ${headingColor} mb-[18px] font-normal`}
    >
      {headingText}
    </h4>
  );
}
