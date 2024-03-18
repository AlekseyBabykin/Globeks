import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ModalCard from "./components/ModalCard";
import search1 from "./icons/search1.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "./features/apiSlice";
import { useDebounce } from "./hooks/debounce";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.api.items);
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);

  useEffect(() => {
    dispatch(fetchSearch(debounced));
  }, [dispatch, debounced]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="App">
      <div className="container-full">
        <div className="containerSearch">
          <div className="myinput">
            <input
              autoFocus
              type="text"
              placeholder=" "
              onChange={(e) => setSearch(e.target.value)}
            />
            <label className="mylable">
              <img src={search1} alt="Search" />
            </label>
          </div>
        </div>

        <Card items={items} />
      </div>
    </div>
  );
}

export default App;
