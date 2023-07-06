

export default function Header({ fixed, styles, children }) {
    
  const header = styles.header +    
    (fixed && ' fixed w-full top-0')

  const container = styles.container +
    ` mx-[--margin-mobile]  
      md:mx-[--margin-tablet]  
      lg:mx-[--margin-desktop]  
      max-w-[--max-width-content]
    `

    return (
      <header className={header}>
        <div className={container}>       
          {children}
        </div>
      </header>
    )
}
