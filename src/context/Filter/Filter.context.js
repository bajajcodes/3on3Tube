import { useContext, useReducer, createContext } from "react";
import { reducer } from "./Filter.context.reducer";

const initialState = { searchQuery: "", category: "All" };
const FilterContext = createContext(null);

function useFilter() {
  return useContext(FilterContext);
}

function FilterProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider, useFilter };
