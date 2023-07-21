import Link from "next/link";
import socialData from "data/socials.json";
// ------------------------------------------------------------------------------
type SocialNavProps = {
  styles: {
    socialNav: string;
    socialSvg: string;
  };
  socialArray: any[];
};
// ----------------------------------------------------------------------------
export function SocialNav({ styles, socialArray }: SocialNavProps) {
  const displaySocialIcon = (currentSocial: { name: string; path: string }) => {
    let foundSocial = { id: "", url: "", svgPath: "" };

    socialData.forEach(
      (current: { id: string; url: string; svgPath: string }) => {
        if (currentSocial.name === current.id) foundSocial = current;
      }
    );
    return (
      <Link href={foundSocial.url + currentSocial.path}>
        <svg
          className={styles.socialSvg}
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={foundSocial.svgPath} />
        </svg>
      </Link>
    );
  };
  return (
    <nav className={styles.socialNav}>
      {socialArray && socialArray.map((current) => displaySocialIcon(current))}
    </nav>
  );
}
