import { useEffect, useState } from 'react';

interface IProps {
  time: number;
  onEnd: Function;
}

const Countdown = (props: IProps) => {
  const { time, onEnd } = props;
  const [count, setCount] = useState(time || 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          clearInterval(timer);
          onEnd && onEnd();
          return count;
        }
        return count - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count, onEnd]);

  return <div>{count}</div>;
};

export default Countdown;
