import React, { useState } from "react";
import { X, CirclePlus, Trash2, CheckCircle } from "lucide-react"; // Importing icons

export default function CreateTest() {
  const [questions, setQuestions] = useState([
    { text: "", options: ["Option 1", "Option 2"], correctOption: null },
  ]);

  // Function to add a new question
  const addQuestion = () => {
    setQuestions([...questions, { text: "", options: ["Option 1", "Option 2"], correctOption: null }]);
  };

  // Function to update question text
  const updateQuestionText = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = value;
    setQuestions(updatedQuestions);
  };

  // Function to add an option to a specific question
  const addOption = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options.push(`Option ${updatedQuestions[qIndex].options.length + 1}`);
    setQuestions(updatedQuestions);
  };

  // Function to remove an option from a specific question
  const removeOption = (qIndex, oIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options = updatedQuestions[qIndex].options
      .filter((_, i) => i !== oIndex)
      .map((_, i) => `Option ${i + 1}`); // Renumber options
    if (updatedQuestions[qIndex].correctOption === oIndex) {
      updatedQuestions[qIndex].correctOption = null; // Reset correct option if removed
    }
    setQuestions(updatedQuestions);
  };

  // Function to remove a question
  const removeQuestion = (qIndex) => {
    setQuestions(questions.filter((_, index) => index !== qIndex));
  };

  // Function to set the correct option for a question
  const selectCorrectOption = (qIndex, oIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].correctOption = oIndex;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Test Description Header */}
      <div className="my-8 text-center">
        <h2 className="bg-blue-950 text-white rounded py-2 px-6 w-fit mx-auto text-lg font-semibold">
          Test Description
        </h2>
      </div>

      {/* Test Input Fields */}
      <div className="space-y-8 ml-56">
        <input type="text" placeholder="Contest Name" className="block w-[calc(100%-14rem)] bg-gray-300 p-2 rounded" />
        <input type="text" placeholder="Contest Desc." className="block w-[calc(100%-14rem)] bg-gray-300 p-2 rounded" />
        <div className="flex flex-wrap gap-4">
          <input type="text" placeholder="Time and Date" className="block w-[calc(50%-7rem)] bg-gray-300 p-2 rounded" />
          <input type="text" placeholder="Duration" className="block w-[calc(50%-8rem)] bg-gray-300 p-2 rounded" />
        </div>
      </div>

      {/* Questions Section */}
      <div className="mt-8 mx-56">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="mb-6 p-4 bg-gray-200 rounded shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Question {qIndex + 1} :-</span>
              <div className="text-sm flex items-center gap-2">
                <span className="mr-4">Total Questions: {questions.length}</span>
                <span>Total Marks: 05</span>
                <Trash2
                  size={20}
                  className="cursor-pointer text-red-500 hover:text-red-700"
                  onClick={() => removeQuestion(qIndex)}
                />
              </div>
            </div>

            {/* Question Input */}
            <input
              type="text"
              value={q.text}
              onChange={(e) => updateQuestionText(qIndex, e.target.value)}
              placeholder="Enter your question here..."
              className="block w-full bg-gray-300 p-2 rounded mb-4"
            />

            {/* Options Section */}
            <div className="space-y-2">
              {q.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center gap-2">
                  {/* Tick Mark (Correct Answer Selector) */}
                  <CheckCircle
                    size={24}
                    className={`cursor-pointer ${
                      q.correctOption === oIndex ? "text-green-600" : "text-gray-400"
                    } hover:text-green-700`}
                    onClick={() => selectCorrectOption(qIndex, oIndex)}
                  />
                  {/* Option Input */}
                  <input type="text" placeholder={option} className="block w-full bg-gray-300 p-2 rounded" />
                  {/* Remove Option */}
                  <X
                    size={20}
                    className="cursor-pointer text-red-500 hover:text-red-700"
                    onClick={() => removeOption(qIndex, oIndex)}
                  />
                </div>
              ))}
            </div>

            {/* Add Option Button */}
            <button onClick={() => addOption(qIndex)} className="mt-4 text-blue-600 text-sm">
              Add Option
            </button>
          </div>
        ))}

        {/* Add Question Button */}
        <div className="flex justify-center">
          <CirclePlus
            size={40}
            className="cursor-pointer text-blue-600 hover:text-blue-800 mt-4"
            onClick={addQuestion}
          />
        </div>
      </div>

      {/* Create Test Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-950 text-white py-2 px-6 rounded">Create Test</button>
      </div>
    </div>
  );
}
