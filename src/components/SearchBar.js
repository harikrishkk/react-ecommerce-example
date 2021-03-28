import React, { useState, useEffect, useCallback } from "react";
import { searchProducts } from "../redux-state/actions";
import { useDispatch } from "react-redux";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setSearch(e.target.value);
    // 10000000 items function call
  }, []);

  useEffect(() => {
    dispatch(searchProducts(search));
  }, [search]);

  // unmount
  useEffect(() => {
    return () => {
      console.log("Only on component did unmount");
    };
  }, []);

  return (
    <div className="pa4-l">
      <form className="mw7 center pa0 br2-ns ba b--black-10">
        <fieldset className="cf bn ma0 pa0">
          <div className="cf">
            <input
              className="f6 f5-l input-reset bn fl black-80 
            bg-white pa3 lh-solid w-100 w-75-m w-80-l 
            br2-ns br--left-ns"
              placeholder="Search for Products"
              type="text"
              value={search}
              onChange={handleSearch}
            />
            <input
              className="f6 f5-l button-reset fl pv3 tc 
             bn bg-animate bg-black-70 hover-bg-black white 
             pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
              type="submit"
              value="Search"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default React.memo(SearchBar);
