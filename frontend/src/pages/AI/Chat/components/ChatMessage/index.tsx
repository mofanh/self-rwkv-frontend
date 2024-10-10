import { CopyOutlined, DeleteOutlined, RedoOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useMemo } from 'react';
import ChatAvatar from './ChatAvatar';
import assistentImg from '@/assets/houseAndGreen.jpg'
import userImg from '@/assets/logo-my.jpg'
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
        <div>{status === 'loading' ? <Spin /> : content}</div>
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
