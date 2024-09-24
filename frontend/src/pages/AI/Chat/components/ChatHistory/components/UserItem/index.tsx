import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import MessageCard from '../MessageCard';

const UserItem = () => {
  return (
    <Flex justify="flex-end">
      <MessageCard msg='333' loading={false}/>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Flex>
  );
};

export default UserItem;
