function componentProps() {
return (
<>

<Footer styles={{
footer:' ',
footerContainer:' mx-[XXXXX] md:mx-[XXXXX] lg:mx-[XXXXX] max-w-[XXXXX] '}}> 
  XXXXX
</Footer>


<Header styles={{
header:' ',
headerContainer:' mx-[XXXXX] md:mx-[XXXXX] lg:mx-[XXXXX] max-w-[XXXXX] '}}>
  XXXXX
</Header>

<Main styles={{
main:`  `,
mainContainer:' mx-[XXXXX] md:mx-[XXXXX] lg:mx-[XXXXX] max-w-[XXXXX] '}}>
  xxxxx
</Main>


<InputEmail styles={{
input:' ',
error:' '}}
name='XXXXX'      
required={XXXXX}
emptyMessage='XXXXX'
invalidMessage='XXXXX'
register={register}  formState={formState}/>


<InputText styles={{
input:' ',
error:' '}}
name='XXXXX'
required={XXXXX}
emptyMessage='XXXXX'
validatorType='XXXXX'
validatorValue={XXXXX}
invalidMessage='XXXXX'             
register={register}  formState={formState}/>


<Navigation styles={{
navContainer:'flex flex-col md:flex-row items-center gap-[XXXXX] ',
navLinksContainer:'flex flex-col md:flex-row gap-[XXXXX] ',
navLink:' '}}
navLinkArray={[
  { name: 'XXXXX', path: '/' },
  { name: 'XXXXX', path: '/' },
  { name: 'XXXXX', path: '/' }]}>
    XXXXX
</Navigation>


<PictureContainer styles={{
picture:' ',
image:' '}}
breakpoints={breakpoints}
imgMobile={XXXXX} 
imgTablet={XXXXX}
imgDesktop={XXXXX}
altText={'XXXXX'} />


<SocialLinks
socialArray={[
  { name: 'XXXXX', path: '/' },
  { name: 'XXXXX', path: '/' },
  { name: 'XXXXX', path: '/' }]}/>


<ToggleSwitch
styles={toggleSwitchStyles}
mobileOnly={true}
iconOn='on'
iconOff='off'>
  XXXXX
</ToggleSwitch>


</>
)
}