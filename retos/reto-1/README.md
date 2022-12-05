# Reto 1

Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

```js
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */
```

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

**Nota:** El carácter \n representa un salto de línea.

¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

# Solución al Reto 1

## Analisis

Necesitamos un script que nos convirta una palabra a esto:

```
 ******
 *gato*
 ******
```

Es decir, que este cubierto por papel hasta en las esquinas, en este caso el papel es el simbolo *

## ¿Que vamos a usar?
Ya que vamos a devolver más de una linea como respuesta, vamos a tener que usar `\n`, este simbolo crea un salto de linea, puedes probarlo con `console.log("linea 1\nlinea 2").

## Solución propuesta

### Iterar en la lista de regalos
```js
function wrapping(gifts) {
  return gifts.map(gift => {})
}
```

Para esto vamos a usar la función map de las listas, esta funcion retorna otra lista, por lo tanto podemos usarla para que luego de envolver en papel los regalos el array ya este formado sin necesidad de crear una variable y pushear uno por uno los regalos.

`.map(gift => {})` va a ir elemento por elemento de array y este se llamara gift, gift es un argumento de la función flecha que esta dentro de la función map.

Osea:

```js
.map(function(gift) {

})
```

Pero es más sencillo usar funciones de tipo flecha.

### Conseguir el papel

Ya que podemos revisar elemento por elemento de la lista, vamos a encontrar la longitud de la palabra y sumarle sus esquinas para encontrar el papel que iria abajo y arriba de la palabra.

```js
function wrapping(gifts) {
  return gifts.map(gift => {
    const papel = "*".repeat(gift.length + 2)
  })
}
```

Definimos una varible donde almacenaremos el papel que va arriba y abajo de la palabra, y en este vamos a poner nuestro simbolo de papel, el *.

```js 
"*".repeat(n)
```

Esto repetira n veces el string, por ejemplo si reemplazamos la n por 5, nos dara como resultado `*****`

Pasamos `gift.length + 2` como n para obtener la longitud de la palabra y sumarle sus dos esquinas.

En este punto ya tenemos esto:

```js

******
******

```

Pero nos falta agregar la palabra gato y el papel que va a los lados de la palabra.

### Palabra y papel horizontal

Ahora solo debemos unir los papeles junto con la palabra, asi que vamos a retornar lo siguiente:

```js
return `${papel}\n*${gift}*\n${papel}`
```

Usamos el simbolo ` para poder ejecutar codigo dentro de un String y mostrar su contenido, podemos poner varibles o el retorno de una función.

```js
`${varible}` 
o 
`${funcion(a)}`
```

Y recuerda añadir el papel horizontal `*${gift}*`, y los saltos de linea correspondientes.