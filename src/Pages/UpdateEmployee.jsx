import './styles/UpdateEmployee.css';

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const UpdateEmployee = () => {
    let { employeeID } = useParams();
    const navigate = useNavigate();
    const [validForm, setValidForm] = useState(null);

    useEffect(()=> {
        if (validForm) {
            alert('Usuario Creado correctamente');
            onBackHandler();
        }
        if (!validForm)
            setTimeout(() => setValidForm(null), 2500);
    }, [validForm]);

    // Handlers
    const onBackHandler = () => {
        navigate(-1, { replace: true });
    }

    const stopPropagationHandler = e => e.stopPropagation();

    const fakeUpdate = e => {
        const name = e.target[0].value;
        // const role = e.target.elements['employee-role'].value;
        console.log(name);
        e.preventDefault();
        setValidForm(fakeValidation(name));
    }
    const fakeValidation = (name) => name !== null && name !== undefined && name !== '';
    return (
        <div onClick={onBackHandler} className="dialog__container">
            <div onClick={stopPropagationHandler} className='dialog' role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
                <h2 className='dialog-title' id="dialogTitle"> Registrar nuevo empleado </h2>
                <form 
                onSubmit={fakeUpdate}
                className="dialog__form" 
                autoComplete='off' >
                    {
                        /*
                        //Número de empleado
                        
                        <label htmlFor="emp-id">Número de empleado</label>
                        <input required className='dialog__form-input dialog__form-empID' aria-valuemin={0} type="number" pattern="[0-9]*" inputmode="numeric" id='emp-id' />
                        */
                    }
                    {
                        //
                    }
                    <label htmlFor="emp-name">Nombre de empleado</label>
                    <input className='dialog__form-input' id='emp-name' type="text" />
                    {
                        //
                    }
                    <label>Rol de empleado</label>
                    <div className="dialog__form__row">
                        <label htmlFor="employee-role-employee">Empleado</label>
                        <input defaultChecked type="radio" value='employee' name="employee-role" id="employee-role-employee" />
                        <label style={{ marginInlineStart: '0.25em' }} htmlFor="employee-role-chef">Chef</label>
                        <input type="radio" value='chef' name="employee-role" id="employee-role-chef" />
                    </div>
                    {
                        validForm !== null && !validForm &&
                        <p className="dialog__form__exception">Error en algún campo</p>
                    }
                    <div className="dialog-buttons">
                        <button type="submit" value={true} className='dialog-btn dialog-confirm'> Añadir </button>
                        <button type='button' onClick={onBackHandler} value={false} className='dialog-btn dialog-cancel'> Cancelar </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateEmployee;