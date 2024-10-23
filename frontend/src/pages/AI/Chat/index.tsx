import { Component } from 'react';
import { connect } from 'umi';
import ChatMessage from './components/ChatMessage';
import InputArea from './components/InputArea';
import styles from './index.less';
import { timestamp2string } from './utils';

@connect(({ chatStore }) => ({
  chatStore,
}))
class Chat extends Component {
  chatStore: any;
  dispatch: ({}) => void;
  constructor(props: { chatStore?: any; dispatch?: any }) {
    super(props);
    const { chatStore, dispatch } = props;
    this.chatStore = chatStore;
    this.dispatch = dispatch;
    dispatch({
      type: 'chatStore/init',
      payload: 'hello world',
    });
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.chatContainer}>
          {this.chatStore.chats?.map((msg, index) => {
            const { senderRole, content, time } = msg;
            return (
              <ChatMessage
                key={index}
                position={senderRole === 'user' ? 'right' : 'left'}
                content={content}
                status="pass"
                time={timestamp2string(time)}
              />
            );
          })}
        </div>
        <div className={styles.inputContainer}>
          <InputArea />
        </div>
      </div>
    );
  }
}

export default Chat;
