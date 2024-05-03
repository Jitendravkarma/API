import React, { useContext } from "react";
import { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../redux/Actions";
const Context = createContext();
const ContextData = () => useContext(Context);
const ContextComp = ({ children }) => {
  const dispatch = useDispatch();
  const getData1 = async () => {
    try {
      let data = await fetch("http://localhost:1000/api/product1");
      let resp = await data.json();
      dispatch(fetchData(resp.data1));
    } catch (err) {
      console.log(err);
    }
  };
  const getData2 = async () => {
    try {
      let data = await fetch("http://localhost:1000/api/product2");
      let resp = await data.json();
      dispatch(fetchData(resp.data2));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Context.Provider value={{ getData1, getData2 }}>
      {children}
    </Context.Provider>
  );
};

export { ContextData, ContextComp };
