import { useEffect, useState, useRef } from 'react';

const useWebSocket = (url) => {
  const [messages, setMessages] = useState([{ msg: 'This subject is completed' }]);
  const ws = useRef(null);
  const retryInterval = useRef(null);

  const connect = () => {
    ws.current = new WebSocket(url);

    ws.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, { msg: event.data }]);
    };

    ws.current.onopen = () => {
      console.log('WebSocket connection opened');
      if (retryInterval.current) {
        clearInterval(retryInterval.current);
        retryInterval.current = null;
      }
    };

    ws.current.onclose = () => {
      console.log('WebSocket connection closed, retrying in 3 seconds');
      if (!retryInterval.current) {
        retryInterval.current = setInterval(() => {
          console.log('Attempting to reconnect...');
          connect();
        }, 3000);
      }
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error', error);
    };
  };

  useEffect(() => {
    connect();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
      if (retryInterval.current) {
        clearInterval(retryInterval.current);
      }
    };
  }, [url]);

  return { messages };
};

export default useWebSocket;
