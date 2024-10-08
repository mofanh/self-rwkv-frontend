import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import MessageCard from '../MessageCard';
import { useState } from 'react';

interface RobotItemProps {
  content: string;
}

const RobotItem = (props: RobotItemProps) => {
  const { content } = props;
  return (
    <Flex>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <MessageCard msg={content} loading={true} />
    </Flex>
  );
};

export default RobotItem;
