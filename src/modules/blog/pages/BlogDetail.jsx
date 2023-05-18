import React from "react";
import Container from "../../../common/components/Container";

export default function BlogDetail() {
  return (
    <div className=" px-10 ">
      <Container>
        {/* Heading-image */}
        <div>
          <div>
            <div className="relative w-full h-[500px] mx-auto">
              <img
                className="w-full h-full object-cover"
                src="https://zjuxinjcqrcvncurfkwx.supabase.co/storage/v1/object/public/Image/Product/product-22.jpg"
                alt=""
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] px-2 md:px-[35px] pt-6 md:pt-[38px] pb-4 md:pb-[30px] bg-white bg-opacity-40 text-center">
                <span
                  className={`inline-block font-[Quicksand]  text-[14px] text-white font-bold uppercase bg-black  px-3 pt-1 pb-[2px] mb-4`}
                >
                  Trend new
                </span>
                <a href="">
                  <h2 className="font-['Libre_Baskerville'] text-h4 font-normal mb-3">
                    Edible Favorites for Your Cutting Garden
                  </h2>
                </a>
                <span className="font-[Quicksand] text-sm font-medium text-[#888888] uppercase ">
                  Day (16-05-2023)
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="font-[Quicksand] text-[#111111] w-full border-solid border-y-[1px] border-[#e1e1e1] pb-5 mb-5">
              <div>
                <p className="my-8 py-4">
                  Over the years I’ve tucked carrots into a famous chef’s bridal
                  bouquet, included chili peppers and tiny eggplant in
                  food-loving grooms’ boutonnieres, sprinkled clusters of cherry
                  tomatoes through hundreds of centerpieces, added raspberries
                  to guestbook displays, and woven scented herbs into as many
                  floral designs as I could manage.
                </p>
              </div>
              <div className="text-center mx-auto my-7 py-5 border-dashed border-y-[2px] border-opacity-60 border-[#f45d96]">
                <h4 className="font-['Libre_Baskerville'] text-[#444444] text-h4 font-normal mb-3">
                  “ There’s nothing quite like pairing food with flowers. Most
                  people don’t pay much attention to what’s in a vase unless
                  they recognize the ingredients ”
                </h4>
              </div>
              <div className="my-8">
                <p className="py-4">
                  As you’re planning your garden this year, I highly encourage
                  you to add some edibles alongside your cut flowers. Not only
                  are they beautiful for arrangements, they are wonderful for
                  eating. We chose the varieties in Floret’s collection of
                  edibles—including edible flowers—because they are beautiful
                  and delicious.
                </p>
                <p className="py-4">
                  All these varieties are easy to grow from seed. Many love the
                  heat and produce abundantly from summer through the first fall
                  frost. Because our farm is situated in an area with relatively
                  cool summers, I grow most of my edibles in a hoophouse for an
                  added level of heat. But if your garden gets plenty of sun,
                  you can grow all your edibles outdoors.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="font-['Libre_Baskerville'] text-h4 font-normal mb-3">
                  1.Flower
                </h4>
                <p className="pb-4">
                  Peas are a cool weather crop. Direct seed in early spring as
                  soon as the soil can be worked. Provide a strong trellis or
                  support for vines to climb.
                </p>
                <p>
                  For use in floral design, harvest stems when pods are brightly
                  colored, taking care when handling delicate vines. Expect a
                  vase life of 5 to 7 days. (Please note that unlike these
                  edible garden peas, the seeds of sweet peas are poisonous if
                  ingested; it’s important to make this distinction in the
                  garden.)
                </p>
              </div>
              <div className="mb-8">
                <h4 className="font-['Libre_Baskerville'] text-h4 font-normal mb-3">
                  2.Tomatoes
                </h4>
                <p>
                  For use in floral design, harvest stems when pods are brightly
                  colored, taking care when handling delicate vines. Expect a
                  vase life of 5 to 7 days. (Please note that unlike these
                  edible garden peas, the seeds of sweet peas are poisonous if
                  ingested; it’s important to make this distinction in the
                  garden.)
                </p>
              </div>
              <div className="mb-8">
                <h4 className="font-['Libre_Baskerville'] text-h4 font-normal mb-3">
                  3. Bachelor’s Buttons
                </h4>
                <p>
                  This cutting garden classic is easy to grow,
                  pollinator-friendly, and a great choice for beginners. Plants
                  will flower over a long period of time if regularly harvested.
                  Add the bright, colorful petals to salads or egg dishes as a
                  delightful garnish.
                </p>
                <p>
                  This cutting garden classic is easy to grow,
                  pollinator-friendly, and a great choice for beginners. Plants
                  will flower over a long period of time if regularly harvested.
                  Add the bright, colorful petals to salads or egg dishes as a
                  delightful garnish.
                </p>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </div>
  );
}
