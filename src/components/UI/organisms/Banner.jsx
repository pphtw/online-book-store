export default function Banner() {
  return (
    <div className="w-full flex flex-row justify-center items-center m-5">
      <div className="flex flex-col gap-y-5">
        <p className="text-6xl font-extrabold text-[#004F6D] uppercase">
          Special <span className="text-[#229BE0]"> 50% Off </span>
        </p>
        <p className="text-3xl font-medium ">for student community</p>
        <button className="p-3 w-1/2 rounded-full bg-[#229BE0] text-white hover:bg-[#3d83ac] ease-linear duration-100">
          Get more detail
        </button>
      </div>

      <img src="/reading_a_book.svg" />
    </div>
  );
}
