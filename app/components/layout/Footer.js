

export default function Header({ styles, children }) {

  const container = styles.container +
  ` mx-[--margin-mobile]  
    md:mx-[--margin-tablet]  
    lg:mx-[--margin-desktop]  
    max-w-[--max-width-content]
  `

    return (
      <footer className={styles.footer}>
        <div className={container}>
          {children}
        </div>
      </footer>
    )
}
