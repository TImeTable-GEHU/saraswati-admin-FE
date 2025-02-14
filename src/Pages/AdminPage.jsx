import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  // Default test data (Simulating a large number of tests)
  const [tests] = useState([
    { id: 1, title: "TEST 1" },
    { id: 2, title: "TEST 2" },
    { id: 3, title: "TEST 3" },
    { id: 4, title: "TEST 4" },
    { id: 5, title: "TEST 5" },
    { id: 6, title: "TEST 6" },
    { id: 7, title: "TEST 7" },
    { id: 8, title: "TEST 8" },
    { id: 9, title: "TEST 9" },
    { id: 10, title: "TEST 10" }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  // Filtered tests based on search input
  const filteredTests = tests.filter((test) =>
    test.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-300">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#1A1A3D] text-white flex flex-col items-center p-5 h-screen fixed left-0 top-0">
        <h1 className="text-2xl font-bold mb-10">ADMIN</h1>

        <div className="flex flex-col items-center space-y-10 w-full">
          <button
            className="bg-white text-black py-3 px-6 rounded-2xl w-4/5 flex items-center justify-center shadow"
            onClick={() => alert("Create Test Page Coming Soon!")}
          >
            Create Test
          </button>
          <button
            className="bg-white text-black py-3 px-6 rounded-2xl w-4/5 flex items-center justify-center shadow"
            onClick={() => alert("Upcoming Tests Page Coming Soon!")}
          >
            Upcoming Tests
          </button>
          <button
            className="bg-white text-black py-3 px-6 rounded-2xl w-4/5 flex items-center justify-center shadow"
            onClick={() => alert("Student Details Page Coming Soon!")}
          >
            View Student Details
          </button>
        </div>

        <div className="mt-auto mb-5">
          <button className="text-gray-300" onClick={() => alert("Logging out...")}>Log out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-1/4 flex-grow pl-[25%]">
        <div className="flex justify-between items-center bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">ADMIN PAGE</h2>
          <button onClick={() => alert("Viewing Profile...")} className="block">
            <img src="/profile image.png" alt="Profile" className="w-10 h-10 rounded-full" />
          </button>
        </div>

        <div className="mt-6 p-6">
          <div className="flex flex-row md:flex-row justify-between items-center mb-4 gap-4">
            <h3 className="text-lg font-bold">Previous Tests</h3>
            <input
              type="text"
              placeholder="Search"
              className="pl-5 border-0 p-2 rounded-full bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            {filteredTests.length > 0 ? (
              filteredTests.slice(0, visibleCount).map((test) => (
                <button
                  key={test.id}
                  className="bg-white text-black p-4 rounded-md font-bold w-full text-left shadow"
                  onClick={() => alert(`Opening ${test.title}...`)}
                >
                  {test.title}
                </button>
              ))
            ) : (
              <p className="text-gray-600">No matching tests found.</p>
            )}
          </div>

          {visibleCount < filteredTests.length && (
            <button
              className="mt-3 text-left text-blue-500 py-2 px-4 rounded w-full"
              onClick={() => setVisibleCount(visibleCount + 5)}
            >
              Read More
            </button>
          )}

          {visibleCount > 8 && (
            <button
              className="mt-3 text-left text-blue-500 py-2 px-4 rounded w-full"
              onClick={() => setVisibleCount(8)}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
