

export default function ToggleSwitch({ styles, mobileOnly, iconOn, iconOff, children }) {

  const on =`
    hidden `
  const input =`
    hidden `
  const label = ` cursor-pointer ` +
    (mobileOnly && ` md:hidden `) +
    (styles && styles.label)
    
    return (
      <div >
        <label id='label' className={label}>
          <input id='input' className={input} type="checkbox"/>
          <i id='off' >{iconOff}</i>
          <i id='on' className={on}>{iconOn}</i>
        </label>
        <div id='childContainer'>
          {children}
        </div>
      </div> 
    )
}
