import { Card } from 'antd';

import ChatHistory from './components/ChatHistory';
import InputArea from './components/InputArea';
import styles from './index.less';
import { useState } from 'react';

export default function Chat() {
  const [curInput, setCurInput] = useState('');
  return (
    <>
      <Card className={styles.container}>
        <ChatHistory curInput={curInput} setCurInput={setCurInput} history={[]}/>
      </Card>
      <div className={styles.inputContainer}>
          <InputArea curInput={curInput} setCurInput={setCurInput} />
      </div>
    </>
  );
}
