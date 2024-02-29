import { createContext } from "react";
import { DataContextInterface } from "./Interface";

const DefaultDataContext = {
    
}

export const DataContext = createContext<DataContextInterface>(DefaultDataContext)