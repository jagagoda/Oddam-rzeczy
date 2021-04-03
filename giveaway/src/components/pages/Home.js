import Header from "../organisms/Header";
import About from "../organisms/About";
import Columns from "../organisms/Columns";
import ContactForm from "../organisms/ContactForm";
import StepsSection from "../organisms/StepsSection";
import Footer from "../organisms/Footer";
import HomeHelp from "../templates/HomeHelp";


const Home = () => {
    return (
        <div>
            <Header />
            <Columns />
            <StepsSection />
            <About />
            <HomeHelp />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;
