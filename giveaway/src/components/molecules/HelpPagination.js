import HelpPageNumber from "../atoms/HelpPageNumber";

const HelpPagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        totalPosts > 3 &&
        <ul className="help__pagination">
            {pageNumbers.map(el => (
                <HelpPageNumber paginate={paginate} currentPage={currentPage} number={el} key={el}/>
            ))}
        </ul>

    )
}
export default HelpPagination