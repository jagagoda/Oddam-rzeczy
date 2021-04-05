const HelpSingle = ({name, goal, products}) => {
    return (
        <>
            <div className="help__single-details">
                <h3>{name}</h3>
                <p>{goal}</p>
            </div>
            <div className="help__single-product">
                {products}
            </div>
        </>

    )
}

export default HelpSingle