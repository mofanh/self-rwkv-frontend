import { connect } from '@umijs/max';
import { Card, Input } from 'antd';
import { Component } from 'react';
import styles from './index.less';

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
    console.log('InputArea--', props);
    const { chatStore, dispatch } = props;
    this.chatStore = chatStore;
    this.dispatch = dispatch;
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  async handleMessageSubmit(event: any) {
    console.log('InputArea--', event.target.value);
    // console.log('this.dispatch--', this.dispatch)
    await this.dispatch({
      type: 'chatStore/addUserCtx',
      payload: {
        senderRole: 'user',
        content: event.target.value,
      },
    });

    this.setState({ input: '' });
    event.preventDefault();
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
