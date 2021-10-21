import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useQuery } from "../hooks/useQueryHistory";

const Input=styled.input.attrs({
    type:'text'
})`
font-size: 1.3rem;
padding: .5rem;
outline: none;
border:none;
box-shadow: 0px 1px 1px #080c0e;
:hover{
    outline-color: #0ca3c9;
}
:focus{
    border:1px solid #0ca3c9;
    box-shadow: 0px 0px 5px #0ca3c9;
}

`
const Search = () => {
  const [keyword, setKeyword] = useState<string>("");
  
  
  const history = useHistory();
  const query=useQuery()
  const search=query.get('search')
  useEffect(() => {
      setKeyword(search ||'')
  }, [search])
  const handleSearchKeyword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/?search=${keyword}`);
  };
  const handleChangeInput = (keywordOption: string) => {
    setKeyword(keywordOption);
  };
 
  return (
    <form onSubmit={(e) => handleSearchKeyword(e)}>
      <Input
        type="text"
        value={keyword}
        placeholder="Buscar..."
        onChange={(e) => handleChangeInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
