export interface ChatMessage {
  senderRole: 'user' | 'assistent';
  content: string;
}

export interface ChatHistoryMessage {
  messages: ChatMessage[];
}
