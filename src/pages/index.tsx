import { decrement, increment } from '@/redux/reducers/counter'
import { useAppDispatch } from '@/utils/hook/useAppDispatch'
import { useAppSelector } from '@/utils/hook/useAppSelector'
import useTheme from '@/utils/hook/useTheme'

export default function Home() {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector((state) => state.counter)
  const { theme, handleSelectTheme } = useTheme()

  const handleOnchangeSelect = (value: string) => {
    handleSelectTheme(value)
  }
  return (
    <>
      <h1 className='mb-6 text-center text-5xl'>Hello</h1>
      <div className='flex items-center justify-center'>
        <select
          className='text-black'
          onChange={(e) => handleOnchangeSelect(e.target.value)}
          value={theme}
        >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          <option value='system'>System</option>
        </select>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{value}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  )
}
