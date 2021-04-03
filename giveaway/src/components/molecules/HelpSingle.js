const HelpSingle = ({name, target, products}) => {
    return (
        <>
            <div className="help__single-details">
                <h3>{name}</h3>
                <p>{target}</p>
            </div>
            <div className="help__single-what">
                {products}
            </div>
        </>

    )
}

export default HelpSingle