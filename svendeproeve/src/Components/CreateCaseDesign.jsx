import React,{useState, useEffect} from 'react'
import CaseMap from './caseMap';
import mapboxgl from 'mapbox-gl';
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { Map } from 'react-map-gl';
import { v4 as uuidv4 } from "uuid";

function CreateCaseDesign() {

  mapboxgl.accessToken = 'pk.eyJ1Ijoib2xpdmVyaGFuc2VuIiwiYSI6ImNsYXc3dWdmZDBkZ2wzbm1oZzV6ZTVxOXUifQ.tWutup-cpAISS3niRDRPoA';

  const [formData, setFormData] = useState({
    title: "ass",
    address: "asd",
    city: "asdd",
    firstDescription: "asd",
    secondDescription: "asd",
    thirdDescription: "asd",
    propertyType:"",
    rooms: "2",
    size: "1",
    availableFrom: "",
    deposit: "123",
    rent: "1212",
    prepaidRent: "123",
    isAconto: false,
    heatPrice: "",
    waterPrice: "",
    longitude: "1231",
    latitude: "12312",
    petsAllowed: false,
    elevatorAvailable: false,
    balcony: false,
    isReserved: false,
    image: [],
  });

  const [imageUpload, setImageUpload] = useState("");
  // This is an array that retrieves all images in the cloud storage
  const [imageList, setImageList] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const imageTypes = ["image/png", "image/jpeg"];
  const [error, setError] = useState("");

  const imageListRef = ref(storage, "caseImages");



  useEffect(() => {
    if (imageUpload) {
      if (imageTypes.includes(imageUpload.type)) {
        const functionSomething = async () => {
          const imageRef = ref(
            storage,
            `caseImages/${imageUpload.name + uuidv4()}`
          );
          const snapshot = await uploadBytes(imageRef, imageUpload);
          const url = await getDownloadURL(snapshot.ref);
          setImageList((current) => [...current, url]);
        };
        setError("");
        functionSomething();
      } else {
        setImageUpload(null);
        setError("Please select an image file (png or jpeg)");
      }
    }
  }, [imageUpload]);

  const imageHandling = (e) => {
    setImageUpload(e.target.files[0]);
  };

  function handleChange(event){
    const{name,value,type,checked} = event.target
    setFormData(prevFormData => {

        return{
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    console.log(formData);
}

  return (
    <form className='flex flex-col'>  
      <div className='font-DMsans bg-sky-500 h-20'/>
      <div className='w-11/12 self-center pt-20'>
        <label className='font-bold text-2xl text-slate-800'>Add New Property</label>
        <div className='flex flex-col h-auto w-full bg-white rounded-md self-center pt-4 pl-16 pr-16 pb-4'>
          <label className='font-bold text-xl text-slate-800'>Create Listing</label>
            <div>
              <p className='pt-5 font-semibold text-lg'>Property Title</p>
              <input
                className='flex items-center text-lg pl-2 w-full h-14 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500'
                type="text"
                placeholder=''
                onChange={handleChange}
                name="title"
                value={formData.title}
                />
            </div>
            <div>
              <p className='pt-5 font-semibold text-lg'>Lejemålsinformation</p>
              <textarea
                className='flex items-center text-lg pl-2 w-full h-28 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500'
                placeholder=''
                onChange={handleChange}
                name="firstDescription"
                value={formData.firstDescription}
                />
            </div>
            <div>
              <p className='pt-5 font-semibold text-lg'>Områdebeskrivelse</p>
              <textarea
                className='flex items-center text-lg pl-2 w-full h-28 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500'
                placeholder=''
                onChange={handleChange}
                name="secondDescription"
                value={formData.secondDescription}
                />
            </div>
            <div>
              <p className='pt-5 font-semibold text-lg'>Ejendomsbeskrivelse</p>
              <textarea
                className='flex items-center text-lg pl-2 w-full h-28 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500'
                placeholder=''
                onChange={handleChange}
                name="thirdDescription"
                value={formData.thirdDescription}
                />
            </div>
            <label className='font-semibold text-lg pt-5'>Type</label>
            <div className='flex flex-row justify-between '>
              <div className='w-2/6  mr-2'>
                <select
                  className='flex items-center w-full h-12  pl-1 border border-gray-300 rounded-lg focus:outline-none'
                  >
                  <option ></option>
                  <option>Lejlighed</option>
                  <option>Hus</option>
                </select>
              </div>
              <div className='flex border w-1/6 mr-2 border-gray-300 items-center rounded-lg justify-between pr-10 pl-10'>
                <label>Pets allowed?</label>             
                <input
                  className='h-5 w-5'
                  type="checkbox"
                  name="petsAllowed"
                  checked={formData.petsAllowed}
                  onChange={handleChange}
                  />
                </div>
                <div className='flex border w-1/6 mr-2 border-gray-300 items-center rounded-lg justify-between pr-10 pl-10'>
                  <label>Elevator available?</label>               
                  <input
                    className='h-5 w-5'
                    type="checkbox"
                    id="elevatorAvailable"
                    checked={formData.elevatorAvailable}
                    onChange={handleChange}
                    name="elevatorAvailable"
                  />
                </div>
                <div className='flex border w-1/6  border-gray-300 items-center rounded-lg justify-between pr-10 pl-10'>
                  <label>Balcony?</label>
                  <input
                    className='h-5 w-5'
                    type="checkbox"
                    id="balcony"
                    checked={formData.balcony}
                    onChange={handleChange}
                    name="balcony"
                  />
                </div>
                <div className='flex border w-1/6 ml-2 border-gray-300 items-center rounded-lg justify-between pr-10 pl-10'>
                  <label>Aconto?</label>
                  <input
                    className='h-5 w-5'
                    type="checkbox"
                    checked={formData.isAconto}
                    onChange={handleChange}
                    name="isAconto"
                  />
                </div>
            </div>
            {formData.isAconto && <div className='flex flex-row pt-5'>
              <div className='w-1/2 mr-2'>
                <label className='font-semibold text-lg'>Heat price</label>
                <input
                  className='w-full pl-2 border border-gray-300 rounded-lg h-14 focus:outline-none'
                  type="text"
                  value={formData.heatPrice}
                  onChange={handleChange}
                  name="heatPrice"
                />
              </div>
              <div className='w-1/2 mr-2'>
                <label className='font-semibold text-lg'>Water price</label>
                <input
                  className='w-full pl-2 border border-gray-300 rounded-lg h-14 focus:outline-none'
                  type="text"
                  value={formData.waterPrice}
                  onChange={handleChange}
                  name="waterPrice"
                />
              </div>

            </div>}
            <div className='flex flex-row pt-5'>
              <div className='w-1/3 mr-2'>
                <label className='font-semibold text-lg'>Deposit</label>
                <input
                  className='w-full pl-2 border border-gray-300 rounded-lg h-14 focus:outline-none'
                />
              </div>
              <div className='w-1/3 mr-2'>
                <label className='font-semibold text-lg'>Rent</label>
                <input
                  className='w-full pl-2 border border-gray-300 rounded-lg h-14 focus:outline-none'
                />
              </div>
              <div className='w-1/3'>
                <label className='font-semibold text-lg'>Prepaid Rent</label>
                <input
                  className='w-full pl-2 border border-gray-300 rounded-lg h-14 focus:outline-none'
                />
              </div>

            </div>
            
            <div className='flex flex-row pt-5'>
              <div className='w-1/3 mr-2'>
                <label className='font-semibold text-lg'>Area</label>
                <input
                  className='w-full pl-2 border border-gray-300 rounded-lg h-14 focus:outline-none'
                />
              </div>
              <div className='w-1/3 mr-2'>
                <label className='font-semibold text-lg'>Available from</label>
                <input
                  type="date"
                  className='w-full pl-2 border border-gray-300 rounded-lg h-14 focus:outline-none'
                />
              </div>
              <div className='w-1/3'>
                <label className='font-semibold text-lg'>Rooms</label>
                <select className='w-full border border-gray-300 rounded-lg h-14 focus:outline-none'>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>other</option>
                </select>
              </div>
            </div>
            <div className='mt-1'>
              <label className='font-semibold text-xl '>Location</label>
              <CaseMap/>
            </div>
            <div className="form-group mb-4">
              <label
                className="form-check-label text-gray-800"
                htmlFor="caseImage"
              >
                Tilføj billede(r) til ejendommen én ad gangen.
              </label>
              <input
                type="file"
                name="image"
                className="file-upload form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="caseImage"
                accept="image/*"
                onChange={imageHandling}
              />
            </div>
            <div className="image-output">
              {error && <div className="error">{error}</div>}
              {imageUpload && <div>{imageUpload.name}</div>}
            </div>
            <section className=" text-gray-700">
            <h2>Valgte billeder:</h2>
            <div className="p-4 container px-5 py-2 border border-gray-300 rounded-lg">
              <div className="grid gap-2 grid-cols-3">
                {imageList.map((imageUrl) => {
                  return (
                    <img
                      key={imageUrl}
                      className="border-2 bg-cover w-full h-full rounded-lg"
                      src={imageUrl}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <button className="flex justify-center mr-3 h-12 w-1/6 border-2 text-white  bg-sky-500 border-sky-500 rounded-md items-center transition-all focus:outline-none hover:bg-white hover:text-sky-500 hover:transition-all">Søg</button>
        </div>
      </div>
    </form>
  )
}

export default CreateCaseDesign