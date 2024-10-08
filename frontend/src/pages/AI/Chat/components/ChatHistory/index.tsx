import { useEffect } from 'react';
import { ChatHistoryMessage } from '../../type';
import { InputAreaProps } from '../InputArea';
import RobotItem from './components/RobotItem';
import UserItem from './components/UserItem';
import { ChatHistoryModel } from '../../model';

interface ChatHistoryProps extends InputAreaProps {
  chatHistory: ChatHistoryModel;
}

const ChatHistory = (props: ChatHistoryProps) => {
  const { curInput, setCurInput, chatHistory } = props;
  return (
    <>{chatHistory.messages.map((message, index) => {
      return message.senderRole === 'user' ? (
        <UserItem key={index} content={message.content} />
      ) : (
        <RobotItem key={index} content={message.content} />
      );
    })}</>
  );
};

export default ChatHistory;
