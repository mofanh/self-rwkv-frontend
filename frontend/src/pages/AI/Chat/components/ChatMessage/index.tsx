import { CopyOutlined, DeleteOutlined, RedoOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useMemo, useRef } from 'react';
import ChatAvatar from './ChatAvatar';
import assistentImg from '@/assets/houseAndGreen.jpg'
import userImg from '@/assets/logo-my.jpg'
import MarkdownIt from 'markdown-it'
import styles from './index.less';

const dropdownItems = [
  {
    icon: <CopyOutlined />,
    label: '复制',
    key: 'copyout',
  },
  {
    icon: <RedoOutlined />,
    label: '重试',
    key: 'refurbish',
  },
  {
    icon: <DeleteOutlined />,
    label: '删除',
    key: 'delete',
  },
];

interface ChatMessageProps {
  position: 'left' | 'right';
  content?: string;
  status: 'pass' | 'loading' | 'error' | string;
  time: string;
  model?: string;
  onDelChatMessage?: () => void;
  onRefurbishChatMessage?: () => void;
  // pluginInfo?: PluginInfo
}

function ChatMessage(props: ChatMessageProps) {
  const {
    position,
    content,
    status,
    time,
    model,
    onDelChatMessage,
    onRefurbishChatMessage,
  } = props;

  const markdownBodyRef = useRef<HTMLDivElement>(null)

  function highlightBlock(str: string, lang: string, code: string) {
    return `<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${lang}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${lang}">${str}</code></pre>`
  }

  const mdi = new MarkdownIt({
    html: true,
    linkify: true,
    // highlight(code, language) {
    //   const validLang = !!(language && hljs.getLanguage(language))
    //   if (validLang) {
    //     const lang = language ?? ''
    //     return highlightBlock(hljs.highlight(code, { language: lang }).value, lang, code)
    //   }
    //   return highlightBlock(hljs.highlightAuto(code).value, '', code)
    // }
  })

  const renderText = useMemo(() => {
    const value = content || ''
    if (position === 'right') {
      return (
        <div ref={markdownBodyRef} className="markdown-body">
          {value}
        </div>
      )
    }
    const renderMdHtml = mdi.render(value)
    return (
      <div
        ref={markdownBodyRef}
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: renderMdHtml
        }}
      />
    )
  }, [content, position])

  return (
    <div
      className={styles.messageContainer}
      style={{
        justifyContent: position === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      {useMemo(() => {
        return (
          <ChatAvatar
            isShow={position === 'left'}
            icon={assistentImg}
            style={{ marginRight: 8 }}
          />
        );
      }, [])}
      <div>
        {/* 创建时间⌚️ */}
        <span
        className={styles.time}
          style={{
            width: '100%',
            textAlign: position === 'right' ? 'right' : 'left',
          }}
        >
          {time}
        </span>
        {/* {pluginInfo && <PluginCard {...pluginInfo} />} */}
        <div>{status === 'loading' ? <Spin /> : renderText}</div>
      </div>
      {useMemo(() => {
        return (
          <ChatAvatar
            isShow={position === 'right'}
            icon={userImg}
            style={{ marginLeft: 8 }}
          />
        );
      }, [])}
    </div>
  );
}

export default ChatMessage;
