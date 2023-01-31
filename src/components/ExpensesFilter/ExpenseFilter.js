import './ExpensesFilter.css';

export default function ExpensesFilter(props) {

    function handleChange(event) {
        const {value} = event.target;   
        props.onYearSelected(value);
    }

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected} onChange={handleChange}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
            </select>
        </div>
        </div>
    );
};