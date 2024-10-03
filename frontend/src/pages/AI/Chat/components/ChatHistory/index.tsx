import { Col, Row } from 'antd';
import RobotItem from './components/RobotItem';
import UserItem from './components/UserItem';
import { InputAreaProps } from '../InputArea';

interface ChatHistoryProps extends InputAreaProps {
  history: string[];
}

const ChatHistory = (props: ChatHistoryProps) => {
  const { curInput, setCurInput, history } = props;
  return (
    <>
      <div>
        <RobotItem />
      </div>
      <div>
          <UserItem curInput={curInput} />
      </div>
    </>
  );
};

export default ChatHistory;
