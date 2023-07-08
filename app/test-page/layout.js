import 'app/global.css'
import { Barlow, Fraunces } from 'next/font/google'

import Link from 'next/link'

import Footer from 'layout/Footer.js'
import Header from 'layout/Header.js'
import Navigation from 'layout/Navigation'
import SocialLinks from 'layout/SocialLinks'
import SvgComponent from 'utilities/SvgComponent'
import ToggleSwitch from 'utilities/ToggleSwitch'

//  -----------------------------------------------------------

export const fontPrimary = Barlow({ 
  subsets: ['latin'],
  weight: ['400','700'],
  display: 'swap', 
  variable: '--font-primary',
})
export const fontSecondary = Fraunces({ 
  subsets: ['latin'],
  weight: ['400','700'],
  display: 'swap', 
  variable: '--font-secondary',
})

export const breakpoints = {
  tablet:'650px',
  desktop:'1000px'
}

//  -----------------------------------------------------------

export const metadata = {
  title: '*',
  description: 'description',
}

//////////////////////////////////////////////////////////////
export default function TestLayout({ children }) {
////////////////////////////////////////////////////////////////
  
  ///// HEADER ///////////////////////////////////////////////
  const headerStyles = {
    header:` py-4 bg-blue-300  `,
    headerContainer:` FlexBetween  w-full `,
  }
  ///// SVG CONTAINER /////////////////////////////////////////////////
  // Main Logo
  const mainLogo = {
    container:` w-16  md:w-20 `,
    svg:` fill-blue-800  `
  }
  //-----------------------------
  const mainLogoAttributes = {
    width:'20',
    height:'20',
    xmlns:'XXXXX',
    svgBody:<circle cx='10' cy='10' r='10' />
  }
  ///// NAVIGATION ///////////////////////////////////////////
  const navStyles = {
    navContainer:` flex  flex-col  md:flex-row  items-center  gap-8 `,
    navLinksContainer:` flex  flex-col  md:flex-row  gap-6 `,
    navLink:` hover:text-white `,
  }
  // --------------------------
  const navLinkArray = [
    { name: 'One', path: '/' },
    { name: 'Two', path: '/' },
    { name: 'Three', path: '/' },
  ]
  ///// Footer ///////////////////////////////////////////////
  const footerStyles = {
    footer:` py-8 bg-blue-300  `,
    footerContainer:` FlexBetween w-full `,
  }
  ///// SOCIAL LINKS /////////////////////////////////////////////
  const socialNavStyles = {
    socialNav:` flex  gap-6 `,
    socialSvg:` w-8 fill-white hover:fill-blue-800 `,
  }
  // ------------------------------
  const socialLinkArray = [
    { name: 'linkedIn', path: '/' },
    { name: 'twitter', path: '/' },
    { name: 'instagram', path: '/' },
  ]
  
  /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  
  return (
    <html lang="en">          
      <body > 
        <Header 
        styles={headerStyles}> 
            <Link 
            href='/test-page'>
                <SvgComponent 
                styles={mainLogo}
                attributes={mainLogoAttributes}/>
  
            </Link>
            <ToggleSwitch 
            mobileOnly={true}
            iconOn='on'
            iconOff='off'>
                <Navigation 
                styles={navStyles}
                navLinkArray={navLinkArray}>
                    <Link 
                    className={'ButtonBordered'}
                    href='/'>
                    Button
                    </Link>
                    
                </Navigation>
            </ToggleSwitch>
        </Header>
  
        {children}
  
        <Footer 
        styles={footerStyles}>
            <Link 
            href='/'>     
                <SvgComponent
                styles={mainLogo}
                attributes={mainLogoAttributes}/>                     
            </Link>     
            <SocialLinks
            styles={socialNavStyles}
            socialArray={socialLinkArray}/>  
        </Footer>
    </body>
    </html>
      )
  }