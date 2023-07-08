

export default function Header({ fixed, styles, children }) {
    
  const header = styles.header +
    ' FlexCenter '

  const headerContainer = styles.headerContainer +
    ` mx-[--margin-mobile]  
      md:mx-[--margin-tablet]  
      lg:mx-[--margin-desktop]  
      max-w-[--max-width-content] `

    return (
      <header className={header}>
        <div className={headerContainer}>       
          {children}
        </div>
      </header>
    )
}
