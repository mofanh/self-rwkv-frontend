import { Component } from 'react';
import { connect } from 'umi';
import InputArea from './components/InputArea';
import styles from './index.less'

@connect(({ chatStore }) => ({
  chatStore,
}))
class Chat extends Component {
  constructor(props: {}) {
    super(props);
    console.log(`Chat--`, props);
  }
  render() {
    console.log(`Chat1--`, this.props);

    return (
      <>
        {/* <Card className={styles.container}>
        <ChatHistory
          curInput={curInput}
          setCurInput={setCurInput}
          chatHistory={chatHistory}
        />
      </Card> */}
        {/* {chatHistory.getMessages()?.map((msg, index) => {
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
      })} */}
      
      <div className={styles.inputContainer}>
        <InputArea/>
      </div>
      </>
    );
  }
}

export default Chat;
