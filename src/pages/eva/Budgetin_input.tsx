import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { Button } from "@material-tailwind/react";
import Kotak from "./Kotak";
import AutoFIll from "./AutoFill";
 
export default function Budgetin_input() {
  const [activeTab, setActiveTab] = React.useState("html");
  const [fill, setFill] = useState('');
  const choice = [
    {
        label:"Auto Budget'in",
        value:"auto",        
    },
    {
        label:"Customize Budget'in",
        value:"custom",        
    }
  ]

  
  return (
    <>
    <Tabs value={activeTab}>
      <TabsHeader
        placeholder=""
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {choice.map(({ label, value }) => (
          <Tab
            placeholder=""
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder="">
        
        {choice.map(({ value }) => (
          <TabPanel key={value} value={value}>
            {value === 'auto' ? (
                <AutoFIll label={"Auto"} value={fill} onChange={function (setFill: string): void {
                        throw new Error("Function not implemented.");
                    } } />
            ) : (
                <Kotak />
            )}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </>
    );
}