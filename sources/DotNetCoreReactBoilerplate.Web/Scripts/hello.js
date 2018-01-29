import React from "react";

const Hello = ({ first, last }) => {
    var name = `Hello! Your name is ${first} ${last}.`

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var plusone = numbers.map((n) => n + 1);

    console.log("map", plusone);

    let firstn = { name: 'Tony' };
    let lastn = { lastName: 'Stark' };
    let person = Object.assign(firstn, lastn);
    console.log("assign", person);

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => { console.log("fetch", json.title) });

    return <h1>{name}</h1>;
};

export default Hello;