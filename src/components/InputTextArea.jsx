import '../assets/styles/components/InputTextArea.scss';
const InputTextArea = (props) => {
    const {id, name, label, onChange, defaultValue } = props;
    return (
        <div className='textArea'>
            <textarea className='textArea__text' defaultValue={defaultValue} name={name} id={id} onChange={onChange} cols="30" rows="10" placeholder='a'></textarea>
            <label className='textArea__label' htmlFor={id}>{label}</label>
        </div>
    );
};

export default InputTextArea;
