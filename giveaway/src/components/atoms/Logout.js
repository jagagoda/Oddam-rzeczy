import {NavLink} from "react-router-dom";
import Title from "../atoms/Title";
import Header from "../organisms/Header";
import Button from "./Button";


const Logout = () => {
    return (
        <>
            <Header/>
            <div className='logout__container'>
                <Title text='Successful logout!' />
                <div className='logout__btn'>
                    <Button onClick={()=> history.push("/")} to='/'>
                        Home
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Logout;