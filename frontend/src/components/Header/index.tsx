import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useAntdConfig, useAntdConfigSetter } from '@umijs/max';
import { Switch, theme } from 'antd';
import { useEffect } from 'react';

const Header = () => {
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const setAntdConfig = useAntdConfigSetter();
  const antdConfig = useAntdConfig();
  const curTheme = localStorage.getItem('antdConfig');
  useEffect(() =>{
    setAntdConfig({
      theme: {
        algorithm: [curTheme == 'black' ? darkAlgorithm : defaultAlgorithm],
      },
    });
  }, [curTheme]);
  return (
    <Switch
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
      defaultChecked={curTheme == 'black'}
      onChange={(checked) => {
        setAntdConfig({
          theme: {
            algorithm: [checked ? darkAlgorithm : defaultAlgorithm],
          },
        });
        localStorage.setItem('antdConfig', checked ? 'black' : 'white');
      }}
    />
  );
};

export default Header;
