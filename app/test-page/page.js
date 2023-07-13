import { Main }  from 'components/PageComponents'
import { PictureContainer } from 'components/UtilityComponents'

import { breakpoints } from 'app/layout'
import imgMobile from 'images/image-mobile.jpg'
import imgTablet from 'images/image-tablet.jpg'
import imgDesktop from 'images/image-desktop.jpg'

//////////////////////////////////////////////////

export default function TestPage() {
    return (

        <Main styles={{
          main:`  `,
          mainContainer:`  `}}>

          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph</p>
          <a href="/">Anchor</a>

          <div className='OverlayParent'>
            <PictureContainer 
              breakpoints={breakpoints}
              imgMobile={imgMobile} 
              imgTablet={imgTablet}
              imgDesktop={imgDesktop}
              altText={'alt text'} 
            />
            <div className=' OverlayChild FlexCenter'>
              <p className='text-white '>Hello</p>
            </div>
          </div>

        </Main>
    )
}
