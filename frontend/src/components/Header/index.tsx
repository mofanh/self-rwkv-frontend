import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useAntdConfig, useAntdConfigSetter } from '@umijs/max';
import { Switch, theme } from 'antd';

const Header = () => {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const setAntdConfig = useAntdConfigSetter();
  const antdConfig = useAntdConfig();
  return (
    <Switch
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
      defaultChecked={false}
      onChange={(checked) => {
        setAntdConfig({
          theme: {
            algorithm: [checked ? darkAlgorithm : defaultAlgorithm],
          },
        });
      }}
    />
  );
};

export default Header;
