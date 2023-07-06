import PictureContainer from 'utilities/PictureContainer'

export default function ImageOverlay({styles, imgMobile, imgTablet, imgDesktop, altText, children }) {

    const container = styles.container + `
      relative  w-fit  m-auto overflow-hidden
    `
    const overlayContainer = styles.overlayContainer + `
      absolute inset-0 opacity-0 bg-black 
      hover:opacity-60 hover:transition-opacity
      FlexCenter flex-col gap-2 text-center p-8
    `

    return (
      <div className={container}>

          <PictureContainer 
          styles={styles}
          imgMobile={imgMobile} 
          imgTablet={imgTablet}
          imgDesktop={imgDesktop}
          altText={altText} 
          />

          <div className={overlayContainer}>
              {children}
          </div>
      </div>
    )
  }