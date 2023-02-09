import React,{useState} from 'react'

function CreateCaseDesign() {

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
    heatPrice: "123",
    waterPrice: "123123",
    longitude: "1231",
    latitude: "12312",
    petsAllowed: false,
    elevatorAvailable: false,
    balcony: false,
    isReserved: false,
    image: [],
  });

  function handleChange(event){
    const{name,value,type,checked} = event.target
    setFilterData(prevFormData => {
        return{
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    console.log(filterData);
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
                name="title"
                value={formData.firstDescription}
                />
            </div>
            <div>
              <p className='pt-5 font-semibold text-lg'>Områdebeskrivelse</p>
              <textarea
                className='flex items-center text-lg pl-2 w-full h-28 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500'
                placeholder=''
                onChange={handleChange}
                name="title"
                value={formData.secondDescription}
                />
            </div>
            <div>
              <p className='pt-5 font-semibold text-lg'>Ejendomsbeskrivelse</p>
              <textarea
                className='flex items-center text-lg pl-2 w-full h-28 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500'
                placeholder=''
                onChange={handleChange}
                name="title"
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
                    name="balcony"
                  />
                </div>
                <div className='flex border w-1/6 ml-2 border-gray-300 items-center rounded-lg justify-between pr-10 pl-10'>
                  <label>Aconto?</label>
                  <input
                    className='h-5 w-5'
                    type="checkbox"
                    id="isAconto"
                    checked={formData.isAconto}
                    name="isAconto"
                  />
                </div>
            </div>
            <div className='flex flex-row pt-5'>
              <div className='w-1/3 mr-2'>
                <label className='font-semibold text-lg'>Price</label>
                <input
                  className='w-full pl-2 border border-gray-300 rounded-lg h-14 focus:outline-none'
                />
              </div>
              <div className='w-1/3 mr-2'>
                <label className='font-semibold text-lg'>Area</label>
                <input
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
        </div>
      </div>
    </form>
  )
}

export default CreateCaseDesign