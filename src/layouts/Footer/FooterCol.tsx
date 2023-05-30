import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  href: string;
  links: string[];
  key: string;
};
const footerJson = {
  footer: [
    {
      title: 'Hotels & Resorts',
      links: [
        { link: 'Weingut Rommert', href: '' },
        { link: 'Ettershaus', href: '' },
        { link: 'Huttmann', href: '' },
        { link: 'Zum Stern', href: '' },
        { link: 'Bayerischer Hof', href: '' },
        { link: 'Feldberg Am See', href: '' },
        { link: 'Weingut Rommert', href: '' },
        { link: 'Ettershaus', href: '' },
        { link: 'Huttmann', href: '' },
        { link: 'Zum Stern', href: '' },
        { link: 'Bayerischer Hof', href: '' },
        { link: 'Feldberg Am See', href: '' },
      ],
    },
    {
      title: 'About Us',

      links: [
        { link: 'About', href: '' },
        { link: 'Vision', href: '' },
        { link: 'Jobs / Careers', href: '' },
        { link: 'Values', href: '' },
        { link: 'Celebrations', href: '' },
        { link: 'Conferences', href: '' },
      ],
    },
    {
      title: 'Services',
      links: [
        { link: 'Coupon', href: '' },
        { link: 'Group Travel', href: '' },
        { link: 'Travel Insurance', href: '' },
        { link: 'Newsletter', href: '' },
        { link: 'Sun Club', href: '' },
      ],
    },
  ],
  social: {
    title: 'Stay Connected',
    icons: [
      { image: '@/assets/icons/facebook.svg', href: '' },
      { image: '@/assets/icons/twitter.svg', href: '' },
      { image: '@/assets/icons/ig.svg', href: '' },
    ],
  },
  icon: '@/assets/icons/footerIcon.svg',
};

const FooterCol = ({ title, links, href, key }: Props) => {
  return (
    // {footerJson.footer.map((footer,idx)=>(
    <div>
      <h3>{title}</h3>
      <div>
        {links.map((link, idx) => (
          <Link key={link + idx} href={href}>
            {link}
          </Link>
        ))}
      </div>
    </div>
    // ))}
  );
};

export default FooterCol;
