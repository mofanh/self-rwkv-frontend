import { Button, Card } from 'antd';

const { Meta } = Card;

const MessageCard = () => {
  return (
    <Card hoverable>
      <p>
        这里是动态内容的主体部分...这里是动态内容的主体部分这里是动态内容的主体部分这里是动态内容的主体部分
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          <Button type="dashed" onClick={handleCopy}>
            复制
          </Button>
          <Button type="dashed" onClick={() => {}}>
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
          <Button type="dashed" onClick={() => {}}>
            点踩
          </Button>
        </span>
      </div>
    </Card>
  );
};

const handleCopy = () => {
  // 复制逻辑
  console.log('复制');
};

const handleShare = () => {
  // 分享逻辑
  console.log('分享');
};

const handleLike = () => {
  // 点赞逻辑
  console.log('点赞');
};

export default MessageCard;
