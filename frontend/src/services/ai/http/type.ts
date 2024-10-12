declare namespace chatAPI {
    interface Message{
        role: string;
        content: string;
    }
    interface xfSparkRequestInfo {
        model: string;
        user: string;
        messages: Array<Message>;
      }
}