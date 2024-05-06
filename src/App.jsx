import { useDispatch, useSelector } from "react-redux"
import Select from "./components/Select/Select"
import { loadMoreData } from "./slices/dataSlice"


function App() {
  const { data, isLoading, page, maxCount } = useSelector(store => store.data)
  const dispatch = useDispatch();

  console.log(data, isLoading, page, maxCount)
  return (
    <>
      <button onClick={() => dispatch(loadMoreData())}>Click</button>
      <Select />
    </>
  )
}

export default App
