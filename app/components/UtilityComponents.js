

export function PictureContainer({ styles, altText, breakpoints, imgMobile, imgTablet, imgDesktop, }) {

  return (
    <picture className={ styles && styles.picture +
      ` overflow-hidden `}>
      {imgDesktop && <source 
        srcSet={imgDesktop.src}
        media={`(min-width: ${breakpoints.desktop})`}/>}
      {imgTablet && <source
        srcSet={imgTablet.src}
        media={`(min-width: ${breakpoints.tablet})`}/>}
      <img className={ styles && styles.image} src={imgMobile.src} alt={altText}/>   
    </picture>
)
}


export function ToggleSwitch({ styles, mobileOnly, iconOn, iconOff, children }) {

    return (
      <div >
        <label id='label' 
          className={ 
            (styles && styles.label) + 
            (mobileOnly && ` md:hidden `) +
            ` cursor-pointer `}>
          <input id='input' className={' peer hidden '} type="checkbox"/>
          <i className={' peer-checked:hidden '} >{iconOff}</i>
          <i className={' peer-checked:visible hidden '}>{iconOn}</i>
        </label>
        <div id='childContainer'>
          {children}
        </div>
      </div> 
    )
}
