import Brand from './Brand';
import { defaultTheme } from '@/config/index';
import FooterCol from './FooterCol';
import footerJson from '../../contents/footer';
export default function Footer({ logo, intro, contact, socials, copyright, policy }: any) {
  // console.log(defaultTheme.components?.Layout?.colorBgHeader);
  // style={{ background: defaultTheme.components?.Layout?.colorBgHeader }}
  return (
    <footer>
      {/* {footerJson.footer.map((footer, idx) => (
        <FooterCol {...footer} />
      ))} */}
      <Brand />
    </footer>
  );
}
