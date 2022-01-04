import '../css/componentes.css'
import img from '../assets/img/2.22.jpg'
export const saludar=(nombre='Sin nombre')=>{
    console.log('Creando etiqueta h1');
    const h1=document.createElement('h1');
    h1.innerText=`Hola, ${nombre}`;
    document.body.append(h1);
     const imG= document.createElement('img')
    imG.src= img;
    document.body.append(imG);
}
