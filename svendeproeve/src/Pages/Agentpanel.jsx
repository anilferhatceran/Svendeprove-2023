import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCase } from "../Features/cases/caseSlice";
import Moment from "moment";

function Agentpanel() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: "",
    address: "",
    city: "",
    firstDescription: "",
    secondDescription: "",
    thirdDescription: "",
    rooms: "",
    size: "",
    availableFrom: "",
    deposit: "",
    rent: "",
    prepaidRent: "",
    isAconto: false,
    heatPrice: "",
    waterPrice: "",
    longitude: "",
    latitude: "",
    petsAllowed: false,
    elevatorAvailable: false,
    balcony: false,
    isReserved: false,
  });

  const {
    title,
    address,
    city,
    firstDescription,
    secondDescription,
    thirdDescription,
    rooms,
    size,
    availableFrom,
    deposit,
    rent,
    prepaidRent,
    isAconto,
    heatPrice,
    waterPrice,
    longitude,
    latitude,
    petsAllowed,
    elevatorAvailable,
    balcony,
    isReserved,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const caseData = {
      title,
      address,
      city,
      firstDescription,
      secondDescription,
      thirdDescription,
      rooms,
      size,
      availableFrom,
      deposit,
      rent,
      prepaidRent,
      isAconto,
      heatPrice,
      waterPrice,
      longitude,
      latitude,
      petsAllowed,
      elevatorAvailable,
      balcony,
      isReserved,
    };

    dispatch(createCase(caseData));
  };

  if (user) {
    return (
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-medium">
          Velkommen til mægler panelet, {user.name}
        </h1>
        <p className="text-lg font-light mt-3 underline underline-offset-2">
          Her kan du tilføje eller opdatere boliger
        </p>

        <div className="p-6 rounded-lg shadow-lg bg-white max-w-md flex justify-center">
          <form onSubmit={onSubmit}>
            <div className="form-group mb-6">
              <input
                type="text"
                name="title"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="caseTitle"
                placeholder="Case title"
                value={title}
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="address"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseAddress"
                  placeholder="Address"
                  value={address}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="city"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseCity"
                  placeholder="City"
                  value={city}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="rooms"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseRooms"
                  placeholder="Rooms"
                  value={rooms}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="size"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseSize"
                  placeholder="Size"
                  value={size}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="date"
                  name="availableFrom"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseAvailableFrom"
                  value={availableFrom}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="deposit"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseDeposit"
                  placeholder="Deposit"
                  value={deposit}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="rent"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseRent"
                  placeholder="Rent"
                  value={rent}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="prepaidRent"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="casePrepaidRent"
                  placeholder="Prepaid rent"
                  value={prepaidRent}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="longitude"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseLongitude"
                  placeholder="Longitude"
                  value={longitude}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="latitude"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseLatitude"
                  placeholder="Latitude"
                  value={latitude}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="waterPrice"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseWaterPrice"
                  placeholder="Water"
                  value={waterPrice}
                  onChange={onChange}
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  name="heatPrice"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="caseHeatPrice"
                  placeholder="Heating"
                  value={heatPrice}
                  onChange={onChange}
                />
              </div>

              <div className="form-group mb-6">
                <label
                  className="form-check-label inline-block text-gray-800 mr-2"
                  htmlFor="caseIsAconto"
                >
                  Aconto
                </label>
                <input
                  type="checkbox"
                  name="isAconto"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="caseIsAconto"
                  value={isAconto}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="form-group mb-6">
                <label
                  className="form-check-label inline-block text-gray-800 mr-2"
                  htmlFor="casePetsAllowed"
                >
                  Pets Allowed
                </label>
                <input
                  type="checkbox"
                  name="petsAllowed"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="casePestAllowed"
                  value={petsAllowed}
                />
              </div>
              <div className="form-group mb-6">
                <label
                  className="form-check-label inline-block text-gray-800 mr-2"
                  htmlFor="caseElevatorAvailable"
                >
                  Elevator
                </label>
                <input
                  type="checkbox"
                  name="elevatorAvailable"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="caseElevatorAvailable"
                  value={elevatorAvailable}
                />
              </div>
              <div className="form-group mb-6">
                <label
                  className="form-check-label inline-block text-gray-800 mr-2"
                  htmlFor="caseBalcony"
                >
                  Balcony
                </label>
                <input
                  type="checkbox"
                  name="balcony"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="caseBalcony"
                  value={balcony}
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="caseFirstDesc"
                name="firstDescription"
                placeholder="Lejemålsinformation..."
                value={firstDescription}
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="caseSecondDesc"
                name="secondDescription"
                placeholder="Områdebeskrivelse..."
                value={secondDescription}
                onChange={onChange}
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="caseThirdDesc"
                name="thirdDescription"
                placeholder="Ejendomsbeskrivelse..."
                value={thirdDescription}
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 
              hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
              ease-in-out"
            >
              Add Case
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1>You are not authorized to view this page.</h1>
      </>
    );
  }
}

export default Agentpanel;
