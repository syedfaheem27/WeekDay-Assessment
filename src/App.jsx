import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "./components/Select/Select";
import { increasePageNum, loadMoreData } from "./slices/dataSlice";
import Card from "./components/Card/Card";
import CardWrapper from "./components/Card/CardWrapper";
import Spinner from './components/Spinner/Spinner'
import { useInfiniteLoad } from "./hooks/useInfiniteLoad";
import { Experience, Location, MinBaseSalary, Roles } from "./helpers/filters";

import { filterData } from "./helpers/filterData"
import SideBar from "./components/SideBar/SideBar";
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

  const { filters } = useSelector(store => store.filters)


  const dispatch = useDispatch();

  const ref = useRef(null);

  /* The maximum page number */
  const MAX_PAGE = Math.ceil(maxCount / 10);

  /*Cache the values returned by the function */
  const filteredData = useMemo(() => filterData(data, filters), [data, filters])

  const handlePageIncrease = () => {
    if (Math.ceil(maxCount / 10) === page) return;
    dispatch(increasePageNum());
  };

  /*
  Keeps watching whether footer intersected with the viewport
  If yes - invoke the callback which increases pageNum
  */
  /*
    Instead of data- need to pass the filtered data,
    because the filtered data length is zero, the infinite 
    loading should stop. If not - data will be loaded endlessly
  */
  useInfiniteLoad(ref, filteredData, handlePageIncrease, page, MAX_PAGE);

  /*
  When the page number changes - we load more data
  */
  useEffect(() => {
    dispatch(loadMoreData(page));
  }, [page]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '200px 1fr 200px'
    }}>
      <SideBar />
      <div style={{
        border: '1px solid red'
      }}>
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

          {filteredData.map((job, index) => (
            <Card key={index} data={job} />
          ))}
          {
            isLoading && <Spinner />

          }
        </CardWrapper>
        {/*This will hold as a trigger for infinte loading*/}
        <footer
          ref={ref}
          style={{
            margin: "32px",
            // border: "1px solid red",
            height: "16px",
            visibility: 'hidden'
          }}
        ></footer>
      </div>


    </div>
  );
}

export default App;
