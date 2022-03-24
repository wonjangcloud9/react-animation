import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log("=======");
  console.log(keyword);
  console.log("=======");
  return null;
}

export default Search;
