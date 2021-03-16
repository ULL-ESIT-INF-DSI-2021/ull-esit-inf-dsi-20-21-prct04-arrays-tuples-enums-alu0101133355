# Javier Martin de Leon practica 4: Arrays, tuplas y enumerados

## Introduccion

Para la realizacion de esta practica se nos pedia la realizacion de 8 ejercicos, los cuales debemos realizar utilizando la [estructura basica de proyecto](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/) que hemos visto en la asignatura y utilizado en anteriores practicas. 

## Pasos previos 

Antes de comenzar los ejercicos deberemos instalar y configurar [Typedoc](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view) para generar documentacion y por otro lado deberemos instalar y configurar a su vez [Mocha y chai](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view), para los test unitarios.

## Objetivos 

En cuanto a los objetivos de esta **practica 4**, se resume en la realizacion de los 8 ejercciicos propuestos por el profesorado, pero por otro lado en cuanto a mi realizacion como objetivo adicional teniamos el de la realizacion de las pruebas unitarias correspondientes de cada una de las funciones implementadas.


## Ejercicio 1: Decodificar Resistencias

El enunciado nos decía, que desarrollaramos la funcion **decodeRsistor**, dicha funcion debia recibir como parametros los nombres de los colores de una resistencia como entrada y devolviera un numero de dos digitos indicando el valor de la resistencia. La funcion debera devolver un numero de dos digitos incluso si recibe mas de dos colores como parametos

Para la realizacion, lo que hacemos es recorrer todo el array de colores e igualar cada color con el string correspondiente del array que ha recibido la funcion, si spn iguales le asignamos a un string vacio el valor. Esto lo hacemos para la primera y la segunda posicion del array pasado por parametros y a continucaionc los dos string conseguidos los concatenamos y los retornamos.

### Codigo realizado:

```TypeScript
export function decodeResistor(cadena: string): number {
    let color_1 : string = '';
    let color_2 : string = '';
    let valor: number = 0;
    let array = cadena.toLocaleLowerCase().split('-');
    let number = ['0', '1', '2', '3', '4', '5', '6', '7' ,'8', '9'];
    let color = ['negro', 'marrón', 'rojo', 'naranja', 'amarilla', 'verde', 'azul', 'violeta', 'gris', 'blanco'];
  
    for (let i = 0; i < color.length; i++) {
      if (array[0] == color[i])
        color_1 = number[i];
    }
  
    for (let i = 0; i < color.length; i++) {
      if (array[1] == color[i])
        color_2 = number[i];
    }
  
    color_1 = color_1 + color_2;
    valor = +color_1;
  
    return valor;
  }
```
### Imagen salida:



## Ejercicico 2: Palabras encadenadas de un array 

El enunciado nos pedia que desarrollaramos la funcion meshArray que debia comprobar si las cadenas del array estan encadenadas o no. Esta funcion recibiria como parametro un array de cadenas de texto y devolver un error si las cadenas no estan encadenadas o ubna cadena de texto que contenga las letras que encadenan las palabras del array.

Para su realizacion 

Codigo realizado:

```TypeScript
/**
 * Desarrollar una funcion meshArray para comprobar si las cadenas 
 * del array estan encadenadas o no
 * @param array de string con las palabras 
 * @returns un string con las palabras encadenadas o con un msg de error
 */
export function meshArray(array: string[]): string {
    let str: string = '';
  
    for(let i = 0; i < array.length - 1; i++) {
      const palabra: string = array[i];
      const palabra_next: string = array[i + 1];
      let posicion: number = palabra.length -1;
      let posicion_next: number = 0;
      
      while (palabra[posicion] != palabra_next[posicion_next]) {
        posicion--;
        if (posicion < 0) {
          return 'Error al encadenar';
        } 
      }
  
      for(let j: number = posicion; j < palabra.length; j++) {
        if(palabra[j] == palabra_next[posicion_next]) {
          str = str + palabra[j];
          posicion_next++;
        }
        else {
          return 'Error al encadenar';
        }
      }
    }
    return str;
  }
  ```
