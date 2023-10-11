import { counterState } from "@store/modules/counter";
import { useRecoilState } from "recoil";

export function useCounter() {
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
}
