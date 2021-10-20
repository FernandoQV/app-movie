import { useLocation } from "react-router";

export const useQuery=()=> {
    return new URLSearchParams(useLocation().search);//search es el nombre que toma el parametro dentro del location no te confundas por el texto que tu colocas en la url
  }