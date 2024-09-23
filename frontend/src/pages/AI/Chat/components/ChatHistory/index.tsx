import { Col, Row } from 'antd';
import RobotItem from './components/RobotItem';

const ChatHistory = () => {
  return (
    <>
      <Row>
        <RobotItem />
      </Row>
      <Row>
      <RobotItem />
      </Row>
    </>
  );
};

export default ChatHistory;
