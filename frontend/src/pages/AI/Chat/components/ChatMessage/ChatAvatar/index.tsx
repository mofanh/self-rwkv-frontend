import { Avatar } from "antd"

function ChatAvatar({
    isShow,
    icon,
    style
  }: {
    isShow: boolean
    icon: string
    style?: React.CSSProperties
  }) {
    if (!isShow) return null
    return (
      <div
        // className={styles.chatMessage_avatarCard}
        style={{
          ...style
        }}
      >
        {/* <img src={icon} alt="" /> */}
        <Avatar src={<img src={icon} alt="" />} />
      </div>
    )
  }

export default ChatAvatar;