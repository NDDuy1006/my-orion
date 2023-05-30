import Link from 'next/link';
import React from 'react';
import footerJson from '@/contents/footer';
import { ChervRightIcon } from '@/library';
type Props = {
  title: string;
  links: {
    link: string;
    href: string;
  }[];
  links2?: {
    link: string;
    href: string;
  }[];
};

const FooterCol = ({ title, links, links2 }: Props) => {
  return (
    <>
      <h4 className="pb-6 font-normal">{title}</h4>
      <div className="flex flex-row flex-wrap gap-8">
        <div className="felx flex-col">
          {links?.map((link) => (
            <div key={link.href} className="flex items-center gap-4">
              <ChervRightIcon />
              <Link className="w-fit text-Black hover:text-Blue" href={link.href}>
                {link.link}
              </Link>
            </div>
          ))}
        </div>
        <div className="felx flex-col">
          {links2 &&
            links2?.map((link) => (
              <div key={link.href} className="flex items-center gap-4 alo">
                <ChervRightIcon />
                <Link className="w-fit text-Black hover:text-Blue" href={link.href}>
                  {link.link}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FooterCol;
