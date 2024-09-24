import { Button, Card } from 'antd';

interface MessageProps {
  msg: string;
  loading?: boolean;
}

const MessageCard = (props: MessageProps) => {
  const { msg, loading } = props;
  return (
    <Card
      hoverable
      style={{
        width: 'fit-content', // 让宽度适应内容
      }}
    >
      <p>{msg}</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {loading ? (
          <div>
            <span>
              <Button type="dashed" onClick={handleCopy}>
                复制
              </Button>
              <Button type="dashed" onClick={handleRetry}>
                再试一次
              </Button>
              <Button type="dashed" onClick={handleShare}>
                分享
              </Button>
            </span>
            <span>
              <Button type="dashed" onClick={handleLike}>
                点赞
              </Button>
              <Button type="dashed" onClick={handleDislike}>
                点踩
              </Button>
            </span>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

// 定义函数
const handleCopy = () => {
  console.log('复制');
};

const handleRetry = () => {
  console.log('再试一次');
};

const handleShare = () => {
  console.log('分享');
};

const handleLike = () => {
  console.log('点赞');
};

const handleDislike = () => {
  console.log('点踩');
};

export default MessageCard;
