import '../../scss/home-page/_columns.scss';
import Column from "../molecules/Column";

const Columns = () => {
    return (
        <section className="columns__section">
            <Column number='10' title='Donated bags' />
            <Column number='5' title='Supported organizations' />
            <Column number='7' title='Organized collections' />
        </section>
    );
};

export default Columns;
