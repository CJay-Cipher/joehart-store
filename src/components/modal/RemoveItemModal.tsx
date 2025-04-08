import React from "react";
type RemoveItemModalProps = {
  cancelRemoveItem: () => void;
  onClick: () => void;
};

const RemoveItemModal = ({ cancelRemoveItem, onClick }: RemoveItemModalProps) => {
  return (
    <div className="fixed z-100 inset-0 bg-gray-800/30 flex justify-center items-center p-4 ">
      <div className="relative flex flex-col items-center py-6 p-4 w-full lg:max-w-[450px] max-w-[370px] bg-main-white md:rounded-[20px] rounded-[10px] ">
        <div
          onClick={() => cancelRemoveItem()}
          className="absolute z-10 top-[8px] right-[10px] lg:text-[18px] text-[16px] font-semibold px-2 bg-main-white border border-transparent rounded hover:border-custom-gray-dark cursor-pointer"
        >
          ✕
        </div>
        <h2 className="text-center text-button-bg font-bold lg:text-[18px] text-[16px]">
          Are you sure you want <br /> to delete this item?
        </h2>
        <p className="mt-1 text-center text-main-black lg:text-[14px] text-[12px]">This action can't be reversed and item will be removed!</p>
        <div className="flex md:gap-4 gap-2 lg:mt-8 sm:mt-6 mt-4">
          <button
            onClick={() => cancelRemoveItem()}
            className="font-semibold lg:text-[18px] sm:text-[16px] text-[14px] px-[40px] border border-main-black rounded-[30px] hover:text-main-white hover:bg-main-black "
          >
            No
          </button>
          <button
            onClick={() => onClick()}
            className="font-semibold lg:text-[18px] sm:text-[16px] text-[14px] text-main-white bg-custom-blood-red px-[40px] border border-custom-blood-red rounded-[30px] hover:bg-custom-red "
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveItemModal;
