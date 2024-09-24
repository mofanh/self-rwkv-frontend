import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import MessageCard from '../MessageCard';
import { useState } from 'react';

const RobotItem = () => {
    const [str, setStr] = useState('asdad');
    // setInterval(()=>{
    //     setStr(str+'1');
    // }, 1000);
  return (
    <Flex>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <MessageCard msg={str} loading={true} />
    </Flex>
  );
};

export default RobotItem;
