import imgM from "images/image-mobile.jpg";
import imgT from "images/image-tablet.jpg";
import imgD from "images/image-desktop.jpg";

import { breakpoints } from "app/layout";
// -----------------------------------------

export default function Home() {
  return (
    <main>
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Paragraph</p>
        <a href="/">Anchor</a>

        <div className="relative w-fit m-auto overflow-hidden rounded-xl my-8">
          <div className=" absolute inset-0 flex justify-center items-center opacity-0 bg-black hover:opacity-60 hover:transition-opacity ">
            <p className="text-white ">Hello</p>
          </div>
        </div>

        <div className="grid grid-cols-2 place-items-center p-4 bg-[--clr-2] gap-4">
          <picture className="">
            <source
              srcSet={imgD.src}
              media={`(min-width: ${breakpoints.desktop})`}
            />
            <source
              srcSet={imgT.src}
              media={`(min-width: ${breakpoints.tablet})`}
            />
            <img
              className="h-[600px] object-cover object-left"
              src={imgM.src}
              alt="alt text"
            />
          </picture>

          <div className="px-8 bg-[--clr-1] ">
            <h2>Header</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              pariatur, iusto ipsa necessitatibus facilis molestiae impedit at
              ipsum sed nihil.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
