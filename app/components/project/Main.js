export default function Main({ styles, children }) {

  return (
      <main className={styles.main + ` flex justify-center `}>
        <div className={styles.mainContainer + ` 
          mx-[--margin-mobile] md:mx-[--margin-tablet] 
          lg:mx-[--margin-desktop] max-w-[--max-width-content w-full `}>
          {children}          
        </div> 
      </main>
  )
}