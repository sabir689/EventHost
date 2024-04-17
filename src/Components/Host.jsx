import { FaCheckCircle } from "react-icons/fa";


const Host = () => {
    return (
        <div className=" mt-10 relative rounded-box text-white py-32" style={{ backgroundColor: 'rgba(115, 66, 249, 1)' }}>
            <div className="flex ">
                <div>
                    <img src={'https://i.ibb.co/6Yw4qz9/Group-29.png'} alt="" />
                </div>
                <ul className=" mt-20 ml-10 ">
                    <h1 className="text-3xl font-bold mb-5">Host Your Event Easily & Automatedly With US</h1>
                    <h1 className="flex text-xl mb-5">We Provide The Best Event Ticketing & 
                        Management Solutions</h1>
                        <h1 className="flex items-center mb-2 gap-2">
                        <FaCheckCircle/>  Host Your Event With Easy Steps
                        </h1>
                        <h1 className="flex items-center mb-2 gap-2"> <FaCheckCircle/>Automated Payment System & Ticket will be sent to Mail</h1>
                        <h1 className="flex items-center mb-2 gap-2"><FaCheckCircle/>Access to reistration and Transaction Reports</h1>
                        <h1 className="flex items-center mb-2 gap-2"> <FaCheckCircle/> Send Bulk Personalized  Mail with Attachments</h1>
                </ul>
            </div>
            <div className="absolute bottom-0 right-0">
                <img src={"https://i.ibb.co/z8kybf4/Group.png"} alt="" />
            </div>
        </div>

    );
};

export default Host;