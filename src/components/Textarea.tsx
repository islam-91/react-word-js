import { useState } from "react";

interface TextareaProps {
  theme: "light" | "dark" | "system";
}

const Textarea: React.FC<TextareaProps> = ({ theme }) => {
  const [text, setText] = useState("");
  const [selectedText, setSelectedText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTextSelect = () => {
    const selection = window.getSelection()?.toString() || "";
    setSelectedText(selection);
  };

  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div
      className={`w-full p-6 rounded-b shadow-lg ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      <textarea
        className="w-full h-64 p-4 border rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
        value={text}
        onChange={handleTextChange}
        onMouseUp={handleTextSelect}
        placeholder="Type here..."
        aria-label="Text input area"
      />
      <div className="mt-3 p-3 border-t flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <span className="font-medium">
          Selected:{" "}
          <span className="text-blue-500 dark:text-blue-400">
            {selectedText || "None"}
          </span>
        </span>
        <span className="font-medium">
          Characters:{" "}
          <span className="text-green-500 dark:text-green-400">
            {charCount}
          </span>{" "}
          | Words:{" "}
          <span className="text-purple-500 dark:text-purple-400">
            {wordCount}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Textarea;
