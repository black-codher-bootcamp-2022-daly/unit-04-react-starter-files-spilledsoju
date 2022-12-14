import React from "react";
import PropTypes from 'prop-types'

export const Search = (props) => {
  const { keyword, setKeyword, handleSubmit } = props;

  function handleChange(changeEvent) {
    console.log("Hana event =>", changeEvent);
    setKeyword(changeEvent.target.value);
  }

  function onSubmit(event) {
  event.preventDefault();
  handleSubmit(keyword)
}

  return (
    <form>
      <p style={{ color: "red" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p>
      <input type="text" value={keyword} onChange={handleChange} />
      <input type="submit" onClick={onSubmit}/>
    </form>
  );
};

Search.propTypes = {
keyword: PropTypes.string,
setKeyword: PropTypes.func,
handleSubmit: PropTypes.func
}

export default Search;