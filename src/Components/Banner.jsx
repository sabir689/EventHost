
import { TbTicket } from "react-icons/tb";
const Banner = () => {
    return (
        <div className="carousel w-full h-[441px] rounded-2xl mt-10 mb-5">
    <div  className="carousel-item relative w-full">
        <img src={'https://i.ibb.co/tpxBZtY/Rectangle-8.png'} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full w-full left-0 top-0 bg-gradient-to-b from-transparent to-[rgba(21, 21, 21, 0)] text-left" style={{ background: 'linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, rgba(75, 45, 155, 0.54) 100%)' }}>
            <div className="ml-10 m-10">
                <h3 className="text-6xl font-bold mb-5">CMA Fest</h3>
                <p className="text-align mb-5 text-3xl">Make Memories That Will Last a Lifetime. See Your Favorite <br />Artists Live At CMA Fest!</p>
                <div className="flex gap-6 mt-10 items-center ">
                <div className='bg-purple-600 px-8 py-2 gap-2 items-center rounded-xl flex'>
                            <TbTicket className="w-8 h-8" />
                            <h1>Get Ticket</h1>
                        </div>
                    <button className="btn btn-ghost btn border-white">Explore All Events</button>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default Banner;