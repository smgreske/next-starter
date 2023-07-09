

export function PictureContainer({ styles, altText, breakpoints, imgMobile, imgTablet, imgDesktop, }) {

  return (
    <picture className={ styles && styles.pictureContainer +
      ` overflow-hidden `}>
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


export function ToggleSwitch({ styles, mobileOnly, iconOn, iconOff, children }) {

    return (
      <div >
        <label id='label' className={ 
          (styles && styles.label) + 
          (mobileOnly && ` md:hidden `) +
          ` cursor-pointer `}
        >
          <input id='input' className={' hidden '} type="checkbox"/>
          <i id='off' >{iconOff}</i>
          <i id='on' className={' hidden '}>{iconOn}</i>
        </label>
        <div id='childContainer'>
          {children}
        </div>
      </div> 
    )
}
