import { useState, useEffect } from "react";

interface HeaderProps {
  theme: "light" | "dark" | "system";
}

const menuItems: { [key: string]: { label: string; icon: JSX.Element }[] } = {
  File: [
    {
      label: "New",
      icon: (
        <svg
          fill="currentColor"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="23px"
          viewBox="0 0 45.402 45.402"
        >
          <g>
            <path
              d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
             c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
             c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
             c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
            />
          </g>
        </svg>
      ),
    },
    {
      label: "Open",
      icon: (
        <svg
          fill="currentColor"
          width="18px"
          height="23px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M28 31h-24c-1.657 0-3-1.344-3-3v-14c0-1.657 1.343-3 3-3h24c1.656 0 3 1.343 3 3v14c0 1.656-1.344 3-3 3zM8 18.041c-1.657 0-3 1.567-3 3.5 0 1.934 1.343 3.5 3 3.5s3-1.566 3-3.5c0-1.933-1.344-3.5-3-3.5zM15.78 18.898c-0.115-0.237-0.269-0.422-0.458-0.553-0.19-0.132-0.426-0.221-0.707-0.268-0.2-0.037-0.49-0.055-0.87-0.055h-1.783v6.914h1.008v-2.016h0.842c0.81 0 1.368-0.356 1.679-0.693 0.309-0.338 0.464-1.812 0.464-2.299-0.001-0.282-0.059-0.793-0.175-1.030zM21.024 23.945h-3.058v-2.008h2.956v-0.93h-2.956v-2.055h3.050v-0.93h-3.995v6.914h4.003v-0.991zM26.954 18.023h-0.914v5.31l-3.012-5.31h-1.027v6.914h0.977v-5.061l3.012 5.061h0.965v-6.914zM13.823 21.93h-0.853v-2.977h0.838c0.343 0 0.578 0.017 0.706 0.051 0.197 0.055 0.357 0.166 0.478 0.336s0.182 0.375 0.182 0.613c0 0.33-0.103 1.522-0.309 1.704s-0.553 0.273-1.042 0.273zM8 24.125c-1.104 0-2-1.119-2-2.5s0.896-2.5 2-2.5 2 1.119 2 2.5-0.896 2.5-2 2.5zM25 11l-7.322-5.45c-0.344 0.277-0.775 0.45-1.25 0.45-0.662 0-1.244-0.325-1.607-0.821l-7.821 5.821h-1l8.493-6.518c-0.038-0.155-0.065-0.315-0.065-0.482 0-1.104 0.896-2 2-2 1.105 0 2 0.896 2 2 0 0.359-0.103 0.692-0.269 0.984l7.841 6.016h-1z"></path>
        </svg>
      ),
    },
    {
      label: "Save",
      icon: (
        <svg
          fill="currentColor"
          width="18px"
          height="23px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Save As",
      icon: (
        <svg
          fill="currentColor"
          width="18px"
          height="23px"
          viewBox="-6.5 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>save</title>
          <path d="M12.188 4.469v4.656h2.438l-4.875 5.875-4.875-5.875h2.563v-4.656h4.75zM16.313 12l2.844 4.5c0.156 0.375 0.344 1.094 0.344 1.531v8.656c0 0.469-0.375 0.813-0.813 0.813h-17.844c-0.469 0-0.844-0.344-0.844-0.813v-8.656c0-0.438 0.156-1.156 0.313-1.531l2.844-4.5c0.156-0.406 0.719-0.75 1.125-0.75h1.281l1.313 1.594h-2.625l-2.531 4.625c-0.031 0-0.031 0.031-0.031 0.063 0 0.063 0 0.094-0.031 0.125h16.156v-0.125c0-0.031-0.031-0.063-0.031-0.094l-2.531-4.594h-2.625l1.313-1.594h1.25c0.438 0 0.969 0.344 1.125 0.75zM7.469 21.031h4.594c0.406 0 0.781-0.375 0.781-0.813 0-0.406-0.375-0.781-0.781-0.781h-4.594c-0.438 0-0.813 0.375-0.813 0.781 0 0.438 0.375 0.813 0.813 0.813z"></path>
        </svg>
      ),
    },
    {
      label: "Print",
      icon: (
        <svg
          width="18px"
          height="23px"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 18C16 16.6667 15.7778 15.5 15.5556 15.3333C15.3333 15.1667 13.7778 15 12 15C10.2222 15 8.66667 15.1667 8.44444 15.3333C8.22222 15.5 8 16.6667 8 18M16 18C16 19.3333 15.7778 20.5 15.5556 20.6667C15.3333 20.8333 13.7778 21 12 21C10.2222 21 8.66667 20.8333 8.44444 20.6667C8.22222 20.5 8 19.3333 8 18M16 18C16 18 19.5 17.75 20 17.5C20.5 17.25 21 15.5 21 13.5C21 11.5 20.5 9.75 20 9.5C19.6796 9.33977 18.1268 9.17955 16 9.08514M8 18C8 18 4.5 17.75 4 17.5C3.5 17.25 3 15.5 3 13.5C3 11.5 3.5 9.75 4 9.5C4.32045 9.33977 5.87316 9.17955 8 9.08514M8 9.08514C9.19168 9.03224 10.5636 9 12 9C13.4364 9 14.8083 9.03224 16 9.08514M8 9.08514V7C8 5.22222 8.22222 3.66667 8.44444 3.44444C8.66667 3.22222 10.2222 3 12 3C13.7778 3 15.3333 3.22222 15.5556 3.44444C15.7778 3.66667 16 5.22222 16 7V9.08514"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ],
  Edit: [
    {
      label: "Undo",
      icon: (
        <svg
          width="25px"
          height="26px"
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
      label: "Redo",
      icon: (
        <svg
          width="25px"
          height="26px"
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
    {
      label: "Cut",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8253 5.43529C21.1371 5.89109 21.0204 6.51341 20.5646 6.82528L12.2709 12.5L20.5646 18.1747C21.0204 18.4865 21.1371 19.1089 20.8253 19.5647C20.5134 20.0205 19.8911 20.1371 19.4353 19.8253L10.5123 13.7201L7.88276 15.5983C7.95924 15.886 8 16.1882 8 16.4999C8 18.4329 6.433 19.9999 4.5 19.9999C2.567 19.9999 1 18.4329 1 16.4999C1 14.5669 2.567 12.9999 4.5 12.9999C5.39609 12.9999 6.21353 13.3367 6.83267 13.8906L8.77949 12.5L6.83264 11.1094C6.2135 11.6632 5.39608 11.9999 4.5 11.9999C2.567 11.9999 1 10.4329 1 8.49995C1 6.56695 2.567 4.99995 4.5 4.99995C6.433 4.99995 8 6.56695 8 8.49995C8 8.81171 7.95924 9.11395 7.88275 9.40164L10.5123 11.2799L19.4353 5.17467C19.8911 4.8628 20.5134 4.97948 20.8253 5.43529ZM11.5 12.5C11.5 13.0523 11.0522 13.5 10.5 13.5C9.94767 13.5 9.49996 13.0523 9.49996 12.5C9.49996 11.9477 9.94767 11.5 10.5 11.5C11.0522 11.5 11.5 11.9477 11.5 12.5ZM3 16.4999C3 17.3284 3.67157 17.9999 4.5 17.9999C5.32843 17.9999 6 17.3284 6 16.4999C6 15.6715 5.32843 14.9999 4.5 14.9999C3.67157 14.9999 3 15.6715 3 16.4999ZM3 8.49995C3 9.32837 3.67157 9.99995 4.5 9.99995C5.32843 9.99995 6 9.32837 6 8.49995C6 7.67152 5.32843 6.99995 4.5 6.99995C3.67157 6.99995 3 7.67152 3 8.49995Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Copy",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
            fill="currentColor"
          />
          <path
            d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Paste",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0C11.2347 0 10.6293 0.125708 10.1567 0.359214C9.9845 0.44429 9.82065 0.544674 9.68861 0.62717L9.59036 0.688808C9.49144 0.751003 9.4082 0.803334 9.32081 0.853848C9.09464 0.984584 9.00895 0.998492 9.00053 0.999859C8.99983 0.999973 9.00019 0.999859 9.00053 0.999859C7.89596 0.999859 7 1.89543 7 3H6C4.34315 3 3 4.34315 3 6V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V6C21 4.34315 19.6569 3 18 3H17C17 1.89543 16.1046 1 15 1C15.0003 1 15.0007 1.00011 15 1C14.9916 0.998633 14.9054 0.984584 14.6792 0.853848C14.5918 0.80333 14.5086 0.751004 14.4096 0.688804L14.3114 0.62717C14.1793 0.544674 14.0155 0.44429 13.8433 0.359214C13.3707 0.125708 12.7653 0 12 0ZM16.7324 5C16.3866 5.5978 15.7403 6 15 6H9C8.25972 6 7.61337 5.5978 7.26756 5H6C5.44772 5 5 5.44772 5 6V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V6C19 5.44772 18.5523 5 18 5H16.7324ZM11.0426 2.15229C11.1626 2.09301 11.4425 2 12 2C12.5575 2 12.8374 2.09301 12.9574 2.15229C13.0328 2.18953 13.1236 2.24334 13.2516 2.32333L13.3261 2.37008C13.43 2.43542 13.5553 2.51428 13.6783 2.58539C13.9712 2.75469 14.4433 3 15 3V4H9V3C9.55666 3 10.0288 2.75469 10.3217 2.58539C10.4447 2.51428 10.57 2.43543 10.6739 2.37008L10.7484 2.32333C10.8764 2.24334 10.9672 2.18953 11.0426 2.15229Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ],
  View: [
    {
      label: "Zoom In",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20L14.9497 14.9497M14.9497 14.9497C16.2165 13.683 17 11.933 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10M14.9497 14.9497C13.683 16.2165 11.933 17 10 17C8.09269 17 6.36355 16.2372 5.10102 15M7 10H13M10 7V13"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Zoom Out",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20L14.9497 14.9497M14.9497 14.9497C16.2165 13.683 17 11.933 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10M14.9497 14.9497C13.683 16.2165 11.933 17 10 17C8.09269 17 6.36355 16.2372 5.10102 15M7 10H13"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Full Screen",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z"
            fill="currentColor"
          />
          <path
            d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z"
            fill="currentColor"
          />
          <path
            d="M4 21H8C8.55228 21 9 21.4477 9 22C9 22.5523 8.55228 23 8 23H4C2.34315 23 1 21.6569 1 20V16C1 15.4477 1.44772 15 2 15C2.55228 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21Z"
            fill="currentColor"
          />
          <path
            d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8L3 4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Exit Full Screen",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M16 8h6v1h-7V2h1zM2 16h6v6h1v-7H2zm13 6h1v-6h6v-1h-7zM8 8H2v1h7V2H8z"
          />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      ),
    },
  ],
  Insert: [
    {
      label: "Insert Table",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Edit / Table_Add">
            <path
              id="Vector"
              d="M11 4H15.8002C16.9203 4 17.4801 4 17.9079 4.21799C18.2842 4.40973 18.5905 4.71547 18.7822 5.0918C19 5.5192 19 6.07899 19 7.19691V9.0002L11.0001 9.0001M11 4H6.2002C5.08009 4 4.51962 4 4.0918 4.21799C3.71547 4.40973 3.40973 4.71547 3.21799 5.0918C3 5.51962 3 6.08009 3 7.2002V9M11 4L11.0001 9.0001M3 9V15M3 9L11.0001 9.0001M3 15V16.8002C3 17.9203 3 18.4801 3.21799 18.9079C3.40973 19.2842 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H11.0002L11.0001 9.0001M3 15H11M15 16H18M18 16H21M18 16V19M18 16V13"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      ),
    },
    {
      label: "Insert Image",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H21V21H3V3ZM5 5V19H19V5H5ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H17V17H7V15Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Insert Link",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 7.5C5.51472 7.5 3.5 9.51472 3.5 12C3.5 14.4853 5.51472 16.5 8 16.5H9.5C10.0523 16.5 10.5 16.9477 10.5 17.5V18.5C10.5 19.0523 10.0523 19.5 9.5 19.5H8C3.85786 19.5 0.5 16.1421 0.5 12C0.5 7.85786 3.85786 4.5 8 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H8Z"
            fill="currentColor"
          />
          <path
            d="M6.5 11.5C6.5 10.9477 6.94771 10.5 7.5 10.5H16.5C17.0523 10.5 17.5 10.9477 17.5 11.5V12.5C17.5 13.0523 17.0523 13.5 16.5 13.5H7.5C6.94772 13.5 6.5 13.0523 6.5 12.5V11.5Z"
            fill="currentColor"
          />
          <path
            d="M20.5 12C20.5 9.51472 18.4853 7.5 16 7.5H14.5C13.9477 7.5 13.5 7.05228 13.5 6.5V5.5C13.5 4.94772 13.9477 4.5 14.5 4.5H16C20.1421 4.5 23.5 7.85786 23.5 12C23.5 16.1421 20.1421 19.5 16 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5V17.5C13.5 16.9477 13.9477 16.5 14.5 16.5H16C18.4853 16.5 20.5 14.4853 20.5 12Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Insert Video",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.28 8.03994C9.19003 8.42994 9 10.5199 9 12.0399C9 13.5599 9.19003 15.5999 10.28 16.0399C11.37 16.4799 16 13.7499 16 12.0399C16 10.3299 11.44 7.61994 10.28 8.03994Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Horizontal Line",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ],
  Format: [
    {
      label: "Bold",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 1H8.625C11.0412 1 13 2.95875 13 5.375C13 6.08661 12.8301 6.75853 12.5287 7.35243C13.4313 8.15386 14 9.32301 14 10.625C14 13.0412 12.0412 15 9.625 15H2V1ZM5.5 9.75V11.5H9.625C10.1082 11.5 10.5 11.1082 10.5 10.625C10.5 10.1418 10.1082 9.75 9.625 9.75H5.5ZM5.5 6.25H8.625C9.10825 6.25 9.5 5.85825 9.5 5.375C9.5 4.89175 9.10825 4.5 8.625 4.5H5.5V6.25Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Italic",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1H5V4H7.75219L5.08553 12H2V15H11V12H8.24781L10.9145 4H14V1Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Underline",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 21H20M18 4V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4M4 3H8M16 3H20"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Strikethrough",
      icon: (
        <svg
          fill="currentColor"
          width="25px"
          height="26px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1388.388 1178.604c35.04 82.32 37.92 177.6 8.64 283.32-60.36 216-199.32 294.72-305.4 322.68-42.12 11.16-85.68 16.2-129.6 16.2-191.52 0-390.24-96.24-502.68-207.96l-50.88-54.6 87.84-81.72 49.2 52.8c114.72 114 339.72 205.8 515.4 159.24 110.16-29.04 184.44-109.44 220.56-238.92 22.08-79.8 21-146.52-3.48-203.88ZM758.472 137.928c226.68-61.68 498.72 45.24 639.84 177l-81.84 87.72c-116.64-108.72-350.88-196.92-526.44-148.92-106.08 28.8-177.6 103.08-212.52 220.68-74.4 250.32 135.72 335.16 418.08 420 74.64 22.44 139.2 42.48 186.36 67.8h738v120h-1920v-120h814.92c-213.24-76.92-444.6-211.92-352.44-522.12 46.92-157.68 149.28-262.2 296.04-302.16Z"
            fill-rule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Highlight",
      icon: (
        <svg
          fill="currentColor"
          width="25px"
          height="26px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path d="M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2z" />
        </svg>
      ),
    },
    {
      label: "Code",
      icon: (
        <svg
          width="25px"
          height="26px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z"
            fill="currentColor"
          />
          <path
            d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z"
            fill="currentColor"
          />
          <path
            d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ],
};

const Header = ({ theme }: HeaderProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // Set initial theme based on system preference
      setCurrentTheme(mediaQuery.matches ? "dark" : "light");

      // Update theme when the system theme changes
      const handleThemeChange = (e: MediaQueryListEvent) => {
        setCurrentTheme(e.matches ? "dark" : "light");
      };

      // Listen for changes to the system theme
      mediaQuery.addEventListener("change", handleThemeChange);

      // Cleanup the listener when component unmounts
      return () => {
        mediaQuery.removeEventListener("change", handleThemeChange);
      };
    }
  }, [theme]);

  const bgColor = currentTheme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = currentTheme === "dark" ? "text-white" : "text-black";
  const hoverBg =
    currentTheme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200";
  const borderColor =
    currentTheme === "dark" ? "border-gray-700" : "border-gray-300";

  // Dropdown background and text color based on theme
  const dropdownBg = currentTheme === "dark" ? "bg-gray-800" : "bg-white";
  const dropdownTextColor =
    currentTheme === "dark" ? "text-white" : "text-black";
  const dropdownHoverBg =
    currentTheme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200";

  return (
    <div
      className={`flex justify-left rounded-t gap-6 items-center py-2 px-3 ${bgColor} ${textColor} ${borderColor} relative`}
    >
      {Object.keys(menuItems).map((item) => (
        <div key={item} className="relative">
          <p
            className={`cursor-pointer px-4 py-1 rounded-lg transition-all duration-300 ${hoverBg}`}
            onClick={() => setOpenDropdown(openDropdown === item ? null : item)}
          >
            {item}
          </p>
          {openDropdown === item && (
            <div
              className={`absolute left-0 mt-2 w-48 ${dropdownBg} ${dropdownTextColor} shadow-xl rounded-md py-2 z-10`}
            >
              {menuItems[item].map((option) => (
                <p
                  key={option.label}
                  className={`px-4 flex py-2 cursor-pointer transition-all duration-200 ${dropdownHoverBg}`}
                >
                  <span className="mr-2">{option.icon}</span>
                  {option.label}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
