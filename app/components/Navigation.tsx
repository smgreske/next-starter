import Link from "next/link";
// ----------------------------------------------------------------------
type NavigationProps = {
  styles: {
    navContainer: string;
    navLinksContainer: string;
    navLink: string;
  };
  navLinkArray: any;
  children?: any;
};
// ---------------------------------------------------------------------
export function Navigation({
  styles,
  navLinkArray,
  children,
}: NavigationProps) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLinksContainer}>
        {navLinkArray &&
          navLinkArray.map((current: { name: string; path: string }) => (
            <Link className={styles.navLink} href={current.path}>
              {current.name}
            </Link>
          ))}
      </div>
      {children}
    </div>
  );
}
