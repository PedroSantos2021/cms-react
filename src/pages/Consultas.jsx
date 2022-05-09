import FormViewFormat from "../components/FormViewFormat";
import data from '../template/prueba';
const Consultas = () => {
    return (
       <div>
           <FormViewFormat formato={data}/>
       </div>
    );
};

export default Consultas;
