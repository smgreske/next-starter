

export default function Footer({ styles, children }) {

  const footer = styles.footer +
  ' FlexCenter ' 

  const footerContainer = styles.footerContainer +
  ` mx-[--margin-mobile]  
    md:mx-[--margin-tablet]  
    lg:mx-[--margin-desktop]  
    max-w-[--max-width-content] `

    return (
      <footer className={footer}>
        <div className={footerContainer}>
          {children}
        </div>
      </footer>
    )
}
