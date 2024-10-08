import { Button, Card, Input } from 'antd';
import React, { useRef } from 'react';
import styles from './index.less';

const { TextArea } = Input;

export interface InputAreaProps {
  curInput: any,
  setCurInput: (value: string) => void,
  chatHistory:any,
}

const InputArea = (props: InputAreaProps) => {
  const { curInput, setCurInput, chatHistory } = props;

  const handleMessageChange = (event: any) => {
    setCurInput(event.target.value);
  };

  chatHistory.addUserMessage('456564645');
  chatHistory.addUserMessage('数据的反馈和会计师');

  const handleMessageSubmit = (event: any) => {
    event.preventDefault();
    chatHistory.addUserMessage('Hello! I am here to assist you');
    event.target.value = ''
    setCurInput('');
  }



  console.log('chatHistory--', chatHistory)

  return (
  <>
    <Card className={styles.container}>
      <TextArea rows={3} value={curInput} onChange={handleMessageChange} disabled={false} onPressEnter={handleMessageSubmit}/>
      <Button onClick={() => {
        chatHistory.addUserMessage('Hello! I am here to assist you');
      }}>button</Button>
    </Card>
  </>
)};

export default InputArea;
