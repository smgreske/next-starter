import Link from "next/link";
import { Poppins, Fraunces } from "next/font/google";

import "app/global.css";
import { svgLogoHeader, svgLogoFooter } from "app/svg"

import { Navigation } from "components/Navigation"
import { SocialNav } from "components/SocialNav"
import { InputText, InputEmail } from "components/Input"
import { ToggleSwitch } from "components/Utility"

// -----------------------------------------------------------
export const fontPrimary = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-primary",
});

export const fontSecondary = Fraunces({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-secondary",
});

export const breakpoints = {
  tablet: "650px",
  desktop: "1000px",
};

export const metadata = {
  title: "*",
  description: "description",
};

////////////////////////////////////////////////////////////////////////////////
export default function RootLayout({ children }:any) {
  return (
    <html
      className={`${fontPrimary.variable} ${fontSecondary.variable}`}
      lang="en"
    >
      <body>
        {/* <header className='bg-[--clr-XXXXX]'>
    <div className='flex justify-between items-center py-XXXXX'>
            
        <Link className='w-XXXXX'
          href='/'>
            {logoHeader}
        </Link>
      
        <ToggleSwitch 
          mobileOnly={true}
          iconOn='on'
          iconOff='off'>

            <Navigation styles={{
              navContainer:`flex flex-col md:flex-row items-center `,
              navLinksContainer:`flex flex-col md:flex-row gap-XXXXX `,
              navLink:` text-[--clr-XXXXX] hover:text-[--clr-XXXXX] `}}
              navLinkArray={[
                { name: 'One', path: '/' },
                { name: 'Two', path: '/' },
                { name: 'Three', path: '/' }]}>

            <Link href='/'>
              <p>button</p>
            </Link>  

            </Navigation>
        </ToggleSwitch>

    </div>                  
  </header>  */}

        {children}
        {/*   
        <footer className='bg-[--clr-XXXXX]'>
          <div className='flex justify-between items-center py-XXXXX'>

              <Link className='w-XXXXX'
                href='/'>
                  {logoFooter}
              </Link>

              <SocialNav styles={{
                socialNav:`flex gap-XXXXX `,
                socialSvg:`w-XXXXX fill-[--clr-XXXXX] hover:fill-[--clr-XXXXX] ` }}
                socialArray={[
                  { name: 'twitter', path: '/' },
                  { name: 'facebook', path: '/' },
                  { name: 'gitHub', path: '/' }]}/>

          </div>
        </footer> */}
      </body>
    </html>
  );
}
