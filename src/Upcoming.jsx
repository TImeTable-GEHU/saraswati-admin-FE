import { useState } from "react";
import TestCard from "./components/TestCard";
import SearchBar from "./components/SearchBar";


const UpcomingTests = () => {
  const [search, setSearch] = useState("");
  const [tests, setTests] = useState([
    { id: 1, title: "TEST 1", date: "Time and Date" },
    { id: 2, title: "TEST 2", date: "Time and Date" },
    { id: 3, title: "TEST 3", date: "Time and Date" },
    { id: 4, title: "TEST 4", date: "Time and Date" },
  ]);

  const filteredTests = tests.filter((test) =>
    test.title.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <div className=" min-h-screen flex justify-center ">
      <div className="bg-white w-screen  rounded-lg shadow-lg">
      <div className="flex justify-between p-6  mb-4">

      <button className=" px-4 py-1 bg-gray-600 text-white rounded">
          Back
        </button>
        <h2 className="text-4xl   font-bold mb-4 text-center">Upcoming Tests</h2>
        <div className="w-8 h-8 bg-gray-300 rounded-full"> </div>
         </div>
        <div className=" bg-gray-600 p-12 h-screen">
        <div className="mb-4 grid justify-items-end">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="space-y-4">
          {filteredTests.map((test) => (
            <TestCard key={test.id} {...test} />
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default UpcomingTests;
