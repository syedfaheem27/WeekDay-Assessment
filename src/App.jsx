import { useDispatch, useSelector } from "react-redux";
import Select from "./components/Select/Select";
import { loadMoreData } from "./slices/dataSlice";
import Card from "./components/Card/Card";
/*
Filters that we need to implement

Role - jobRole(key in the incoming data)
Min Experience - minExp
Min Base Salary - minJdSalary
Location - location
*/


const DummyRoles = ["Backend", "FrontEnd", "FullStack", "DevOps"];

const DummyMinExp = [1, 2, 3, 4, 5];

const DummyBaseSalary = ['1L', '2L', '3L']

const DummyLocations = ['Remote', "Hybrid", "In-Office"]

function App() {
  const { data, isLoading, page, maxCount } = useSelector(
    (store) => store.data
  );
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(loadMoreData())}>Click</button>
      <Select filter={DummyRoles} label="Role" filterKey="jobRole" />
      <Select filter={DummyMinExp} label="Minimum Experience" isSingle={true} filterKey="minExp" />
      <Select filter={DummyBaseSalary} label="Minimum Base Salary" isSingle={true} filterKey="minJdSalary" />
      <Select filter={DummyLocations} label="Location" filterKey="location" />


      <Card />
    </>
  );
}

export default App;
