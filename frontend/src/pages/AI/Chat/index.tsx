import { Card } from 'antd';

import { useEffect, useState } from 'react';
import ChatHistory from './components/ChatHistory';
import InputArea from './components/InputArea';
import styles from './index.less';
import { ChatHistoryMessage, ChatMessage } from './type';
import { ChatHistoryModel } from './model';

export default function Chat() {
  const [curInput, setCurInput] = useState('');
  let chatHistory = new ChatHistoryModel('Hello, how can I help you today?');

  useEffect(() => {
    const listener = (newMessages: ChatMessage[]) => {
      // 这里可以触发组件的重新渲染
    };
    chatHistory.subscribe(listener);

    return () => {
      chatHistory.unsubscribe(listener);
    };
  }, [chatHistory]);

  chatHistory.addUserMessage('Hello! I am here to assist you');
  
  return (
    <>
      <Card className={styles.container}>
        <ChatHistory
          curInput={curInput}
          setCurInput={setCurInput}
          chatHistory={chatHistory}
        />
      </Card>
      <div className={styles.inputContainer}>
        <InputArea curInput={curInput} setCurInput={setCurInput} chatHistory={chatHistory}/>
      </div>
    </>
  );
}
