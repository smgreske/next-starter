import 'app/global.css'
import { Poppins, Space_Grotesk } from 'next/font/google'

export const fontPrimary = Poppins({ 
  subsets: ['latin'],
  weight: ['400','700'],
  display: 'swap', 
  variable: '--font-primary',
})
export const fontSecondary = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400','700'],
  display: 'swap', 
  variable: '--font-secondary',
})

export const breakpoints = {
  tablet:'650px',
  desktop:'1000px'
}

export default function RootLayout({ children }) {

return (
  <html lang="en">          
    <body > 
      {children}
    </body>
  </html>
    )
}
