import HelpPageButton from "../atoms/HelpPageButton";

const HelpPageBtns = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        totalPosts > 3 &&
        <ul className="help__pagination">
            {pageNumbers.map(el => (
                <HelpPageButton paginate={paginate} currentPage={currentPage} number={el} key={el}/>
            ))}
        </ul>

    )
}
export default HelpPageBtns