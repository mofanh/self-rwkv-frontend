import { Button, Card, Input } from 'antd';
import React, { useRef } from 'react';
import styles from './index.less';

const { TextArea } = Input;

export interface InputAreaProps {
  curInput: any,
  setCurInput: (value: string) => void,
}

const InputArea = (props: InputAreaProps) => {
  const { curInput, setCurInput } = props;

  const handleMessageChange = event => {
    setCurInput(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.target.value = ''
  }

  return (
  <>
    <Card className={styles.container}>
      <TextArea rows={3} value={curInput} onChange={handleMessageChange} disabled={false} onPressEnter={handleMessageSubmit}/>
    </Card>
  </>
)};

export default InputArea;
