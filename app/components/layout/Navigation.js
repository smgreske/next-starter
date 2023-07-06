import Link from 'next/link'

export default function Navigation({ styles, navLinkArray, children }) {

    return (
      <div className={styles.container}>
        <div className={styles.linksContainer}>  
          {navLinkArray && navLinkArray.map( (current) => (
          <Link 
            className={styles.navLink} 
            href={current.path}>
            {current.name}
          </Link>
          ))}   
        </div>
        {children}   
      </div>
    )
}


