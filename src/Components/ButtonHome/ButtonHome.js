import React from 'react';
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu } from 'antd';

const onMenuClick = (e) => {
    console.log('click', e);
  };

const menu = (
    <Menu
      onClick={onMenuClick}
      items={[
        {
          key: '1',
          label: '1st item',
        }
      ]}
    />
  );

  const ButtonLogin = () => (
    <>
      <Button type="primary">Login</Button>
    </>
  );
  
  export default ButtonLogin;