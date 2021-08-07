import React from 'react';

import {ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import {history} from '../../history';

import './Login.css'

class Login extends React.Component{

    render(){
        const handleSubmit = values => {
            axios.post('http://localhost:8080/login', values)
            .then(resp => {
                const auth = resp.status 
                if(auth === 200){
                    localStorage.setItem('auth', auth);
                    history.push('/');
                }
            })
            

        }
        const validations = yup.object().shape({
            email: yup.string().required(),
            senha: yup.string().required()

        })

        return(
            <div>
                <h1>Acesse a Salvus</h1>
                <p>Utilize seus dados de acesso nos campos abaxo</p>
                <Formik 
                    initialValues={{}}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                 >
                    <Form className="Login">
                        <div className="Login-Group" >
                            <Field 
                                name="email" 
                                className="Login-Field" 
                                placeHolder="Email"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="email" 
                                className="Form-Error"
                            />
                        </div>
                        <div className="Login-Group" >
                            <Field 
                                name="senha" 
                                className="Login-Field"
                                placeHolder="Senha"
                                type="password" 
                            />
                            <ErrorMessage 
                                component="span" 
                                name="senha" 
                                className="Login-Error"
                            />
                        </div>
                        <button className="Login-Btn" type="submit">Acessar</button>
                    </Form>
                </Formik>
            </div>
        )
    }
}

export default Login;