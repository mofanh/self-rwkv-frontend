import { connect } from '@umijs/max';
import { Card, Input } from 'antd';
import { Component } from 'react';
import styles from './index.less';
import { xfSparkRequest } from '@/services/ai/http/xfSparkrController';

const { TextArea } = Input;

export interface InputAreaProps {
  curInput: any;
  setCurInput: (value: string) => void;
  chatHistory: any;
}

@connect(({ chatStore }) => ({
  chatStore,
}))
class InputArea extends Component {
  chatStore: any;
  dispatch: ({}) => void;
  state: { input: string };
  constructor(props: any) {
    super(props);
    this.state = {
      input: '',
    };
    const { chatStore, dispatch } = props;
    this.chatStore = chatStore;
    this.dispatch = dispatch;
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  async addUserCtx(content: string) {
    await this.dispatch({
      type: 'chatStore/addCtx',
      payload: {
        senderRole: 'user',
        content: this.state.input,
      },
    });
  }

  async addAssistantCtx(content: string) {
    await this.dispatch({
      type: 'chatStore/addCtx',
      payload: {
        senderRole: 'assistant',
        content: content,
      },
    });
  }

  async handleMessageSubmit(event: any) {
    await this.addUserCtx(event.target.value);

    this.setState({ input: '' });
    event.preventDefault();

    xfSparkRequest({
      "max_tokens": 4096,
      "top_k": 4,
      "temperature": 0.5,
      "messages": [
          {
              "role": "system",
              "content": ""
          },
          {
              "role": "user",
              "content": this.state.input,
          }
      ],
      "model": "4.0Ultra",
      // "stream": true,
    }
  ).then((res) => {
      this.addAssistantCtx(res?.choices[0].message.content);
    });
  }

  render() {
    return (
      <>
        <Card className={styles.container}>
          <TextArea
            rows={3}
            value={this.state.input}
            onChange={(e) => {
              this.setState({ input: e.target.value });
            }}
            disabled={false}
            onPressEnter={this.handleMessageSubmit}
            allowClear
          />
        </Card>
      </>
    );
  }
}

export default InputArea;
