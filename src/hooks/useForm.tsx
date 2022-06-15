import { ChangeEvent, useState } from "react";

//function useForm<T>(initState: T) {
const useForm = <T extends Object>(initState: T) => {
    const [formulario, setFormulario] = useState(initState);

    const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setFormulario({
            ...formulario,
            [ name ]: value
        });
    };

    //Todo lo que quiero devolver en mi customHook
    return {
        formulario,
        handleChange,
        ...formulario //Devuelve los datos del formulario de forma desestructurada
    }
}

export default useForm
