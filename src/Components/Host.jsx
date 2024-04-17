import { FaCheckCircle } from "react-icons/fa";

const Host = () => {
    return (
        <div className="mt-10 relative rounded-box text-white py-16 sm:py-24 lg:py-32" style={{ backgroundColor: 'rgba(115, 66, 249, 1)' }}>
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="mb-6 sm:mb-0 sm:mr-6">
                    <img src={'https://i.ibb.co/6Yw4qz9/Group-29.png'} alt="" />
                </div>
                <ul className="sm:ml-10">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5">Host Your Event Easily & Automatedly With US</h1>
                    <h1 className="text-lg sm:text-xl mb-3 sm:mb-5">We Provide The Best Event Ticketing & Management Solutions</h1>
                    <h1 className="flex items-center mb-2 gap-2">
                        <FaCheckCircle /> Host Your Event With Easy Steps
                    </h1>
                    <h1 className="flex items-center mb-2 gap-2"> <FaCheckCircle /> Automated Payment System & Ticket will be sent to Mail</h1>
                    <h1 className="flex items-center mb-2 gap-2"><FaCheckCircle /> Access to registration and Transaction Reports</h1>
                    <h1 className="flex items-center mb-2 gap-2"> <FaCheckCircle /> Send Bulk Personalized Mail with Attachments</h1>
                </ul>
            </div>
            <div className="absolute bottom-0 right-0">
                <img src={"https://i.ibb.co/z8kybf4/Group.png"} alt="" />
            </div>
        </div>
    );
};

export default Host;
