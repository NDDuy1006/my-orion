import { theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";
const { defaultAlgorithm, darkAlgorithm } = theme;


const instance: ThemeConfig = {
    algorithm: [defaultAlgorithm],
    token: {
      colorPrimary: 'rgba(170, 149, 117, 1)',
    },
    components: {
      Layout: {
        colorBgHeader: "#ffffff",
        colorBgTrigger: "#cdcdcd",
      },
      DatePicker: {
        colorPrimary: 'rgba(170, 149, 117, 1)',
        colorPrimaryBg: 'rgba(170, 149, 117, .5)'
      },

    }
}

export default instance