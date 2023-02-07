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
                className='flex items-center text-lg pl-2 w-full h-14 border border-gray rounded-lg focus:outline-none focus:border-sky-500'
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
                className='flex items-center text-lg pl-2 w-full h-28 border border-gray rounded-lg focus:outline-none focus:border-sky-500'
                placeholder=''
                onChange={handleChange}
                name="title"
                value={formData.firstDescription}
                />
            </div>
            <div>
              <p className='pt-5 font-semibold text-lg'>Områdebeskrivelse</p>
              <textarea
                className='flex items-center text-lg pl-2 w-full h-28 border border-gray rounded-lg focus:outline-none focus:border-sky-500'
                placeholder=''
                onChange={handleChange}
                name="title"
                value={formData.secondDescription}
                />
            </div>
            <div>
              <p className='pt-5 font-semibold text-lg'>Ejendomsbeskrivelse</p>
              <textarea
                className='flex items-center text-lg pl-2 w-full h-28 border border-gray rounded-lg focus:outline-none focus:border-sky-500'
                placeholder=''
                onChange={handleChange}
                name="title"
                value={formData.thirdDescription}
                />
            </div>
        </div>
      </div>
    </form>
  )
}

export default CreateCaseDesign