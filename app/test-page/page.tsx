import Link from "next/link";

import "app/test-page/testPageGlobal.css";
import { fontPrimary, fontSecondary, breakpoints } from "../layout";
import { svgLogoHeader, svgLogoFooter } from "app/svg";
import { Navigation } from "components/Navigation";
import { SocialNav } from "components/SocialNav";

import { InputText, InputEmail } from "components/Input";
import { ToggleSwitch } from "components/Utility";

import imgM from "images/image-mobile.jpg";
import imgT from "images/image-tablet.jpg";
import imgD from "images/image-desktop.jpg";

export const metadata = {
  title: "*",
  description: "description",
};

////////////////////////////////////////////////////////////////////////////////
export default function TestPage() {
  ///////////////////////////////////////////////////////////////////////////////

  return (
    <html
      className={`${fontPrimary.variable} ${fontSecondary.variable}`}
      lang="en"
    >
      <body>
        <header className="bg-[--clr-4]">
          <div className="flex justify-between items-center py-4">
            <Link href="/">{svgLogoHeader}</Link>

            <ToggleSwitch
              styles={{
                label: "",
              }}
              mobileOnly={true}
              iconOn="on"
              iconOff="off"
            >
              <Navigation
                styles={{
                  navContainer: `flex flex-col md:flex-row items-center gap-12`,
                  navLinksContainer: `flex flex-col md:flex-row gap-8 `,
                  navLink: ` text-[--clr-1] hover:text-[--clr-5] `,
                }}
                navLinkArray={[
                  { name: "One", path: "/" },
                  { name: "Two", path: "/" },
                  { name: "Three", path: "/" },
                ]}
              >
                <Link
                  className="text-[--clr-1] bg-[--clr-4] hover:text-[--clr-4] hover:bg-[--clr-1] px-4 py-1 border-2 rounded-full "
                  href="#footer"
                >
                  Scroll
                </Link>
              </Navigation>
            </ToggleSwitch>
          </div>
        </header>

        <main>
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Paragraph</p>
            <a href="#">Anchor</a>

            {/* Split Container with Image and Centered Text */}

            <div className="md:grid grid-cols-2 p-4 bg-[--clr-2] gap-4 my-8">
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
                  className="w-full h-[300px] md:h-[600px] object-cover object-bottom "
                  src={imgM.src}
                  alt="alt text"
                />
              </picture>

              <div className="flex flex-col justify-center items-center text-center p-10 bg-[--clr-1] h-full">
                <h2>Header</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  pariatur, iusto ipsa necessitatibus facilis molestiae impedit
                  at ipsum sed nihil.
                </p>
              </div>
            </div>

            {/* Image with Overlay on Hover */}

            <div className="relative w-fit m-auto overflow-hidden rounded-xl my-4">
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
                  className="w-full min-h-[300px] md:max-h-[600px] object-cover object-left"
                  src={imgM.src}
                  alt="alt text"
                />
              </picture>

              <div className=" absolute inset-0 opacity-0 bg-black flex justify-center items-center hover:opacity-60 hover:transition-opacity ">
                <p className="text-white ">Hello</p>
              </div>
            </div>
          </div>
        </main>

        <footer id="footer" className="bg-[--clr-4]">
          <div className="flex justify-between items-center py-4">
            <Link href="/">{svgLogoFooter}</Link>

            {/* Social Links */}

            <SocialNav
              styles={{
                socialNav: `flex gap-8 `,
                socialSvg: `w-8 fill-[--clr-1] hover:fill-[--clr-5] `,
              }}
              socialArray={[
                { name: "twitter", path: "/" },
                { name: "instagram", path: "/" },
                { name: "facebook", path: "/" },
              ]}
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
