import CapsuleSection from "../Capsules/CapsuleSection";
import CrewsSection from "../CrewsSection/CrewsSection";
import RocketSection from "../RocketSection/RocketSection";


const Main = () => {
    return (
        <main className="bg-cs-dark text-light py-5 main">
            <RocketSection></RocketSection>
            <CapsuleSection></CapsuleSection>
            <CrewsSection></CrewsSection>
        </main>
    );
};

export default Main;