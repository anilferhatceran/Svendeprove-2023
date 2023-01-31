import React from "react";
import dummyData from "../dummyData";
import ImageCarousel from "./ImageCarousel";
import { FaMapMarkerAlt,FaCalendarAlt,FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import MapTest from "./MapTest";


export default function CasePage(){
    let fillerText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue magna eu orci gravida, vitae mollis massa fringilla. Morbi eget nulla imperdiet, facilisis lorem nec, porta est. Mauris eleifend ultrices lacinia. In pellentesque ligula velit, sed vulputate arcu sagittis ut. Integer vel est eget magna maximus sodales eget et leo. In quis consectetur tellus. Etiam vestibulum consequat lorem, vitae mollis orci ultricies et. Maecenas lacinia sit amet mauris vel aliquet. Aliquam blandit, sem et ullamcorper viverra, sem ligula finibus sem, sed posuere enim tellus vel tortor. Mauris euismod porttitor ipsum. Nam non justo sit amet ipsum sodales tempus."
    return(
        <div className="pl-80 pr-80 shadow-inner font-DMsans">
            <div className="bg-white  flex flex-col shadow-lg overflow-hidden">
                <div className=" flex items-center">
                    <ImageCarousel slides={dummyData} className=""/>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" text-black pl-14 flex flex-col">
                        <h1 className="font-semibold text-3xl pb-2">Charmerende 2'er midt i Viborg</h1>
                        <div className="flex flex-row items-center pb-2">
                            <FaMapMarkerAlt className="text-sky-500 text-2xl mr-2"/>
                            <p className="text-lg">Hjultorvet 2 B, 1. sal 8800 Viborg</p>
                        </div>
                        <div className="flex flex-row items-center pb-2">
                            <FaCalendarAlt className="text-sky-500 text-2xl mr-2"/>
                            <p className="text-lg">01-03-2023</p>
                        </div>
                    </div>

                    <div className="flex flex-row shadow-2xl mr-14 bg-white">
                        <div className="flex flex-col m-10">
                            <h1 className="pb-1 font-semibold">Jens Jensen</h1>
                            <h1 className="pb-10 text-sky-500 font-semibold">Udlejningsmægler</h1>
                            <div className="flex flex-row pb-2 items-center">
                                <FaPhoneAlt className="text-sky-500 text-2xl mr-1"/>
                                <p>+45 69696969</p>
                            </div>
                            <div className="flex flex-row items-center">
                                <FaRegEnvelope className="text-sky-500 text-2xl mr-1"/>
                                <p>Email@email.email</p>
                            </div>
                        </div>
                        <img src="https://thispersondoesnotexist.com/image" className="h-56 pl-2"/>
                    </div>
                </div>
                <div className="flex flex-row pt-10 justify-between">
                    <div className="pl-14 max-w-2xl flex flex-col pb-10">
                        <h1 className="font-bold text-3xl pb-5">General Information</h1>
                        <h2 className="font-semibold text-xl pb-1">Lejemålsinformation</h2>
                        <p className="pb-5">{fillerText}</p>
                        <h2 className="font-semibold text-xl pb-1">Områdebeskrivelse</h2>
                        <p className="pb-5">{fillerText}</p>
                        <h2 className="font-semibold text-xl pb-1">Ejendomsbeskrivelse</h2>
                        <p className="pb-5">{fillerText}</p>
                    </div>
                    <div className="flex flex-col pr-14">
                        <hr/>
                        <div className="flex flex-row justify-between pb-2 pt-5">
                            <p className="text-gray-500 pr-10">Adresse</p>
                            <p className="font-bold">Hjultorvet 2 B, 1. sal</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">By</p>
                            <p className="font-bold">8800 Viborg</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Værelser</p>
                            <p className="font-bold">2</p>
                        </div>
                        <div className="flex flex-row justify-between pb-5">
                            <p className="text-gray-500 pr-10">Størrelse</p>
                            <p className="font-bold">58</p>
                        </div>
                        <hr/>
                        <div className="flex flex-row justify-between pt-5 pb-2">
                            <p className="text-gray-500 pr-10">Tilgængelig fra</p>
                            <p className="font-bold">01-03-2023</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Månedlig leje</p>
                            <p className="font-bold">4.700 kr.</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Depositum</p>
                            <p className="font-bold">14.100 kr.</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Forudbetalt husleje</p>
                            <p className="font-bold">4.700 kr.</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Varme</p>
                            <p className="font-bold">500</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Vand</p>
                            <p className="font-bold">500</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Husdyr tilladt</p>
                            <p className="font-bold">Nej</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Elevator</p>
                            <p className="font-bold">Nej</p>
                        </div>
                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-gray-500 pr-10">Altan</p>
                            <p className="font-bold">Nej</p>
                        </div>
                    </div>
                </div>
                <div className="h-[500px] w-[full] pr-10 pl-10">
                    <MapTest/>
                </div>
                <div className="h-96">

                </div>
            </div>
        </div>
    )
}