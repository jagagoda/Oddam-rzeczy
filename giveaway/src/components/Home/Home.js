import Header from "./Header";
import About from "./About";
import Columns from "./Columns";
import HelpSection from "./HelpSection";
import ContactForm from "./ContactForm";
import StepsSection from "./StepsSection";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <Header />
            <Columns />
            <StepsSection />
            <About />
            <HelpSection />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;
