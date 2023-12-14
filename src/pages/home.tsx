import MainSection from "../modules/main-section/main-section.tsx";
import TourSection from "../modules/tours-section/tour-section.tsx";
import {useRef} from "react";

const Home = () => {

    const ref = useRef<null | HTMLDivElement>(null)

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <div>
            <MainSection handleClick={handleClick} myRef={ref}/>
            <TourSection myRef={ref}/>
        </div>
    );
};

export default Home;