import React from "react";

export default function FooterLink({ linkItem }) {
  return (
    <ul className="font-[Quicksand] text-[15px] leading-9">
      {linkItem.map((item) => {
        return (
          <li>
            <a href="">{item}</a>
          </li>
        );
      })}
    </ul>
  );
}
