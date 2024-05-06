import { useDispatch, useSelector } from "react-redux";
import Select from "./components/Select/Select";
import { increasePageNum, loadMoreData } from "./slices/dataSlice";
import Card from "./components/Card/Card";
import CardWrapper from "./components/Card/CardWrapper";
import { useEffect, useRef } from "react";
import { useInfiniteLoad } from "./hooks/useInfiniteLoad";
/*
Filters that we need to implement

Role - jobRole(key in the incoming data)
Min Experience - minExp
Min Base Salary - minJdSalary
Location - location
*/

const DummyRoles = ["Backend", "FrontEnd", "FullStack", "DevOps"];

const DummyMinExp = [1, 2, 3, 4, 5];

const DummyBaseSalary = ["1L", "2L", "3L"];

const DummyLocations = ["Remote", "Hybrid", "In-Office"];

function App() {
  const { data, isLoading, page, maxCount } = useSelector(
    (store) => store.data
  );
  const dispatch = useDispatch();

  const ref = useRef(null);

  const handlePageIncrease = () => {
    if (Math.ceil(maxCount / 10) === page) return;
    dispatch(increasePageNum());
  };

  /*
  Keeps watching whether footer intersected with the viewport
  If yes - invoke the callback which increases pageNum
  */
  useInfiniteLoad(ref, data, handlePageIncrease);

  /*
  When the page number changes - we load more data
  */
  useEffect(() => {
    dispatch(loadMoreData(page));
  }, [page]);

  return (
    <>
      <Select filter={DummyRoles} label="Role" filterKey="jobRole" />
      <Select
        filter={DummyMinExp}
        label="Minimum Experience"
        isSingle={true}
        filterKey="minExp"
      />
      <Select
        filter={DummyBaseSalary}
        label="Minimum Base Salary"
        isSingle={true}
        filterKey="minJdSalary"
      />
      <Select filter={DummyLocations} label="Location" filterKey="location" />

      <CardWrapper>

        {data.map((job, index) => (
          <Card key={index} data={job} />
        ))}
        {
          isLoading && <h1>Loading...</h1>
        }
      </CardWrapper>

      {/*This will hold as a trigger for infinte loading*/}
      <footer
        ref={ref}
        style={{
          margin: "32px",
          border: "1px solid red",
          height: "120px",
        }}
      ></footer>
    </>
  );
}

export default App;
