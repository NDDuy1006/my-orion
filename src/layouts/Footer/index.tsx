import Brand from './Brand';
import { defaultTheme } from '@/config/index';
import FooterCol from './FooterCol';
import footerJson from '../../contents/footer';

// console.log(defaultTheme.components?.Layout?.colorBgHeader);
// style={{ background: defaultTheme.components?.Layout?.colorBgHeader }}

const { footer, social, icon } = footerJson;
const Footer = () => {
  return (
    <footer>
      <div className="flex gap-32">
        {footer?.map((col, idx) => (
          <div key={idx}>
            <FooterCol title={col.title} links={col.links} />
          </div>
        ))}
        <div>
          <h3>{social.title}</h3>
          <div></div>
        </div>
      </div>
      <Brand />
    </footer>
  );
};

export default Footer;
