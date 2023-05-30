import Brand from './Brand';
import { defaultTheme } from '@/config/index';
import FooterCol from './FooterCol';
import footerJson from '../../contents/footer';

// console.log(defaultTheme.components?.Layout?.colorBgHeader);
// style={{ background: defaultTheme.components?.Layout?.colorBgHeader }}

// const links = [
//   { link: 'Weingut Rommert', href: '' },
//   { link: 'Ettershaus', href: '#' },
//   { link: 'Huttmann', href: '' },
//   { link: 'Zum Stern', href: '' },
//   { link: 'Bayerischer Hof', href: '' },
//   { link: 'Feldberg Am See', href: '' },
//   { link: 'Weingut Rommert', href: '' },
//   { link: 'Ettershaus', href: '/' },
//   { link: 'Huttmann', href: '' },
//   { link: 'Zum Stern', href: '' },
//   { link: 'Bayerischer Hof', href: '' },
//   { link: 'Feldberg Am See', href: '' },
// ];

const Footer = () => {
  return (
    <footer>
      <div className="flex gap-32">
        {footerJson.footer?.map((col, idx) => (
          <div key={idx}>
            <FooterCol title={col.title} links={col.links} />
          </div>
        ))}
        <div></div>
      </div>
      <Brand />
    </footer>
  );
};

export default Footer;
