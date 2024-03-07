import { decrement, increment } from "@/redux/reducers/counter";
import { useAppDispatch } from "@/utils/hook/useAppDispatch";
import { useAppSelector } from "@/utils/hook/useAppSelector";

export default function Home() {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector((state) => state.counter)
  return (
    <>
      <h1 className="text-5xl text-center text-white mb-6">Hello</h1>
      <div className="flex items-center justify-center gap-4">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{value}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
}
