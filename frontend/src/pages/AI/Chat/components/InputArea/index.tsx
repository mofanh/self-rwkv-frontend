import { xfSparkRequest } from '@/services/ai/http/xfSparkrController';
import { connect, useRequest } from '@umijs/max';
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

  async handleMessageSubmit(e: any) {
    if (e.key === 'Enter' && e.keyCode === 13 && e.shiftKey) {
      // === 无操作 ===
    } else if (e.key === 'Enter' && e.keyCode === 13) {
      // if (!props.disabled) {
      //   props?.onSend?.(prompt)
      //   setPrompt('')
      // }
      await this.addUserCtx(e.target.value);

      this.setState({ input: '' });
      e.preventDefault();
  
      xfSparkRequest({
        max_tokens: 4096,
        top_k: 4,
        temperature: 0.5,
        messages: [
          {
            role: 'system',
            content: '',
          },
          {
            role: 'user',
            content: this.state.input,
          },
        ],
        model: '4.0Ultra',
        // "stream": true,
      }).then((res) => {
        this.addAssistantCtx(res?.choices[0].message.content);
      });
      e.preventDefault() //禁止回车的默认换行
    }

    // fetch('/spark/chat/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer nPLgqzEHEtEjZcnsDKdS:mZIvrDDeVfZRpYejdKau',
    //   },
    //   body: JSON.stringify({
    //     max_tokens: 4096,
    //     top_k: 4,
    //     temperature: 0.5,
    //     messages: [
    //       {
    //         role: 'system',
    //         content: '',
    //       },
    //       {
    //         role: 'user',
    //         content: this.state.input,
    //       },
    //     ],
    //     model: '4.0Ultra',
    //     stream: true,
    //   }), // 将参数对象转换为 JSON 字符串
    // }).then(async (result) => {
    //   const reader = result.body.getReader(); // 创建读取器
    //   const textDecoder = new TextDecoder(); // 创建解码器
    //   while (true) {
    //     // 循环读取内容
    //     /* 读取其中一部分内容 done 是否读取完成， value 读取到的内容 */
    //     const { done, value } = (await reader?.read()) || {}
    //     if (done) {
    //       return;
    //     }
    //     const texts = textDecoder.decode(value); // 利用解码器把数据解析成字符串
    //     // for (let i = 0; i < texts.length; i++) {
    //     //   const { dateTime, role, content, segment, pluginInfo } = texts[i]
    //     //   console.log('content--', content)
    //     // }
    //     console.log(texts); // 这时候str就是服务器返回的内容
    //   }
    // });
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
