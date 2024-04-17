import AutomatedPart from "../Components/AutomatedPart";
import Banner from "../Components/Banner";
import Events from "../Components/Events";
import Host from "../Components/Host";
import Ticketing from "../Components/Ticketing";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <Host></Host>
            <AutomatedPart></AutomatedPart>
            <Ticketing></Ticketing>
        </div>
    );
};

export default Home;