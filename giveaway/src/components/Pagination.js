
const Pagination = ({paginate, number, currentPage}) => {
    let className = 'help__pagination-link';

    if (number === currentPage) {
        className = `help__pagination-link active`;
    }
    return (
        <li key={number} className="help__pagination-item">
            <a onClick={() => paginate(number)} className={className}>
                {number}
            </a>
        </li>
    )
}
export default Pagination
