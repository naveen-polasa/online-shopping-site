const Loading = () => {
  return (
    <div className="text-center text-3xl h-96 flex items-center gap-x-6 justify-center">
      <span className="animate-spin inline-block  h-12 w-12  rounded-full text-white border-4 border-red-300  border-t-red-500"></span>{" "}
      Loading...
    </div>
  );
};
export default Loading;
