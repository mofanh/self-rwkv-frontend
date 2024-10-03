// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { login } from '@/services/auth/AuthController';
import { useEffect, useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  return {
    name,
    setName,
  };
};

export default useUser;
