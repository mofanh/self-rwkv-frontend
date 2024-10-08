import { ChatHistoryMessage, ChatMessage } from './type';

export class ChatHistoryModel implements ChatHistoryMessage {
  messages: ChatMessage[] = [];
  private listeners: Array<(newMessages: ChatMessage[]) => void> = [];

  constructor(context: string) {
    // this.messages.push(messages);
    this.addAssistentMessage(context);
  }

  pushMessage(message: ChatMessage) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }

  addUserMessage(content: string) {
    this.pushMessage({
      senderRole: 'user',
      content,
    });
  }

  addAssistentMessage(content: string) {
    this.pushMessage({
      senderRole: 'assistent',
      content,
    });
  }

  public subscribe(listener: (newMessages: ChatMessage[]) => void) {
    this.listeners.push(listener);
  }

  public unsubscribe(listener: (newMessages: ChatMessage[]) => void) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  private notify(newMessages: ChatMessage[]) {
    this.listeners.forEach((listener) => listener(newMessages));
  }
}
