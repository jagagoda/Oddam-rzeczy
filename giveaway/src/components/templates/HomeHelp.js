import Title from "../atoms/Title";
import HelpClicks from "../molecules/HelpClicks";
import Help from "../organisms/Help";
import {useState} from "react";
import datahelp from "../../data/datahelp.json";
import HelpPageBtns from "../molecules/HelpPageBtns";
import '../../scss/home-page/_help.scss';

const HomeHelp = () => {
    let [data, setData] = useState("funds");
    let [currentPage, setCurrentPage] = useState(1);
    let [postsPerPage, setPostsPerPage] = useState(3);

    const pagination = (el) => {
        setData(el.target.dataset.info)
        setCurrentPage(1)
    }
    let filtered = datahelp.filter((el => el.category === data))
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const helpTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales nibh et nisi ullamcorper fermentum. Nunc commodo lacus imperdiet, pharetra tortor feugiat, dignissim velit. Aliquam nunc nisl, euismod varius efficitur quis, auctor tristique nisl. Proin ut pretium justo.  "
    return (
        <section name="help" className="help__container">
            <Title text="Who do we help?"/>
            <HelpClicks clicker={pagination}/>
            <Help HelpTitle={helpTitle} state={currentPosts}/>
            <div className="page__clicks">
                <HelpPageBtns postsPerPage={postsPerPage} totalPosts={filtered.length} paginate={paginate} currentPage={currentPage}/>
            </div>
        </section>
    )
}

export default HomeHelp