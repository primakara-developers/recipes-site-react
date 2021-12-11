import { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  function gotoPageSearchData(e) {
    e.preventDefault();
    console.log(keyword);
  }

  return (
    <form onSubmit={(e) => gotoPageSearchData(e)} className="row mt-2 mb-md-4">
      <div className="col-12 col-md-10">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Search here..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="col-12 col-md-2 mt-2 mt-md-0">
        <button type="submit" className="btn btn-outline-success btn-lg w-100">
          🔍 Search
        </button>
      </div>
    </form>
  );
}
