import { useDispatch, useSelector } from "react-redux";
import Select from "./components/Select/Select";
import { loadMoreData } from "./slices/dataSlice";
import Card from "./components/Card/Card";
import { useEffect, useRef } from "react";
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

  const ref = useRef(null);



  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.7,
    };

    const obsCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;


        console.log("Intersecting")

        observer.unobserve(entry.target);
      });
    };
    const observer = new IntersectionObserver(
      obsCallback,
      options
    );
    let copy_ref;
    if (ref.current) {
      copy_ref = ref.current;
      observer.observe(ref.current);
    }

    return () => {
      if (copy_ref) observer.unobserve(copy_ref);
    };
  }, [data]);




  return (
    <>
      <button onClick={() => dispatch(loadMoreData())}>Click</button>
      <Select filter={DummyRoles} label="Role" filterKey="jobRole" />
      <Select filter={DummyMinExp} label="Minimum Experience" isSingle={true} filterKey="minExp" />
      <Select filter={DummyBaseSalary} label="Minimum Base Salary" isSingle={true} filterKey="minJdSalary" />
      <Select filter={DummyLocations} label="Location" filterKey="location" />


      <Card />

      {
        /*This will hold as a trigger for infinte loading*/
      }
      <footer ref={ref} style={{
        margin: '32px',
        border: '1px solid red',
        height: '120px'
      }}></footer>
    </>
  );
}

export default App;
