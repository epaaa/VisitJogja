import { createContext } from "react";
import { DataContextInterface } from "./Interface";

const DefaultDataContext = {
    places:[],
    things:[]
}

export const DataContext = createContext<DataContextInterface>(DefaultDataContext)