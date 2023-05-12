import React from "react";

export default function ServiceContent({
  text1,
  text2,
  textList1,
  textList2,
  textList3,
  textList4,
}) {
  return (
    <div className="font-[Quicksand] text-[#444444] text-base font-normal">
      <p className="mb-[15px]">{text1}</p>
      <ul className="md:flex md:flex-wrap">
        <li className="flex basis-1/2 mb-7 lg:pl-[10px] ">
          <img
            className="mr-5 h-fit"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/smallflower.png"
            alt="small-flower"
          />
          <p>{textList1}</p>
        </li>

        <li className="flex basis-1/2 mb-7 lg:pl-[10px] ">
          <img
            className="mr-5 h-fit"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/smallflower.png"
            alt="small-flower"
          />
          <p>{textList2}</p>
        </li>

        <li className="flex basis-1/2 mb-7 lg:pl-[10px] ">
          <img
            className="mr-5 h-fit"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/smallflower.png"
            alt="small-flower"
          />
          <p>{textList3}</p>
        </li>

        <li className="flex basis-1/2 mb-7 lg:pl-[10px] ">
          <img
            className="mr-5 h-fit"
            src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Services/smallflower.png"
            alt="small-flower"
          />
          <p>{textList4}</p>
        </li>
      </ul>
      <p className="pb-[60px]">{text2}</p>
    </div>
  );
}
