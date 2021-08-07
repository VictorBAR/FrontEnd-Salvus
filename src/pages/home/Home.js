import axios from 'axios';
import React, {useState} from 'react';
import { Bar } from 'react-chartjs-2'

const Home = () => { 

        function quanti(nome){
            let cont = 0
            axios.get('http://localhost:8080/api/usuarios/')
            .then(resp =>{
                resp.data.map(element => {
                    if(element.profissao == nome){cont =+1 };  
                }); 
            })
            return cont;
        }

        // console.log(quanti("medico"))

        // var medico = 0;
        // var enfermeiro = 0;
        // var fonoaudiologo = 0;
        // var tecnicoEnfermagem = 0;

        // axios.get('http://localhost:8080/api/usuarios/')
        // .then(resp =>{

        //     resp.data.forEach(element => {

        //         //console.log(element.profissao)
        //         if(element.profissao == 'enfermeiro') enfermeiro = enfermeiro + 1;
        //         else if(element.profissao == 'medico') medico = medico + 1;
        //         else if(element.profissao == 'fonoaudiologo') fonoaudiologo = enfermeiro + 1;
        //         else  tecnicoEnfermagem = tecnicoEnfermagem + 1;
                   
        //     });
        //     console.log(medico)
        // })
        //console.log(medico)
       

        var data = {
            labels: ['medico', 'enfermeiro', 'fonoaudiologo', 'tecnico enfermagem'],
            datasets: [{
                label:'quantidade',
                backgroundColor: 'green',
                data: [quanti('medico'), quanti('enfermeiro'), quanti('fonoaudiologo'), quanti('tecnicoEnfermagem')]
            }]
        }
    
        return(
            <div>
                 <h1>Home</h1>
                <Bar data={data}/>
            </div>    
        )          
}


export default Home;