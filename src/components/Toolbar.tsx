import React, { useEffect, useState } from "react";

interface ToolbarProps {
  theme: "light" | "dark" | "system";
  toolbarAction: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ theme, toolbarAction }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const availableActions = [
    {
      name: "Undo",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L8.41421 8H13.5C16.5376 8 19 10.4624 19 13.5C19 16.5376 16.5376 19 13.5 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 10.4477 17 11 17H13.5C15.433 17 17 15.433 17 13.5C17 11.567 15.433 10 13.5 10H8.41421L10.7071 12.2929C11.0976 12.6834 11.0976 13.3166 10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Redo",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L14.7071 13.7071C14.3166 14.0976 13.6834 14.0976 13.2929 13.7071C12.9024 13.3166 12.9024 12.6834 13.2929 12.2929L15.5858 10H10.5C8.567 10 7 11.567 7 13.5C7 15.433 8.567 17 10.5 17H13C13.5523 17 14 17.4477 14 18C14 18.5523 13.5523 19 13 19H10.5C7.46243 19 5 16.5376 5 13.5C5 10.4624 7.46243 8 10.5 8H15.5858L13.2929 5.70711C12.9024 5.31658 12.9024 4.68342 13.2929 4.29289Z"
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

  return (
    <div
      className={`flex justify-start items-center px-4 pb-1 ${bgColor} ${textColor} shadow-md border-b border-b-gray-200`}
    >
      <div className="flex items-center">
        {actions.map((action) => (
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
