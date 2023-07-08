import Link from 'next/link'

export default function Navigation({ styles, navLinkArray, children }) {

  const navContainer = styles.navContainer
  const navLinksContainer = styles.navLinksContainer
  const navLink = styles.navLink

    return (
      <div className={navContainer}>
        <div className={navLinksContainer}>  
          {navLinkArray && navLinkArray.map( (current) => (
          <Link 
            className={navLink} 
            href={current.path}>
            {current.name}
          </Link>
          ))}   
        </div>
        {children}   
      </div>
    )
}


