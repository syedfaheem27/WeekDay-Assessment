import { useDispatch, useSelector } from "react-redux";
import Select from "./components/Select/Select";
import { increasePageNum, loadMoreData } from "./slices/dataSlice";
import Card from "./components/Card/Card";
import CardWrapper from "./components/Card/CardWrapper";
import { useEffect, useRef } from "react";
import { useInfiniteLoad } from "./hooks/useInfiniteLoad";
import { Experience, Location, MinBaseSalary, Roles } from "./helpers/filters";

/*
Filters that we need to implement

Role - jobRole(key in the incoming data)
Min Experience - minExp
Min Base Salary - minJdSalary
Location - location
*/


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
      <Select filter={Roles} label="Roles" filterKey="jobRole" />
      <Select
        filter={Experience}
        label="Experience"
        isSingle={true}
        filterKey="minExp"
      />
      <Select
        filter={MinBaseSalary}
        label="MinBaseSalary"
        isSingle={true}
        filterKey="minJdSalary"
      />
      <Select filter={Location} label="Location" filterKey="location" />

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
