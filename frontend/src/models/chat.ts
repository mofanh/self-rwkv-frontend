import { useState } from "react";

const chatStore = () => {
    const [name, setName] = useState();
    return {
      name,
      setName,
    };
  };
  
  export default chatStore;