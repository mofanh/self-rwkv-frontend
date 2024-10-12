import { Component } from 'react';
import { connect } from 'umi';
import InputArea from './components/InputArea';
import styles from './index.less'
import ChatMessage from './components/ChatMessage';
import { timestamp2string } from './utils';
import { xfSparkRequest } from '@/services/ai/http/xfSparkrController';

xfSparkRequest({
  model: "spark4.0",
  user: "12346",
  messages: [
        {
          role: "system",
          content: "你是知识渊博的助理"
        },
        {
          role: "user",
          content: "你好，讯飞星火"
        }
    ],
});

@connect(({ chatStore }) => ({
  chatStore,
}))
class Chat extends Component {
  chatStore: any;
  dispatch: ({}) => void;
  constructor(props: { chatStore?: any; dispatch?: any; }) {
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
    console.log('this.props--', this.props)
    return (
      <>
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

        <div className={styles.inputContainer}>
          <InputArea />
        </div>
      </>
    );
  }
}

export default Chat;
