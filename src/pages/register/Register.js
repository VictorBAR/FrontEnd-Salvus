import React from 'react';

import {ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import {history} from '../../history'

import './Register.css'

class Register extends React.Component {
    render(){
        const handleSubmit = values => {
            axios.post('http://localhost:8080/api/usuarios/cadastrar', values)
            .then(resp => {
                console.log(resp)
                const auth = resp.status  

                if(auth === 201){
                    history.push('/login');
                }
            })
        }
        const validations = yup.object().shape({
            email: yup.string().required(),
            senha: yup.string().required(),
            nome: yup.string().required(),
            cpf: yup.string().required(),
            dataNascimento: yup.string().required(),
            genero: yup.string().required(),
            profissao: yup.string().required(),
            numeroDeRegistro: yup.string().required()

        })
        return(
            <div>
                <h1>Registre-se na Salvus</h1>
                <p>Preencha todos os campos obrigatórios *</p>
                <Formik 
                    initialValues={{}}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                 >
                    <Form className="Register">
                        <h2>Dados Pessoais</h2>
                        <div className="Register-Group" >
                            <Field 
                                name="nome" 
                                className="Register-Field" 
                                placeHolder="Nome Completo *"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="nome" 
                                className="Form-Error"
                            />
                        </div>
                        <div className="Register-Group" >
                            <Field 
                                name="cpf" 
                                className="Register-Field" 
                                placeHolder="CPF *"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="cpf" 
                                className="Form-Error"
                            />
                        </div>
                        <div className="Register-Group" >
                            <Field 
                                name="dataNascimento" 
                                className="Register-Field"
                                type="date"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="dataNascimento" 
                                className="Form-Error"
                            />
                        </div>
                        <div className="Register-Group" >
                            <Field 
                                name="email" 
                                className="Register-Field"
                                placeHolder="Email *"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="email" 
                                className="Form-Error"
                            />
                        </div>
                        <div className="Register-Group" >
                            <Field 
                                name="senha" 
                                className="Register-Field" 
                                placeHolder="Senha *"
                                type="password"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="senha" 
                                className="Form-Error"
                            />
                        </div>
                        <div className="Register-Group" >
                            <Field 
                                name="telefone" 
                                className="Register-Field"
                                placeHolder="Telefone *" 
                                type="tel"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="telefone" 
                                className="Form-Error"
                            />
                        </div>

                        <div className="Register-Group" >
                            <Field 
                                as="select"
                                name="genero" 
                                className="Register-Field" 
                                
                            >
                                <option selected>Genero *</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="outro">Outro</option>    
                            </Field>    
                            <ErrorMessage 
                                component="span" 
                                name="genero" 
                                className="Form-Error"
                            />
                        </div>

                        <h2>Dados Profissionais</h2>

                        <div className="Register-Group" >
                            <Field
                                as="select"
                                name="profissao" 
                                className="Register-Field"
                            >
                                <option selected >Àrea de atuação *</option>
                                <option value="medico">Médico</option>
                                <option value="enfermeiro">Enfermeiro</option>
                                <option value="fonoaudiologo">Fonoaudiólogo</option>
                                <option value="tecnico enfermagem">Técnico de Enfermagem</option>
                            </Field>  
                        </div>

                        <div className="Register-Group" >
                            <Field 
                                name="numeroDeRegistro" 
                                className="Register-Field" 
                                placeHolder="Número de Registro *"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="numeroDeRegistro" 
                                className="Register-Error"
                            />
                        </div>

                        <div className="Register-Group" >
                            <Field 
                                name="especialidade" 
                                className="Register-Field" 
                                placeHolder="Especialidades"
                            />
                            <ErrorMessage 
                                component="span" 
                                name="especialidade" 
                                className="Register-Error"
                            />
                        </div>
                        <button className="Register-Btn" type="submit">Cadastrar</button>
                    </Form>
                </Formik>
            </div>
        )
    }
} 

export default Register;