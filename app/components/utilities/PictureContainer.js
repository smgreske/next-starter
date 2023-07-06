import { breakpoints } from 'app/layout'

export default function PictureContainer({ 
  styles, 
  altText,
  imgMobile, imgTablet, imgDesktop, }) {

    const pictureContainer = ` overflow-hidden ` +
      (styles.pictureContainer && styles.pictureContainer )

    return (
      <picture className={pictureContainer}>
        {imgDesktop && <source 
          srcSet={imgDesktop.src}
          media={`(min-width: ${breakpoints.desktop})`}/>}
        {imgTablet && <source
          srcSet={imgTablet.src}
          media={`(min-width: ${breakpoints.tablet})`}/>}
        <img src={imgMobile.src} alt={altText}/>   
      </picture>
  )
}
