import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex, Typography } from 'antd';
import MessageCard from '../MessageCard';
const cardStyle: React.CSSProperties = {
  width: 620,
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 273,
};

const RobotItem = () => {
  return (
    <div>
      <Flex justify="space-between">
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
        <Flex
        >
          <MessageCard />
        </Flex>
      </Flex>
    </div>
  );
};

export default RobotItem;
