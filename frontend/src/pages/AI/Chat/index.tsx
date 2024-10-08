import { Card } from 'antd';

import { useEffect, useState } from 'react';
import ChatHistory from './components/ChatHistory';
import InputArea from './components/InputArea';
import styles from './index.less';
import { ChatHistoryModel } from './model';
import ChatMessage from './components/ChatMessage';

export default function Chat() {
  const [curInput, setCurInput] = useState('');
  const chatHistory = new ChatHistoryModel('Hello, how can I help you today?');
  chatHistory.addUserMessage('Hello! I am here to assist you');
  
  return (
    <>
      {/* <Card className={styles.container}>
        <ChatHistory
          curInput={curInput}
          setCurInput={setCurInput}
          chatHistory={chatHistory}
        />
      </Card> */}
      {chatHistory.getMessages()?.map((msg, index) => {
        console.log('msg--', msg)
        const {senderRole, content} = msg;
        return (
          <ChatMessage
            key={index}
            position={senderRole === 'assistent' ? 'left' : 'right'}
            content={content}
            status="pass"
            time="12:34 PM"
          />
        );
      })}
      
      <div className={styles.inputContainer}>
        <InputArea curInput={curInput} setCurInput={setCurInput} chatHistory={chatHistory}/>
      </div>
    </>
  );
}
