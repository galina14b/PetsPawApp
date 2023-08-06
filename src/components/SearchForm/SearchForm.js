import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ searchParams, setSearchParams] = useSearchParams('');


  const upDateQuery = (query) => {
    if (!query) {
      return
    } else {
      setSearchQuery(query);
    }
  }

  function onSubmit() {
    setSearchParams({ "movieName": searchQuery });
    setSearchQuery('');
  };
  
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" value={searchQuery} onChange={(e) => upDateQuery(e.target.value)} placeholder="Movie..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-outline-secondary" onClick={onSubmit} type="button" id="button-addon2">Search</button>
    </div>
  )
}

export default SearchForm;