import SearchBar from "../molegules/SearchBar";

export default function NavBar() {
  return (
    <div className="w-full h-5 bg-white px-10 py-10 flex flex-row items-center gap-x-10 justify-center shadow-md">
      <div className=" text-3xl font-['Agbalumo'] text-[#229BE0] flex item-center gap-2 flex-row justify-between w-1/12">
        {/* <img src="/book.svg" className="w-10" /> */}
        <p>OBook</p>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* menu */}
      <div className="flex flex-row gap-1 w-1/12">
        {/* cart */}
        <button className="p-3 rounded-full hover:bg-[#eeeeee] focus:bg-[#eeeeee]">
          <svg
            className="w-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                stroke="#229BE0"
                strokeWidth="1.5"
              ></path>{" "}
              <path
                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                stroke="#229BE0"
                strokeWidth="1.5"
              ></path>{" "}
              <path
                d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                stroke="#229BE0"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>

        {/* account */}
        <button className="p-3 rounded-full hover:bg-[#eeeeee] focus:bg-[#eeeeee]">
          <svg
            className="w-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle
                cx="12"
                cy="6"
                r="4"
                stroke="#229BE0"
                strokeWidth="1.5"
              ></circle>{" "}
              <path
                d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                stroke="#229BE0"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
