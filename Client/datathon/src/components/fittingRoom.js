import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "flowbite-react";
import ImageUploader from "./uploadImage";

function FittingRoom() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const exitPopup = () => {
    return (
      <button
        className="absolute top-1 right-2 bg-transparent text-gray-500 hover:text-gray-700"
        onClick={togglePopup}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    );
  };

  return (
    <div className="fixed bottom-0 right-0 flex items-center justify-center m-4">
      {!isPopupOpen && (
        <div
          className="w-16 h-16 bg-black rounded-full flex items-center text-center justify-center text-white cursor-pointer hover:bg-gray-700"
          onClick={togglePopup}
        >
          Fitting room
        </div>
      )}

      {isPopupOpen && (
        <div className="relative w-[50vw] h-[80vh] flex flex-row bottom-0 right-0 m-2 bg-white text-black rounded-lg shadow-lg">
          {exitPopup()}
          <SideBarFittingRoom />
          <VirtualRoom />
        </div>
      )}
    </div>
  );
}
function VirtualRoom() {
  return <ImageUploader />;
}

function SideBarFittingRoom() {
  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className="w-1/3 h-full border-r-gray-300 border-2 sticky z-10 rounded-l-lg shadow-lg"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <br></br>
          <Sidebar.Collapse label="Women">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse label="Men">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export { FittingRoom, SideBarFittingRoom };

export default FittingRoom;
