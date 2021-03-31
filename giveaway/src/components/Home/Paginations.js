import React from 'react';
import Pagination from "../Pagination";

const Paginations = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        totalPosts > 3 &&
        <nav className="help__pagination">
            {pageNumbers.map(number => (
                <Pagination paginate={paginate} currentPage={currentPage} number={number} key={number} />
                ))}
        </nav>
    );
};

export default Paginations;
