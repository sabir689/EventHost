import { FaHeart } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { TbTicket } from "react-icons/tb";

const Music = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl relative">
                <figure className="relative">
                    <img src={'https://i.ibb.co/nnLms2x/Rectangle-16.png'} alt="Songs" className="rounded-xl w-full rounded-md object-cover object-center" />
                    <div className="absolute top-2 left-2">
                        <button className="p-2 px-4 rounded-xl bg-purple-600 text-white">
                            Online
                        </button>
                    </div>
                    <div className="absolute top-2 right-2">
                        <button className="p-2 rounded-xl bg-purple-600 text-white mr-2 flex items-center">
                            <FaHeart className="w-6 h-6 mr-1" />
                            Favorite
                        </button>
                    </div>
                </figure>
                <div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <h2 className=" bg-purple-600 w-16 mt-5 mb-4 rounded-xl ">Music</h2>
                            <h2 className='flex items-center gap-2 '> <FaLocationDot /> Celebrity Convention Hall</h2>
                            <h1 className='font-bold mt-2'>ROUFIAN’S HSC-24 RAG<br />Day </h1>

                        </div>
                        <div className='py-2 border-2 px-4 items-center rounded-2xl bg-white'>
                            <h1>Apr</h1>
                            <h3 className='text-purple-600 font-bold text-2xl'>20</h3>
                            <h1>10:00..PM</h1>

                        </div>
                    </div>
                    <div className='flex justify-between mt-2  items-center'>
                        <div className='bg-purple-600 px-8 py-2 gap-2 items-center rounded-xl flex'>
                            <TbTicket className="w-8 h-8" />
                            <h1>See Ticket</h1>
                        </div>

                        <div className='flex items-center gap-2 border  rounded-xl  bg-white'>
                            <h2 className='font-bold ml-2  text-purple-600 text-3xl'>20</h2>
                            <h2 className='mr-2'>Seat <br /> Left</h2>
                        </div>
                        <h3 className='text-purple-600 font-bold '>See More</h3>
                    </div>
                </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl relative">
                <figure className="relative">
                    <img src={'https://i.ibb.co/zZRrn1v/Rectangle-16-1.png'} alt="Songs" className="rounded-xl w-full rounded-md object-cover object-center" />
                    <div className="absolute top-2 left-2">
                        <button className="p-2 px-4 rounded-xl bg-purple-600 text-white">
                            Online
                        </button>
                    </div>
                    <div className="absolute top-2 right-2">
                        <button className="p-2 rounded-xl bg-purple-600 text-white mr-2 flex items-center">
                            <FaHeart className="w-6 h-6 mr-1" />
                            Favorite
                        </button>
                    </div>
                </figure>
                <div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <h2 className=" bg-purple-600 w-16 mt-5 mb-4 rounded-xl ">Music</h2>
                            <h2 className='flex items-center gap-2 '> <FaLocationDot /> Celebrity Convention Hall</h2>
                            <h1 className='font-bold mt-2'>ROUFIAN’S HSC-24 RAG<br />Day </h1>

                        </div>
                        <div className='py-2 border-2 px-4 items-center rounded-2xl bg-white'>
                            <h1>Apr</h1>
                            <h3 className='text-purple-600 font-bold text-2xl'>20</h3>
                            <h1>10:00..PM</h1>

                        </div>
                    </div>
                    <div className='flex justify-between mt-2  items-center'>
                        <div className='bg-purple-600 px-8 py-2 gap-2 items-center rounded-xl flex'>
                            <TbTicket className="w-8 h-8" />
                            <h1>See Ticket</h1>
                        </div>

                        <div className='flex items-center gap-2 border  rounded-xl  bg-white'>
                            <h2 className='font-bold ml-2  text-purple-600 text-3xl'>20</h2>
                            <h2 className='mr-2'>Seat <br /> Left</h2>
                        </div>
                        <h3 className='text-purple-600 font-bold '>See More</h3>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl relative">
                <figure className="relative">
                    <img src={'https://i.ibb.co/djMBjXj/Rectangle-16-2.png'} alt="Songs" className="rounded-xl w-full rounded-md object-cover object-center" />
                    <div className="absolute top-2 left-2">
                        <button className="p-2 px-4 rounded-xl bg-purple-600 text-white">
                            Online
                        </button>
                    </div>
                    <div className="absolute top-2 right-2">
                        <button className="p-2 rounded-xl bg-purple-600 text-white mr-2 flex items-center">
                            <FaHeart className="w-6 h-6 mr-1" />
                            Favorite
                        </button>
                    </div>
                </figure>
                <div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <h2 className=" bg-purple-600 w-16 mt-5 mb-4 rounded-xl ">Music</h2>
                            <h2 className='flex items-center gap-2 '> <FaLocationDot /> Celebrity Convention Hall</h2>
                            <h1 className='font-bold mt-2'>ROUFIAN’S HSC-24 RAG<br />Day </h1>

                        </div>
                        <div className='py-2 border-2 px-4 items-center rounded-2xl bg-white'>
                            <h1>Apr</h1>
                            <h3 className='text-purple-600 font-bold text-2xl'>20</h3>
                            <h1>10:00..PM</h1>

                        </div>
                    </div>
                    <div className='flex justify-between mt-2  items-center'>
                        <div className='bg-purple-600 px-8 py-2 gap-2 items-center rounded-xl flex'>
                            <TbTicket className="w-8 h-8" />
                            <h1>See Ticket</h1>
                        </div>

                        <div className='flex items-center gap-2 border  rounded-xl  bg-white'>
                            <h2 className='font-bold ml-2  text-purple-600 text-3xl'>20</h2>
                            <h2 className='mr-2'>Seat <br /> Left</h2>
                        </div>
                        <h3 className='text-purple-600 font-bold '>See More</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Music;
