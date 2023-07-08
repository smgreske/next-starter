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
   
  return (
    <html lang="en">          
      <body > 

       {/* HEADER --------------------------------- */}

        <Header 
        styles={{
          header:` py-XXXXX `,
          headerContainer:` FlexBetween  w-full ` }}> 
            
            <Link
            href='/test-page'>
            
                <SvgComponent  
                styles={{
                  container:` w-XXXXX  md:w-XXXXX `,
                  svg:`  ` }}  
                attributes={{
                  width:'XXXXX',
                  height:'XXXXX',
                  xmlns:'XXXXX',
                  svgBody:<path>XXXXX</path> }}
                />

            </Link>
            
            <ToggleSwitch 
            mobileOnly={true}
            iconOn='on'
            iconOff='off'>
                
                <Navigation 
                styles={{
                  navContainer:` flex flex-col md:flex-row items-center gap-XXXXX  `,
                  navLinksContainer:` flex flex-col md:flex-row gap-XXXXX `,
                  navLink:`  ` }}
                navLinkArray={[
                  { name: 'linkedIn', path: '/' },
                  { name: 'twitter', path: '/' },
                  { name: 'instagram', path: '/' },]}>
                    
                    <Link 
                    className={'ButtonBordered'}
                    href='/'>
                    Button
                    </Link>

                </Navigation>
            </ToggleSwitch>
        </Header>
  
        {children}

        {/* FOOTER --------------------------------- */}
  
        <Footer 
        styles={{
          footer:` py-XXXXX `,
          footerContainer:` FlexBetween w-full ` }}>

            <Link 
            href='/'>

                <SvgComponent  
                styles={{
                  container:` w-XXXXX  md:w-XXXXX `,
                  svg:`  ` }}  
                attributes={{
                  width:'XXXXX',
                  height:'XXXXX',
                  xmlns:'XXXXX',
                  svgBody:<path>XXXXX</path> }}
                />                  
            </Link>

            <SocialLinks
            styles={{
              socialNav:` flex  gap-XXXXX `,
              socialSvg:` w-XXXXX fill-[XXXXX] hover:fill-[XXXXX] ` }}
            socialArray={[
              { name: 'linkedIn', path: '/' },
              { name: 'twitter', path: '/' },
              { name: 'instagram', path: '/' }]}
            />  
        </Footer>
    </body>
  </html>
      )
  }