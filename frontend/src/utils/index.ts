import moment from 'moment';
 
export const storage = {
  get: (name: string) => {
    return localStorage.getItem(name);
  },
  set: ({ name, data }: { name: string; data: string }) => {
    localStorage.setItem(name, data);
  },
  clearItem: (name: string) => {
    localStorage.removeItem(name);
  },
  clear: () => {
    localStorage.clear();
  },
};
 
export const formatTime = (time: string) => {
  return moment(time).format('YYYY-MM-DD HH:mm:ss');
};