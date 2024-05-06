import { useDispatch, useSelector } from "react-redux"
import Select from "./components/Select/Select"
import { loadMoreData } from "./slices/dataSlice"
import Card from "./components/Card/Card";


function App() {
  const { data, isLoading, page, maxCount } = useSelector(store => store.data)
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(loadMoreData())}>Click</button>
      <Select />
      <Card />
    </>
  )
}

export default App
