import MSButton from "./MSButton";
import SelectList from "./SelectList";
import '../assets/styles/components/FormNuevaCaptura.scss';

const FormNuevaCaptura = () => {
    return (
        <form>
            <section className="form">
                <SelectList label="Juzgado" name="select-juzgado" id="select-juzgado" url="https://pokeapi.co/api/v2/pokemon/"/>
                <SelectList label="Libro" name="select-juzgado" id="select-juzgado" url="https://pokeapi.co/api/v2/pokemon/"/>
                <SelectList label="Formato" name="select-juzgado" id="select-juzgado" url="https://pokeapi.co/api/v2/pokemon/"/>
                <MSButton className="btn__save" value="crear" />
            </section>
        </form>
    );
};

export default FormNuevaCaptura;
