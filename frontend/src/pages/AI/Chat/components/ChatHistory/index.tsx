import { Col, Row } from 'antd';
import RobotItem from './components/RobotItem';
import UserItem from './components/UserItem';

const ChatHistory = () => {

  return (
    <>
      <div>
        <RobotItem />
      </div>
      <div>
          <UserItem />
      </div>
    </>
  );
};

export default ChatHistory;
