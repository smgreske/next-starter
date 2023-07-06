export default function Main({ styles, children }) {

  const mainContainer = styles.mainContainer + `
    mx-[--margin-mobile]  
    md:mx-[--margin-tablet]  
    lg:mx-[--margin-desktop]  
    max-w-[--max-width-content]
    w-full 
  `
  const main = styles.main + `
    flex justify-center
  `
  
  return (
      <main className={main}>
        <div className={mainContainer}>
          {children}          
        </div> 
      </main>
  )
}