import '../assets/styles/components/SelectList.scss';
import { useFetch } from '../hooks/useFetch';
const SelectList = ({label, url, id, name, options, value, disabled, onChange}) => {
    //const { data, error, loading } = useFetch(url);
    //console.log(data, error, loading)

    //if(!data) return null;
    //let options = data.results;
    return (
        <div className='select'>
            <select name={name} id={id} value={value} disabled={disabled} onChange={onChange}>
                {options}
                {/* <option disabled>Selecciona una opción:</option>
                { data && options.map((el, index) => <option key={index}>{el.name}</option>)} */}
            </select>
            <small className="select__error "></small>
        </div>
    );
};

export default SelectList;
