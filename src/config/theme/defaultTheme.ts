import { theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";
const { defaultAlgorithm, darkAlgorithm } = theme;


const instance: ThemeConfig = {
    algorithm: [defaultAlgorithm],
    token: {
      colorPrimary: '#00b96b',
    },
    components: {
      Layout: {
        colorBgHeader: "#ffffff",
        colorBgTrigger: "#cdcdcd",
      },
      DatePicker: {
        colorBorderBg: '#00b96b',
        
        
      },

    }
}

export default instance