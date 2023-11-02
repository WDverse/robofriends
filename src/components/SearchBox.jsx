import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div style={{margin:"10px"}}>
      <input
        className="pa3 ba b--blue bg-lightest-blue"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
