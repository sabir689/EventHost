import { HiCursorClick } from "react-icons/hi";
import { BsQrCode } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const AutomatedPart = () => {
    return (
        <div>
            <h1 className="text-4xl mb-5 mt-10 text-black font-bold">Automated QR Scanner</h1>
            <h2 className="mb-5 text-purple-600"> Scan & Verify The atttendess Deirectly  By Our QR Scanning  <br /> Solution</h2>
            <div className="gap-6 grid grid-cols-4 shadow-2xl">
                <div className="border-2 p-8 rounded-box text-left text-gray-1000 ">
                    <div class="flex justify-center items-center bg-white rounded-full w-16 h-16 border-2 border-purple-700">
                        <HiCursorClick class="text-purple-700 text-4xl" />
                    </div>
                    <h1 className="text-4xl mt-5 font-bold mb-2"> One Click</h1>
                    <h3>QR Verification System</h3>
                </div>
                <div className="border-2 p-8 rounded-box text-left text-gray-1000 ">
                    <div class="flex justify-center items-center bg-white rounded-full w-16 h-16 border-2 border-purple-700">
                        <BsQrCode class="text-purple-700 text-4xl" />
                    </div>
                    <h1 className="text-4xl  mt-5 font-bold mb-2">One Time</h1>
                    <h3>QR Code</h3>
                </div>
                <div className="border-2 p-8 rounded-box text-left text-gray-1000 ">
                    <div class="flex justify-center items-center bg-white rounded-full w-16 h-16 border-2 border-purple-700">
                        <FaCheckCircle class="text-purple-700 text-4xl" />
                    </div>
                    <h1 className="text-4xl  mt-5 font-bold mb-2"> Easy Access</h1>
                    <h3>Lorem ipsum Access</h3>
                </div>
                <div className="border-2 p-8 rounded-box text-left text-gray-1000">
                    <div class="flex justify-center items-center bg-white rounded-full w-16 h-16 border-2 border-purple-700">
                        <IoMail class="text-purple-700 text-4xl" />
                    </div>
                    <h1 className="text-4xl  mt-5 font-bold mb-2">Mail</h1>
                    <h3>Send bulk personalized mail with attachments</h3>
                </div>
            </div>
        </div>
    );
};

export default AutomatedPart;