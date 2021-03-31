import HelpClick from './HelpClick';

const HelpClicks = ({clicker}) => {
    return (
        <div className='help__clicks'>
            <HelpClick text='Foundations' data={"foundation"} clicker={clicker}/>
            <HelpClick text='Non-governmental organizations' data={"organization"} clicker={clicker}/>
            <HelpClick text='Local collections' data={"collection"} clicker={clicker}/>
        </div>
    );
}

export default HelpClicks;