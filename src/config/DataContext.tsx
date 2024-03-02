import { createContext } from "react";
import { DataContextInterface } from "./Interface";

const DefaultDataContext = {
    places:[],
    things:[],
    responsivePopUp:false,
    toggleResponsivePopUp:()=>{}
}

export const DataContext = createContext<DataContextInterface>(DefaultDataContext)