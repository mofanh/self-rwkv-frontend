export interface ChatState {
  // 聊天对话
  chats: Array<ChatsInfo>;
  // 当前选择的会话id
  selectChatId: string | number;
  // 新增一个对话
  addChat: (value?: { persona_id?: number | string; name?: string }) => void;
  // 删除一个对话
  delChat: (id: string | number) => void;
  // 清空所有对话
  clearChats: () => void;
  // 改变选择会话ID
  changeSelectChatId: (id: string | number) => void;
  // 给对话添加数据
  setChatInfo: (
    id: string | number,
    data?: ChatContent,
    info?: ChatsInfo | { [key: string]: any },
  ) => void;
  // 修改对话数据
  setChatDataInfo: (
    id: string | number,
    messageId: string | number,
    info?: ChatContent | { [key: string]: any },
  ) => void;
  // 清理当前会话
  clearChatMessage: (id: string | number) => void;
  // 删除某条消息
  delChatMessage: (id: string | number, messageId: string | number) => void;
  // 重置
  changeChatMessage: (data: Array<ChatsInfo>) => void;
}

export interface ChatsInfo {
  path: string;
  id: string;
  name: string;
  persona_id?: string | number;
  data: Array<ChatContent>;
}

export interface ChatContent {
  id: string;
  text: string;
  dateTime: string;
  status: 'pass' | 'loading' | 'error';
  role: 'assistant' | 'user' | string;
  persona_id?: string | number;
  // requestOptions: RequestChatOptions,
  plugin_id?: string | number;
  // plugin_info?: PluginInfo
}
