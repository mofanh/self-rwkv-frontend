import { Card } from 'antd';

import ChatHistory from './components/ChatHistory';
import styles from './index.less';

export default function Chat() {
  return (
    <Card className={styles.container}>
      <ChatHistory />
    </Card>
  );
}
