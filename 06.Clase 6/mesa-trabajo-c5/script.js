// const aplicarTemaOscuro  = window.confirm ("Desea aplicar el tema oscuro?");

// if (aplicarTemaOscuro) {
//     document.querySelector('body').classList.add('dark');
// }

//funcion que le agregamos al boton para alternar temas //
function alternarTema () {
    document.querySelector('body').classList.toggle('dark');
}

// const boton = document.createElement('button');
// boton.innerText = "Un boton agregado desde JS"

// const input = document.createElement('input');

// document.querySelector('.contenedor .item').appendChild(boton);
// document.querySelector('.contenedor .item').appendChild(input);

// const imagen = document.createElement('img');
// imagen.src = "./imagenes/tiger.jpg";

// const subtitulo = document.createElement('h2');
// subtitulo.innerText = "El tigre 2";

// const parrafo = document.createElement('p');
// parrafo.innerText = "El tigre 2 (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño."

//     document.querySelector('.contenedor .item').appendChild(imagen);
//     document.querySelector('.contenedor .item').appendChild(subtitulo);
//     document.querySelector('.contenedor .item').appendChild(parrafo);

// const animal = {
//         titulo: 'El tigre',
//         texto: 'El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño',
//         imagenSrc:'./imagenes/tiger.jpg',
// }

// const div = document.createElement('div');
// const p = document.createElement('p');
// p.innerText=animal.texto;
// const h2 = document.createElement('h2');
// h2.innerText=animal.titulo;
// const img = document.createElement('img');
// img.src = animal.imagenSrc;

// div.appendChild(img);
// div.appendChild(h2);
// div.appendChild(p);


// document.querySelector('.contenedor').appendChild(div).classList.add('item')


const animales = [
    {
        titulo: 'El tigre',
        texto: 'El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño',
        imagenSrc:'./imagenes/tiger.jpg',
    },
    {
        titulo: 'El leon',
        texto: 'El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India',
        imagenSrc:'./imagenes/leon.jpg',
    },
    {
        titulo: 'El leopardo',
        texto: 'El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el   hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).',
        imagenSrc:'./imagenes/leopardo.jpg',
    },
    {
        titulo: 'La pantera negra',
        texto: 'La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.',
        imagenSrc:'./imagenes/pantera-negra.jpg',
    },
    {
        titulo: 'El jaguar',
        texto: 'El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo).',
        imagenSrc:'./imagenes/jaguar.jpg',
    },
    {
        titulo: 'El guepardo',
        texto: 'El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.',
        imagenSrc:'./imagenes/chita.jpg',
    }
];

//funcion con el template para agregar dinamicamente los animales
function armarHTML (imagenSrc,titulo,texto) { 
    const plantillaHTML = `
        <div class="item">
        <img src="${imagenSrc}">
        <h2>${titulo}</h2>
        <p>${texto}</p>
        </div>
        `;
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML += plantillaHTML;
    
}

//recorrido del array para captar la informacion
for (let i = 0; i < animales.length; i++) {
    const animal = animales[i];
    armarHTML(animal.imagenSrc, animal.titulo, animal.texto)
}
