import 'app/global.css'
import { Barlow, Fraunces } from 'next/font/google'

import Link from 'next/link'

import Footer from 'layout/Footer.js'
import Header from 'layout/Header.js'
import Navigation from 'layout/Navigation'
import SocialLinks from 'layout/SocialLinks'
import SvgComponent from 'utilities/SvgComponent'
import ToggleSwitch from 'utilities/ToggleSwitch'

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

export const metadata = {
  title: '*',
  description: 'description',
}

////////////////////////////////////////////////
export default function TestLayout({ children }) {
////////////////////////////////////////////////
  
  ///// Header ///////////////////////////////////////////////
  const headerStyles = {
    header:` py-XXXXX `,
    headerContainer:` FlexBetween  w-full `,
  }
  ///// Footer ///////////////////////////////////////////////
  const footerStyles = {
    footer:` py-XXXXX `,
    footerContainer:` FlexBetween w-full `,
  }
  ///// NAVIGATION ///////////////////////////////////////////
  const navStyles = {
    navContainer:` flex flex-col md:flex-row items-center gap-XXXXX  `,
    navLinksContainer:` flex flex-col md:flex-row gap-XXXXX `,
    navLink:`  `,
  }
  // --------------------------
  const navLinkArray = [
    { name: 'Link1', path: '/' },
    { name: 'Link2', path: '/' },
    { name: 'Link3', path: '/' },
  ]
  ///// SOCIAL lINKS /////////////////////////////////////////////
  const socialLinksStyles = {
    socialNav:` flex  gap-XXXXX `,
    socialSvg:` w-XXXXX fill-[XXXXX] hover:fill-[XXXXX] `,
  }
  // ------------------------------
  const socialLinksArray = [
    { name: 'linkedIn', path: '/' },
    { name: 'twitter', path: '/' },
    { name: 'instagram', path: '/' },
  ]
  ///// SVG CONTAINER /////////////////////////////////////////////////
  // Main Logo
  const mainLogo = {
    container:` w-XXXXX  md:w-XXXXX `,
    svg:`  `
  }
  //-----------------------------
  const mainLogoAttributes = {
    width:'XXXXX',
    height:'XXXXX',
    xmlns:'XXXXX',
    svgBody:<path>XXXXX</path>
  }
  /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  
  return (
    <html lang="en">          
      <body > 
        
        <Header 
        styles={headerStyles}  
        fixed={true}> 
            
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
            styles={socialLinksStyles}
            socialArray={socialLinksArray}/>  
        </Footer>
    </body>
  </html>
      )
  }