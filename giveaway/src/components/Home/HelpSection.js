import '../../scss/home-page/_help.scss';
import Deco from "../../assets/decoration.svg";
import React, {useState, useEffect} from 'react';
import datahelp from '../../data/datahelp.json';
import Paginations from "./Paginations";
import HelpClicks from "./HelpClicks";

const HelpSection = () => {
    const [data, setData] = useState("foundation");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const pagination = (page) => {
        setData(page.target.dataset.info)
        setCurrentPage(1)
    }
    let fund = datahelp.filter((el => el.category === data))
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = fund.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const helpTitle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

    const getData = () => {
        fetch('data.json'
        , {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <section className="help__section">
            <div className="help__header">
                <h1>Who do we help?</h1>
                <img src={Deco} alt="dekoracja" className="img__deco" />
            </div>
            <div className="help__columns">
                <HelpClicks clicker={pagination} className="help__btn" />
            </div>
            <Paginations postsPerPage={postsPerPage} totalPosts={fund.length} paginate={paginate} currentPage={currentPage}/>
        </section>
    );
};

export default HelpSection;
