export const BasicButton = ({ children }) => {
  return (
    <button className="bg-secondary hover:bg-white duration-700 text-dark w-36  px-6 py-2 rounded-full">
      {children}
    </button>
  );
};
