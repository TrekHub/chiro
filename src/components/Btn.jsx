/* eslint-disable react/prop-types */

const Btn = (props) => {
  return (
    <div className="bg-custom-light-green w-[150px] text-white text-center text-sm py-2 px-6 rounded   hover:bg-custom-orange duration-500 ">
      {props.children}
    </div>
  );
};

export default Btn;
