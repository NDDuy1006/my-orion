import { theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
const { defaultAlgorithm, darkAlgorithm } = theme;
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const instance: ThemeConfig = {
  algorithm: [defaultAlgorithm],
  token: {
    colorPrimary: '#3A6EA5',
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    
    Layout: {
      colorBgHeader: '#fff',
      colorBgTrigger: '#D9D9D9',
    },
    DatePicker: {
      colorPrimary: 'rgba(170, 149, 117, 1)',
      colorPrimaryBg: 'rgba(170, 149, 117, .5)',
    },
    Input: {
      colorBgLayout: '#282727ed'
    }

  },
};

export default instance;
