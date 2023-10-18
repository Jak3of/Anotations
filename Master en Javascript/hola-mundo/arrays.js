var nombres =[];

nombres = ["nelson", "nelson2", "nelson3"];

var edad = [20, 30, 40];

var lenguajes = new Array("html", "css", "js");

console.log(nombres);
console.log(lenguajes);


for (var i=0; i<nombres.length; i++){

    console.log(nombres[i]);
}

    // elemento == console.log(data);

lenguajes.forEach((lenguaje, index, data) => {
    console.log(index+" "+lenguaje);
})


var experiencia = [[
    nombres[0], lenguajes[0], lenguajes[1], lenguajes[2]
],[
    nombres[1], lenguajes[0], lenguajes[1]
] ,[
    nombres[2], lenguajes[0], lenguajes[1], lenguajes[2]
]];

console.log(experiencia);

lenguajes.push("java");

console.log(lenguajes);

var nle = lenguajes.join(", ");

console.log(nle);


for (let lenguaje of lenguajes){
    document.write(lenguaje+"<br>");
}

console.log(lenguajes.find(lenguaje => {
    return lenguaje == "js";
}));
console.log(lenguajes.findIndex(lenguaje => {
    return lenguaje == "js";
}))

console.log(edad.some(edad => {
    return edad > 20
}));


lenguajes.reverse();
console.log(lenguajes);


lenguajes.pop();

console.log(lenguajes);


lenguajes.shift();

console.log(lenguajes);