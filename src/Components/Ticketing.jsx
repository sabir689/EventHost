
import { IoShieldCheckmark } from "react-icons/io5";

const Ticketing = () => {
    return (
        <div className=" p-8">
            <h1 className="text-4xl mt-14 text-black font-bold"> Simplify Ticketing</h1>
            <h3 className="text-2xl text-purple-600 mb-5 mt-5"> First Ever Unique QR Ticketing <br />Platform For Event Registration & Booking</h3>
            <div class="flex justify-center items-center ">
                <div class="bg-purple-700 bg-opacity-60 rounded-box   ">
                    <h1 class="flex items-center  text-white justify-center gap-2 p-2"><IoShieldCheckmark /> Secure Payment With</h1>

                </div>

            </div>
            <div className="flex gap-0.5 justify-center mt-10 ">
                <div className=" rounded-tl-3xl py-32 mt-10 px-10 h-96 w-64 bg-purple-700">
                    <img src={'https://i.ibb.co/YyT1JFC/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-1-removebg-preview.png'} alt="" />
                </div>
                <div className=" rounded-t-3xl py-32  px-10  w-64 bg-pink-600 bg-opacity-100">
                    <img className="h-2/3 w-full" src={'https://i.ibb.co/275Zryk/2024-04-17-removebg-preview.png'} alt="" />
                </div>
                <div className=" rounded-tr-3xl py-32 mt-10 px-10 h-96 w-64 bg-gradient-to-b from-orange-500 to-red-500">
                    <img src={'https://i.ibb.co/Wx0zLhF/maxresdefault-removebg-preview.png'} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Ticketing;