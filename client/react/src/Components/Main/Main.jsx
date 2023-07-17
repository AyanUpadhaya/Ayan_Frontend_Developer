import CapsuleSection from "../Capsules/CapsuleSection";
import RocketSection from "../RocketSection/RocketSection";


const Main = () => {
    return (
        <main className="bg-cs-dark text-light py-5">
            <RocketSection></RocketSection>
            <CapsuleSection></CapsuleSection>
        </main>
    );
};

export default Main;