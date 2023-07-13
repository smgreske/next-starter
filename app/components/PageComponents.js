export function Main({ styles, children }) {

  return (
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          {children}          
        </div> 
      </main>
  )
}