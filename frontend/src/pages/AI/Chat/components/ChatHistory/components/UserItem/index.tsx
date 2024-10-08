import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import MessageCard from '../MessageCard';

interface UserItemProps {
  content: string;
}

const UserItem = (props: UserItemProps) => {
  const {content} = props;
  return (
    <Flex justify="flex-end">
      <MessageCard msg={content} loading={false}/>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Flex>
  );
};

export default UserItem;
