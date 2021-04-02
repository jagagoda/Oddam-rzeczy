import HelpSingle from "./HelpSingle";
import datahelp from '../../data/datahelp.json'

const Help = ({HelpTitle, state}) => {
    return (
        <div className="help">
            <h2>{HelpTitle}</h2>
            {state.map(el => {
                return (
                    <div className="help__single" key={el.id}>
                        <HelpSingle name={el.name} target={el.goal} what={el.products}/>
                    </div>
                )
            })}

        </div>
    )
}

export default Help