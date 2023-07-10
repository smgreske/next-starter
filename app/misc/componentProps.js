function componentProps() {
return (
<>

<Footer // 
styles={stylesFooter} 
>
  *
</Footer>

<Header 
styles={stylesHeader}
fixed={false}>
  *
</Header>

<InputEmail 
styles={stylesInput}
name=''      
required={true}
emptyMessage=''
invalidMessage=''
register={register}  formState={formState}
/>

<InputText 
styles={stylesInput}
name=''
required={true}
emptyMessage=''
validatorType=''
validatorValue={1}
invalidMessage=''             
register={register}  formState={formState}
/>

<Navigation 
styles={navigationStyles}
navLinkArray={navLinkArray}>
    *
</Navigation>

<PictureContainer 
styles={stylesPictureContainer}
imgMobile={imgMobile} 
imgTablet={imgTablet}
imgDesktop={imgDesktop}
altText={'alt text'} 
/>


<SocialLinks
socialArray={socialArray}/>    

<ToggleSwitch
styles={toggleSwitchStyles}
mobileOnly={true}
iconOn='on'
iconOff='off'>
  *
</ToggleSwitch>
</>
)
}