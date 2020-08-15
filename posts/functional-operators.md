---
title: 'Functional Operators'
author: 'Adrián Ferrera'
---

# Functional Operators
## Array Refactoring Patterns

Es muy probable que hayas oído hablar en contadas ocasiones sobre programación funcional, sin embargo, si estás empezando
en el mundo de la programación o vienes de programación orientada a objetos, no conocerás con certeza de que se trata.

Una pequeña base para definir este termino es el hecho de desarrollar una funcionalidad, basándonos en métodos de programación,
los cuales reciben unos parámetros de entrada y devuelven un valor, en cuyo proceso no existen efectos secundarios (side effects),
es decir, no mutan valores. A las funciones que cumplen estos requisitos se las denomina funciones puras (pure functions).

En lenguajes de programación como `Javascript`, existen funciones ya definidas por el lenguaje, que realizan ciertas operaciones:
`map`, `find`, `filter`, `reduce`, `forEach`, etc. Estas operaciones se les conoce como `functional operators` y están pensadas para
trabajar sobre un listado de valores (array).

## ¿Son necesarias?

Desde luego que no, que existan no quiere decir que sean la solución a todos los problemas a los que te vayas a enfrentar, sin embargo
son una herramienta que te protegerá de algunos errores de programación, como puede ser la mutabilidad de valores, errores de [hoisting](https://developer.mozilla.org/es/docs/Glossary/Hoisting)
o simplemente, **cuando se tiene experiencia con ellos**, mejoran la capacidad lectora del código.

Cuando hacemos TDD, no es aconsejable enfocar nuestro código al uso de operadores funcionales, puesto que cerrarán nuestro diseño a esa solución,
por el contrario, en una versión más madura del código o cuando se detectan determinados patrones, es un buen punto para aplicar estas soluciones y madurar nuestro código.

## Tipos

A continuación explicaremos los tipos más comunes de estos operadores:

### forEach

Es el tipo más básico, nos permite recorrer un array, donde para cada elemento del mismo ejecutará una función sin devolver ningún valor.
Normalmente lo utilizamos cuando queremos realizar una operación a partir de ese valor, pero sin esperar una respuesta. Ej: imprimir un log, almacenar ese valor,
enviar un mail...

```javascript
const heroes = ['Spiderman', 'Wolverine', 'Ironman', 'Hulk', 'Ciclops'];

heroes.forEach((hero) => {
  console.log(hero);
});
```

### map

A diferencia del *forEach*, el *map*, devuelve un valor para cada uno de los elementos de nuestro *array*. Suele ser usado 
cuando queremos recuperar una información parcial de cada uno de los elementos o transformar los datos a otro formato, por ejemplo
de la respuesta recibida por el backend, a un modelo propio.

```javascript
const heroes = [
  {name: 'Spiderman', mutant: false },
  {name: 'Wolverine', mutant: true },
  {name: 'Ironman', mutant: false },
  {name: 'Ciclops', mutant: true },
  {name: 'Hulk', mutant: false },
];

const names = heroes.map((hero) => hero.name);
// Spiderman, Wolverine, Ironman, Ciclops, Hulk
```

### filter

El operador *filter* por su parte, ejecutará una función la cual debe devolver un `boolean`, si dicho valor es `true` 
lo añadirá en el conjunto resultante, de no es así, lo excluirá.

```javascript
const heroes = [
  {name: 'Spiderman', mutant: false },
  {name: 'Wolverine', mutant: true },
  {name: 'Ironman', mutant: false },
  {name: 'Ciclops', mutant: true },
  {name: 'Hulk', mutant: false },
];

const mutants = heroes.filter((hero) => hero.mutant);
// Wolverine, Ciclops
const avengers = heroes.filter((hero) => !hero.mutant);
// Spiderman, Ironman, Hulk
```

### find

Actúa de la misma forma que el operador *filter* sin embargo, solo devolverá la primera coincidencia que encuentre como 
una instancia única, no como un array.

```javascript
const heroes = [
  {name: 'Spiderman', mutant: false },
  {name: 'Wolverine', mutant: true },
  {name: 'Ironman', mutant: false },
  {name: 'Ciclops', mutant: true },
  {name: 'Hulk', mutant: false },
];

const mutant = heroes.find((hero) => hero.mutant);
// Wolverine
const avenger = heroes.find((hero) => !hero.mutant);
// Spiderman
```

### reduce

Este es el operador más complejo a nivel conceptual, ya que permite operar sobre el listado completo de valores, pudiendo devolver
cualquier tipo. Su principal característica es que la función que ejecuta para cada elemento, a demás de recibir por parámetro el propio elemento,
recibe el valor devuelto por la función anterior. A demás dicho valor debe de ser inicializado como segundo parámetro del *reduce*:

```javascript
const numbers = [1, 4, 10, 3];
const initValue = 0;

const result = numbers.reduce((total, quantity) => total + quantity, initValue);
// 18
```

Sin embargo se pueden hacer operaciones más complejas, como clasificaciones, y seguir manteniendo la premisa de que es una función pura, pues en cada
iteración generará un nuevo valor que recibirá el siguiente:

```javascript
const heroes = [
  {name: 'Spiderman', mutant: false },
  {name: 'Wolverine', mutant: true },
  {name: 'Ironman', mutant: false },
  {name: 'Ciclops', mutant: true },
  {name: 'Hulk', mutant: false },
];

const heroTeams = heroes.reduce((teams, hero) => {
  const {avengers, mutants} = teams; 
  return hero.mutant 
    ? { avengers, mutants:[...mutants, hero.name]}
    : { avengers: [...avengers, hero.name], mutants}
}, {avengers: [], mutants:[]});

/* 
{
  avengers: ['Spiderman', 'Ironman', 'Hulk'],
  mutants: ['Wolverine', 'Ciclops'],
}
*/
```

## Patrones de refactor

Ahora que conoces los operadores, vamos a ver patrones de programación clásica, que te permitan mover tu código hacia estos operadores:

### map

```javascript
let names = [];
for (let index = 0; index < heroes.length; index++) {
  names.push(heroes[index].name);
  // names = [ ...names, heroes[index].name];
}
```

En el ejemplo anterior podemos ver como justo antes del bucle, definimos un **array u objeto vacío**; Este es 
el primer *smell* para darnos cuenta que algo no está bien. Posteriormente podemos encontrar dos versiones, la que hace `push`
sobre el `array`, o la que trata de ser un poco más "pura", pero sin llegar a cumplirlo en su totalidad.

En este caso es tan sencillo como ver que transformación se hace sobre el objeto y moverlo a un `map`:

```
empty value definition
  loop
    write the current value
```

```javascript
const names = heroes.map(hero => hero.name);
```

### filter

```javascript
let mutants = [];
for (let index = 0; index < heroes.length; index++) {
  if (heroes[index].mutant) {
    mutants.push(heroes[index]);
  }
}
```

Este caso, cumple el mismo patrón anterior, sin embargo, vemos que tiene una condición dentro del bucle. Esto nos indica que no todos
los valores son relevantes para el resultado:

```
empty value definition
  loop
    condition
      write the current value
```

```javascript
const mutants = heroes.filter((hero) => hero.mutant);
```

### find

```javascript
let mutant = {};
for (let index = 0; index < heroes.length; index++) {
  if (heroes[index].mutant) {
    mutant = heroes[index];
    break;
  }
}
```

Esta variante puede ser un poco más sutil, utilizando quizás un `return` en medio de la iteración para parar su ejecución en cuanto encuentre
el valor deseado, sin embargo el patrón de comportamiento es el mismo. Cuando en lugar de un listado de valores en base a una condición, queremos
un único valor.

```
empty value definition
  loop
    condition
      write the current value
      loop-break
```

```javascript
const mutant = heroes.find(hero => hero.mutant);
```

### reduce

```javascript
let heroTeams = {avengers: [], mutants: []}
for(let index = 0; index < heroes.length; index++) {
  const currentHero = heroes[index];
  currentHero.mutant 
    ? heroTeams.mutants.push(currentHero.name)
    : heroTeams.avengers.push(currentHero.name);
}
```

El *reduce*, al tratarse el método más abierto a funcionalidad, es más difícil identificar un patrón que aplique en todos los casos de la misma forma
sin embargo podríamos afirmar que si no se ha intentado usar alguno de los patrones anteriores, pero por determinadas limitaciones no termina de encajar y la función 
siempre depende de un valor que se sobrescribe en cada iteración, entonces se trata de un *reduce*. 

```
empty value definition
  loop
    operations using the current value
    override the current value
```

```javascript
const heroTeams = heroes.reduce((teams, hero) => { 
  const { avengers, mutants } = teams; 
  return hero.mutant 
    ? { avengers, mutants:[...mutants, hero.name] }
    : { avengers: [...avengers, hero.name], mutants }
}, {avengers: [], mutants:[]});
```

## Extra - bonus

### PromiseAll

Es probable que en la mayoría de ocasiones que utilicemos un *forEach*, nos veamos obligados a manejar peticiones asíncronas.
De la misma forma ocurre lo mismo con el *map*, sin embargo, no suele ser de uso exclusivo.

Es por ello que, si **dentro de un iterador tenemos que hacer llamadas asíncronas**, las cuales **no dependen** unas de otras, podamos resolverlo
de la siguiente manera: 

```javascript
const callTheTeam = (hero) => Promise.resolve(`${hero.name}: Avengers, Assamble!!`);

const messages = await Promise.all(heroes.map(callTheTeam));
/*[
  'Spiderman: Avengers, Assamble!!',
  'Ironman: Avengers, Assamble!!',
  'Hulk: Avengers, Assamble!!'
];*/
```

El patrón a identificar sería el siguiente:
```
loop
  async method / Promise
```

## Conclusión

Los operadores funcionales de las listas son una potente herramienta que ayuda a simplificar el código una vez se ha definido una funcionalidad con exactitud,
sin embargo no debe ser nuestra primera versión o herramienta por defecto en un desarrollo iterativo o incompleto sobre nuestro código, por lo que recomiendo usarlos
en una versión definitiva del mismo.

```javascript
for(let index = 0; index < heroes.length; index++) {
  await Promise.resolve(`${heroes[index].name}: Avengers, Assamble!!`)
}
```
