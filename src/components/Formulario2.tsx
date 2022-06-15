import useForm from '../hooks/useForm'

interface FormData {
    postal: string;
    ciudad: string;
    numero: number
};

const Formulario2 = () => {

    const { formulario, handleChange } = useForm<FormData>({
        postal: '2900',
        ciudad: 'Ronda',
        numero: 33
    });
    
    const { postal, ciudad, numero} = formulario;

    /*const [formulario, setFormulario] = useState({
        postal: '',
        ciudad: ''
    });

    const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [ name ]: value
        });
    };*/

    return (
        <form className=''>
            <div className="mb-3">
                <label className='form-label'>Codigo postal:</label>
                <input type="text" 
                        className='form-control'
                        name='postal'
                        onChange={handleChange}
                        value={postal} />
            </div>
            <div className="mb-3">
                <label className='form-label'>Ciudad:</label>
                <input type="text" 
                        className='form-control'
                        name='ciudad'
                        onChange={handleChange}
                        value={ciudad} />
            </div>
            <div className="mb-3">
                <label className='form-label'>Numero:</label>
                <input type="number" 
                        className='form-control'
                        name='numero'
                        onChange={handleChange}
                        value={numero} />
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>
        </form>
    )
}

export default Formulario2
