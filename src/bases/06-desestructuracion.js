//Destructuracion
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    apellido: 'Stark',
    clave: 'Ironman',
}

const { nombre: nombre2, edad, apellido } = persona;

console.log(nombre2);
console.log(edad);
console.log(apellido);

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // console.log(nombre, edad);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1237,
            lng: -12.332
        }
    }
}

// const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);
const { nombreClave, anios, latlng } = useContext(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);