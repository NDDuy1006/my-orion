import Brand from './Brand';
import FooterCol from './FooterCol';
import footerJson from '../../contents/footer';
import { FacebookIcon, InstaIcon, TwitterIcon } from '@/library';
import { Wrapper } from '@/components';
import Link from 'next/link';

// console.log(defaultTheme.components?.Layout?.colorBgHeader);
// style={{ background: defaultTheme.components?.Layout?.colorBgHeader }}

const { footer, social, icon } = footerJson;
const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="flex justify-between">
          {footer?.map((col, idx) => (
            <div key={idx}>
              <FooterCol title={col.title} links={col.links} links2={col.links2} />
            </div>
          ))}
          <div>
            <h4 className="pb-6 font-normal">{social.title}</h4>
            <div className="flex gap-8">
              <Link className="w-fit" href={social.icons.facebook}>
                <FacebookIcon className="text-Black hover:text-Blue" />
              </Link>
              <Link className="w-fit" href={social.icons.twitter}>
                <TwitterIcon className="text-Black hover:text-Blue" />
              </Link>
              <Link className="w-fit" href={social.icons.insta}>
                <InstaIcon className="text-Black hover:text-Blue" />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <Brand />
    </footer>
  );
};

export default Footer;
