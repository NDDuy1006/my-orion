import Link from 'next/link';
import React from 'react';
import footerJson from '@/contents/footer';
type Props = {
  title: string;
  links: {
    link: string;
    href: string;
  }[];
};

const FooterCol = ({ title, links }: Props) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="flex flex-col flex-wrap">
        {links?.map((link, idx) => (
          <Link className="w-fit" key={link.href} href={link.href}>
            {link.link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default FooterCol;
