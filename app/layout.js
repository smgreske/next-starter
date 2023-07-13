import Link from 'next/link'
import { Footer, Header, Navigation, SocialLinks } from 'components/LayoutComponents'
import { PictureContainer, ToggleSwitch } from 'components/UtilityComponents'

import 'app/global.css'
import { XXXXX, XXXXX } from 'next/font/google'

export const fontPrimary = XXXXX({ 
  subsets: ['latin'],
  weight: ['XXXXX'],
  display: 'swap', 
  variable: '--font-primary',
})
export const fontSecondary = XXXXX({ 
  subsets: ['latin'],
  weight: ['XXXXX'],
  display: 'swap', 
  variable: '--font-secondary',
})

export const breakpoints = {
  tablet:'650px',
  desktop:'1000px'
}

export const metadata = {
  title: '*',
  description: 'description',
}

/// SVG ///////////////////////////////////////////////////////////////////

const mainLogoSvgBody = XXXXX

////////////////////////////////////////////////////////////////////////////////
export default function RootLayout({ children }) {
///////////////////////////////////////////////////////////////////////////////
 
  return (
    <html className={`${fontPrimary.variable} ${fontSecondary.variable}`} lang="en">          
      <body > 

       {/* HEADER //////////////////////////////////////// */}

        <Header styles={{
        header:`text-[--clr-[XXXXX] bg-[--clr-[XXXXX] `,
        headerContainer:` py-[XXXXX] ` }}>

            <Link className=' w-[XXXXX]' 
            href='/test-page'>
              XXXXX
            </Link>
            
            {/* Navigation ------------------------------------------ */}
            
            <ToggleSwitch 
            mobileOnly={true}
            iconOn='on'
            iconOff='off'> 

                <Navigation styles={{
                navContainer:`flex flex-col md:flex-row items-center gap-[XXXXX] `,
                navLinksContainer:`flex flex-col md:flex-row gap-[XXXXX] `,
                navLink:` `}}
                navLinkArray={[
                  { name: 'Link1', path: '/' },
                  { name: 'Link2', path: '/' },
                  { name: 'Link3', path: '/' }]}>                                      
                </Navigation>
                
            </ToggleSwitch>
        </Header>
  
        {children}

        {/* FOOTER ///////////////////////////////////////////////// */}
  
        <Footer styles={{
        footer:`text-[--clr-[XXXXX] bg-[--clr-[XXXXX] `,
        footerContainer:` `}}>

            <Link className='w-[XXXXX] '
            href='/'>
              {mainLogoSvgFooter}
            </Link>

            {/* Social Links */}

            <SocialLinks styles={{
            socialNav:`flex gap-[XXXXX] `,
            socialSvg:`w-[XXXXX] fill-[XXXXX] hover:fill-[XXXXX] ` }}
            socialArray={[
              { name: 'XXXXX', path: '/' },
              { name: 'XXXXX', path: '/' },
              { name: 'XXXXX', path: '/' }]}
            />

        </Footer>
    </body>
  </html>
      )
  }