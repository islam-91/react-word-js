import React, { useEffect, useState } from "react";

interface ToolbarProps {
  theme: "light" | "dark" | "system";
  toolbarAction: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ theme, toolbarAction }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [fontSize, setFontSize] = useState(16);
  const [showFontSizeOptions, setShowFontSizeOptions] = useState(false);

  const availableActions = [
    {
      name: "Undo",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L8.41421 8H13.5C16.5376 8 19 10.4624 19 13.5C19 16.5376 16.5376 19 13.5 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 10.4477 17 11 17H13.5C15.433 17 17 15.433 17 13.5C17 11.567 15.433 10 13.5 10H8.41421L10.7071 12.2929C11.0976 12.6834 11.0976 13.3166 10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Redo",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L14.7071 13.7071C14.3166 14.0976 13.6834 14.0976 13.2929 13.7071C12.9024 13.3166 12.9024 12.68342 13.2929 12.2929L15.5858 10H10.5C8.567 10 7 11.567 7 13.5C7 15.433 8.567 17 10.5 17H13C13.5523 17 14 17.4477 14 18C14 18.5523 13.5523 19 13 19H10.5C7.46243 19 5 16.5376 5 13.5C5 10.4624 7.46243 8 10.5 8H15.5858L13.2929 5.70711C12.9024 5.31658 12.9024 4.68342 13.2929 4.29289Z"
            fill="currentColor"
          />
        </svg>
      ),
    },

    {
      name: "Left",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7ZM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12ZM5 17C5 16.4477 5.44772 16 6 16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H6C5.44772 18 5 17.5523 5 17Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Center",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8H19M5 16H19M3 12H21"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Justify",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7ZM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12ZM5 17C5 16.4477 5.44772 16 6 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Right",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7ZM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12ZM11 17C11 16.4477 11.4477 16 12 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H12C11.4477 18 11 17.5523 11 17Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Bold",
      icon: <b className="text-xl">B</b>,
    },
    {
      name: "Italic",
      icon: <i className="text-xl">I</i>,
    },
    {
      name: "Underline",
      icon: <u className="text-xl">U</u>,
    },
    {
      name: "Strike",
      icon: <s className="text-xl">S</s>,
    },
    {
      name: "Highlight",
      icon: <mark className="text-xl px-2">H</mark>,
    },
    {
      name: "Code",
      icon: <code className="text-xl">{"</>"}</code>,
    },
    {
      name: "Link",
      icon: (
        <svg
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="_40_Hyperlink"
            data-name="40 Hyperlink"
            transform="translate(0 0)"
          >
            <g id="Group_103" data-name="Group 103">
              <path
                id="Path_51"
                data-name="Path 51"
                d="M503.466,132.268,379.733,8.534a29.17,29.17,0,0,0-41.234,0L214.767,132.268a29.15,29.15,0,0,0,0,41.265l20.6,20.6L359.1,70.4l82.5,82.5L317.867,276.633,338.5,297.265a29.169,29.169,0,0,0,41.234,0L503.465,173.533A29.207,29.207,0,0,0,503.466,132.268Z"
                fill-rule="evenodd"
              />
              <path
                id="Path_52"
                data-name="Path 52"
                d="M276.633,317.866,152.9,441.6,70.4,359.1,194.133,235.368,173.5,214.736a29.167,29.167,0,0,0-41.233,0L8.534,338.468a29.208,29.208,0,0,0,0,41.265L132.267,503.466a29.169,29.169,0,0,0,41.233,0L297.233,379.733a29.152,29.152,0,0,0,0-41.265Z"
                fill-rule="evenodd"
              />
              <path
                id="Path_53"
                data-name="Path 53"
                d="M173.5,338.468a29.153,29.153,0,0,0,41.266,0L338.5,214.736a29.157,29.157,0,0,0-41.265-41.2L173.5,297.265A29.133,29.133,0,0,0,173.5,338.468Z"
                fill-rule="evenodd"
              />
            </g>
          </g>
        </svg>
      ),
    },
    {
      name: "Quote",
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.62231 6.78278C10.0546 6.43909 10.1265 5.81001 9.78277 5.3777C9.43908 4.94539 8.81001 4.87354 8.37769 5.21724C4.73471 8.11342 4 11.8784 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C10 14.3432 8.65685 13 7 13C6.71233 13 6.43412 13.0405 6.17076 13.1161C6.5162 10.5872 7.45738 8.50391 9.62231 6.78278ZM20 16C20 17.6569 18.6569 19 17 19C15.3431 19 14 17.6569 14 16C14 11.8784 14.7347 8.11342 18.3777 5.21724C18.81 4.87354 19.4391 4.94539 19.7828 5.3777C20.1265 5.81001 20.0546 6.43909 19.6223 6.78278C17.4574 8.50391 16.5162 10.5872 16.1708 13.1161C16.4341 13.0405 16.7123 13 17 13C18.6569 13 20 14.3432 20 16Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  const actions =
    toolbarAction === "all"
      ? availableActions
      : availableActions.filter((action) =>
          toolbarAction
            .split(",")
            .map((a) => a.trim())
            .includes(action.name)
        );

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setCurrentTheme(mediaQuery.matches ? "dark" : "light");

      const handleThemeChange = (e: MediaQueryListEvent) => {
        setCurrentTheme(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleThemeChange);
      return () => mediaQuery.removeEventListener("change", handleThemeChange);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const bgColor = currentTheme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = currentTheme === "dark" ? "text-white" : "text-black";

  const fontSizes = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32];

  return (
    <div
      className={`flex items-center gap-4 px-4 pb-1 ${bgColor} ${textColor} shadow-md border-b border-b-gray-200`}
    >
      <div className="relative -top-[6px] flex">
        {actions
          .filter((action) => action.name === "Undo" || action.name === "Redo")
          .map((action) => (
            <button
              key={action.name}
              className="px-4 py-2 flex items-center space-x-2 cursor-pointer rounded bg-transparent"
            >
              {action.icon}
            </button>
          ))}
      </div>

      {/* Font Size Dropdown */}
      <div className="relative top-[-10px] border rounded">
        <button
          onClick={() => setShowFontSizeOptions(!showFontSizeOptions)}
          className="px-4 py-2 flex items-center space-x-2 cursor-pointer rounded bg-transparent"
        >
          {fontSize}px
        </button>
        {showFontSizeOptions && (
          <div
            className={`absolute mt-2 w-32 ${bgColor} border border-gray-300 rounded shadow-lg`}
          >
            {fontSizes.map((size) => (
              <div
                key={size}
                onClick={() => {
                  setFontSize(size);
                  setShowFontSizeOptions(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:${
                  currentTheme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {size}px
              </div>
            ))}
          </div>
        )}
      </div>

      {/* more Button */}
      <div className="overflow-x-auto flex relative top-[-2px]">
        {actions
          .filter(
            (action) =>
              action.name === "Bold" ||
              action.name === "Italic" ||
              action.name === "Underline" ||
              action.name === "Strike" ||
              action.name === "Highlight" ||
              action.name === "Code" ||
              action.name === "Link" ||
              action.name === "List" ||
              action.name === "Quote" ||
              action.name === "Left" ||
              action.name === "Center" ||
              action.name === "Right" ||
              action.name === "Justify"
          )
          .map((action) => (
            <button
              key={action.name}
              className="px-4 py-2 flex items-center space-x-2 cursor-pointer rounded bg-transparent"
            >
              {action.icon}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Toolbar;
