import 'app/global.css'
import { Barlow, Fraunces } from 'next/font/google'

import Link from 'next/link'

import Footer from 'layout/Footer.js'
import Header from 'layout/Header.js'
import Navigation from 'layout/Navigation'
import SocialLinks from 'layout/SocialLinks'
import SvgComponent from 'utilities/SvgComponent'
import ToggleSwitch from 'utilities/ToggleSwitch'

//---------------------------------------------------

export const fontPrimary = Barlow({ 
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  display: 'swap', 
  variable: '--font-primary',
})
export const fontSecondary = Fraunces({ 
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
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
export default function RootLayout({ children }) {
////////////////////////////////////////////////

///// Header ///////////////////////////////////////////////
const headerStyles = {
  header:`
    FlexCenter  py-10 `,
  container:`
    FlexBetween  w-full `,
}
///// Footer ///////////////////////////////////////////////
const footerStyles = {
  footer:`
    FlexCenter  py-10 `,
  container:`
    FlexBetween  w-full `,
}
///// NAVIGATION ///////////////////////////////////////////
const navigationStyles = {
  container:`
    flex  flex-col  md:flex-row  items-center  gap-12 `,
  linksContainer:`
    flex  flex-col  md:flex-row  gap-6 `,
  navLink:`
    hover:HoverStyle1 `,
}
// --------------------------
const navLinkArray = [
  { name: 'Link1', path: '/' },
  { name: 'Link2', path: '/' },
  { name: 'Link3', path: '/' },
]
///// SOCIAL LINKS /////////////////////////////////////////////
const socialNavStyles = {
  svg:`
    w-6  hover:HoverStyle1  `,
  nav:`
    flex  gap-6`
}
// ------------------------------
const socialLinkArray = [
  { name: 'linkedIn', path: '/' },
  { name: 'twitter', path: '/' },
  { name: 'instagram', path: '/' },
]
///// SVG /////////////////////////////////////////////////
const svgContainerStyles = {
  container:`
    w-32  md:w-40 `,
  svg:`
    hover:HoverStyle1 `
}
//-----------------------------
const svgAttributes = {
  width:'124',
  height:'24',
  xmlns:'http://www.w3.org/2000/svg',
  svgBody:<rect height='24' width='124'/>
}

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

return (
  <html className={`${fontPrimary.variable} ${fontSecondary.variable}`} lang="en">          
    <body > 
      <Header 
      styles={headerStyles}
      fixed={false}> 
          <Link 
          href='/test-page'>
              <SvgComponent 
              styles={svgContainerStyles}
              attributes={svgAttributes}/>

          </Link>
          <ToggleSwitch 
          mobileOnly={true}
          iconOn='on'
          iconOff='off'>
              <Navigation 
              styles={navigationStyles}
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
              styles={svgContainerStyles}
              attributes={svgAttributes}/>                     
          </Link>     
          <SocialLinks
          styles={socialNavStyles}
          socialArray={socialLinkArray}/>  
      </Footer>
  </body>
  </html>
    )
}
