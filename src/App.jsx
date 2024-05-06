import { useDispatch, useSelector } from "react-redux";
import Select from "./components/Select/Select";
import { loadMoreData } from "./slices/dataSlice";
import Card from "./components/Card/Card";

const DummyRoles = ["Backend", "FrontEnd", "FullStack", "DevOps"];

const DummyMinExp = [1, 2, 3, 4, 5];

function App() {
  const { data, isLoading, page, maxCount } = useSelector(
    (store) => store.data
  );
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(loadMoreData())}>Click</button>
      <Select filter={DummyRoles} label="Role" id="1" />
      <Select filter={DummyMinExp} label="Minimum Experience" isSingle={true} id="2" />

      <Card />
    </>
  );
}

export default App;
