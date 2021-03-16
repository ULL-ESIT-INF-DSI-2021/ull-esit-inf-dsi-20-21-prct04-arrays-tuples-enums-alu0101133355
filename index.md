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
### Codigo test:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio1'

describe('funcion que calcula el valor una resistencia segun sus colores', () => {

    it('decodeResistor("negro-negro") returns value 0', () => {
        expect(decodeResistor('negro-negro')).to.be.equal(0)


    });

    it('decodeResistor("marrón-negro") returns value 10', () => {
        expect(decodeResistor('marrón-negro')).to.be.equal(10)


    });
});

```


## Ejercicico 2: Palabras encadenadas de un array 

El enunciado nos pedia que desarrollaramos la funcion meshArray que debia comprobar si las cadenas del array estan encadenadas o no. Esta funcion recibiria como parametro un array de cadenas de texto y devolver un error si las cadenas no estan encadenadas o ubna cadena de texto que contenga las letras que encadenan las palabras del array.

Para su realizacion, realizo un bucle for que va a durar tantas posiciones tenga el array pasado por parametros - 1 donde declaramos dos variables de tipo string y dos variables tipo number.Procedemos a la busqueda desde la ultima letra de la palabra hasta su primera, comprobando si coincide con la primera letra de la segunda palabra, cuando la encontremos en un bucle for que irá avanzando desde la posicion en la que se realizo la coincidencia combrobando letra por letra

### Codigo realizado:

```TypeScript
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
  
### Codigo test:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio2'

describe('funcion que detecta si hay palabras concatenadas', () => {

    it('(["allow", "lowering", "ringmaster", "terror"]) returns value lowringter',() => {
        expect(meshArray(['allow', 'lowering', 'ringmaster', 'terror'])).to.be.eql('lowringter')


    });
});
  
## Ejercicio 3: Calcular la media y concatenar cadenas
  
En el enunciado nos pedia desarrollar una funcion meanAndConcatenate que debia recibir como parametro un array que incluye caracteres de texto y numeros. La funcion deberia devolver como resultado final un array que tendria dos valores, uno seria la media de los valores numericos y una cadena resultado de la concatenacion de caracteres del array recibido.

Para su realizacion, recorremos todo el array dado por parametro y comprobamos cada elemento con los string que hemos declarado. En caso de que se trate de un numero se va añadioendo de forma incremental a una variable tipo number y aumentando un contador, en caso de que sea una letra se van concatenando en un string vacio. Al terminar de recorrer todo el array procedemos a calcular la media de los numeros y los añadimos a un array vacio. Retornamos tanto la media como la concatenacion

### Codigo realizado:

```TypeScript
export function meanAndConcatenate(array: string[]): string[] {
    let cadnum_1: string = '0123456789'
    let cadena_2 : string = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    let number: number = 0;
    let aux: string = '';
    let array_2 = ['', ''];
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (cadnum_1.search(array[i]) != -1) {
        number = number + +array[i];
        count++;
      }  
      if (cadena_2.search(array[i]) != -1)
        aux = aux + array[i];
    }
    
    number = number / count;
    
    array_2[0] = String(number);
    array_2[1] = aux;
  
    return array_2;
  }
  ```
### Codigo test:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio3';

describe('Función que hace la media entre los números del vector y concatena todas las letras', () => {
  it('(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]) returns value ["3.6", "udiwstagwo"]', () => {
    expect(meanAndConcatenate(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'])).to.be.eql(['3.6', 'udiwstagwo'])
  });
});
```  
  
 ## Ejercicio 4: Mover los ceros al final 
  
El enunciado nos pedia desarrollar una funcion, **moveZeros** que recibiria como parametro un array de numeros dado y debia mover los ceros presentes en el array al final del mismo. El array debe mantener el mismo orden respecto al resto de elementos.
  
Para su realizacion recorremos el array mencionado en el enunciado, y vamos comprobando si el elemento es un 0, en dicho caso lo introducimos en un array que hemos declarado y en caso de que no fuera un 0 el elemento hacemos un push pero a otro array que hemos declarado. Concatenamos ambos array y retornamos.

### Codigo realizado:

```TypeScript
export function moveZeros(array: number[]): number[] {
    let array1: number[] = [];
    let array2: number[] = [];
   
    for (let i = 0; i < array.length; i++) {
      if (array[i] != 0) {
       array1.push(array[i])    
      }
      else {
       array2.push(array[i])
      }    
    }
   
    let result = array1.concat(array2);
   
    return result;    
   }
```

### Codigo test:

import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio4';

describe('Función que mueve los ceros de un array al final del vector', () => {
  it('([1,0,1,2,0,1,3]) returns value ["3.6", "udiwstagwo"]', () => {
    expect(moveZeros([1,0,1,2,0,1,3])).to.be.eql([1,1,2,1,3,0,0])
  });
});
```


## Ejercicio 5: Factoria de multiplicaciones

El enunciado nos pedia desarrollar la funcion **multiplyAll**, que debia tomar como parametros un array de numeros. Dicha funcion deberia devolver como resultado otra funcion en mi caso **muti**, que deberia tomar como argumento un unico valor numerico y devolver un nuevo array. El nuevo array debe ser el resultado de la multiplicacion de los numeros del array por el valor numerico que recibe la segunda funcion.

Para realizarlo, es bastante secillo sol tenemos que desarrollar la funcion multi dentro de multiplyAll

#### Codigo realizado:

```TypeScript
export function multiplyAll(array: number[]): Function {
    let array_1: number[] = []
    
    function multi(valor: number): number[] { 
      for (let i = 0; i < array.length; i++)
        array_1.push(array[i] * valor);
      return array_1; 
    }
  
    return multi
  }
```
### Codigo test:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio5';

describe('Función que multiplica cada elemento de un array por un atributo de tipo number', () => {
  it('([2, 6, 8])(3)) returns value [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.be.eql([6, 18, 24])
  });
});
```


## Ejercicio 6: Puntos bi-dimensionales

En el enunciado nos decia, que un  punto describe una posición determinada respecto a un sistema de coordenadas preestablecido. Suponiendo un sistema de dos coordenadas (x, y), un punto en el espacio se denotaría de la forma Point(X, Y). A partir de la siguiente definición, cree un tipo de dato capaz de definir un punto bidimensional y además, debiamos definir las funciones necesarias para:

* Sumar y restar dos puntos coordenada a coordenada **pointAdd** y **pointDiference**
* Calcular el producto de un punto por un número.**pointProduct**
* Calcular la distancia euclídea entre dos puntos.**pointDistance**

Para realizarlo, he desarrollado las funciones mencionadas con anterioridad en el enunciado dado por el profesorado, en primer lugar para la suma recibe dos puntos la funcion y reorna un Point con el resultado de la suma de ambos, para la sería exacamente igual pero restando. Para el producto de un ponto por un numero, la funcion recibe un punto y un numero y retornqaria un Point con el resultado del producto. Por último, para calcular la distancia [euclidea](https://en.wikipedia.org/wiki/Euclidean_distance#:~:text=In%20mathematics%2C%20the%20Euclidean%20distance,being%20called%20the%20Pythagorean%20distance.) recibe dos puntos y retorna un numero con la distancia.

### Codigo realizado:

```TypeScript
type Point = [number, number];
export function pointAdd(point_1: Point, point_2: Point): Point {
    let result: Point = [0, 0];
  
    result[0] = point_1[0] + point_2[0];
    result[1] = point_1[1] + point_2[1];
  
    return result;
  }
  export function pointDiference(point_1: Point, point_2: Point): Point {
    let result: Point = [0, 0];
    
    result[0] = point_1[0] - point_2[0];
    result[1] = point_1[1] - point_2[1];
    
    return result;
  }
  
  export function pointProduct(point_1: Point, valor_point: number): Point {
    let result: Point = [0, 0];
  
    result[0] = point_1[0] * valor_point;
    result[1] = point_1[1] * valor_point;
    
    return result;
  }
  export function pointDistance(point_1: Point, point_2: Point): number {
    let result: number;
    
    result = Math.sqrt((point_1[0] - point_2[0])**2 + (point_1[1] - point_2[1])**2);
    
    return result;
  }
  
```

### Codigo test:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {pointAdd} from '../src/ejercicio6';
import {pointDiference} from '../src/ejercicio6';
import {pointProduct} from '../src/ejercicio6';
import {pointDistance} from '../src/ejercicio6';

describe('Función que calcula la distancia euclidia entre dos puntos', () => {
    it('([2, 3], [3, 4]) returns value [6, 9]', () => {
      expect(pointDistance([2, 3], [3, 4])).to.be.eql(1.4142135623730951)
    });
  });

  
describe('Función que resta dos puntos bidimensionales coordenada a coordenada', () => {
  it('([2, 3], [3, 4]) returns value [-1, -1]', () => {
    expect(pointDiference([2, 3], [3, 4])).to.be.eql([-1, -1])
  });
});


describe('Función que suma dos puntos bidimensionales coordenada a coordenada', () => {
    it('([2, 3], [3, 4]) returns value [5, 7]', () => {
      expect(pointAdd([2, 3], [3, 4])).to.be.eql([5, 7])
    });
  });

describe('Función que calcula el producto de un punto bidimensional por un número', () => {
  it('([2, 3], 3) returns value [6, 9]', () => {
    expect(pointProduct([2, 3], 3)).to.be.eql([6, 9])
  });
});
```



## Ejercicio 7: Puntos n-dimencionales

El encunciado nos decia que a partir del desarrollo realizado para el ejercicio anterior, crearamos un tipo de dato que fuera capaz de definir tres puntos de 3 o mas dimenciones en mi caso **Npoint**. Esto es un punto debe tener como mínimo tres dimensiones y como máximo las que el usuario desee. Además, deberiamos desarrollar  las mismas funciones que en el ejercicio anterior, de modo que puedan operar sobre puntos n-dimensionales. Las funciones a desarrollar son:

* Sumar y restar dos puntos coordenada a coordenada **PointAdd** y **PointDiference**
* Calcular el producto de un punto por un número.**PointProduct**
* Calcular la distancia euclídea entre dos puntos.**PointDistance**

### Codigo realizado:

```TypeScript
type Npoint = [number, number, number, ...number[]];
export function PointAdd(point_1: Npoint, point_2: Npoint): Npoint {
  if (point_1.length != point_2.length)
    throw 'Los puntos no son de la misma dimensión';
  
  for (let i = 0; i < point_1.length; i++) 
    point_1[i] = point_1[i] + point_2[i];

  return point_1;
}

export function PointDiference(point_1: Npoint, point_2: Npoint): Npoint {
  if (point_1.length != point_2.length)
    throw 'Los puntos no son de la misma dimensión';
  
  for (let i = 0; i < point_1.length; i++) 
    point_1[i] = point_1[i] - point_2[i];
  
  return point_1;
}
export function PointProduct(point: Npoint, valor: number): Npoint {

  for (let i = 0; i < point.length; i++) 
    point[i] = point[i] * valor
  
  return point;
}

export function PointDistance(point_1: Npoint, point_2: Npoint): number {
  let result: number = 0;
  if (point_1.length != point_2.length)
  throw 'Los puntos no son de la misma dimensión';

  for (let i = 0; i < point_1.length; i++)
    result = result + (point_1[i] - point_2[i]) ** 2

  result = Math.sqrt(result);
  
  return result;
}

```

### Codigo test:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {nPointAdd} from '../src/ejercicio7';
import {nPointDiference} from '../src/ejercicio7';
import {nPointProduct} from '../src/ejercicio7';
import {nPointDistance} from '../src/ejercicio7';

describe('Función que suma dos puntos n-dimensionales coordenada a coordenada', () => {
  it('([2, 3, 3, 5, 8, 8], [3, 4, 4, 7, 5, 5]) returns value [ 5, 7, 7, 12, 13, 13 ]', () => {
    expect(nPointAdd([2, 3, 3, 5, 8, 8], [3, 4, 4, 7, 5, 5])).to.be.eql([ 5, 7, 7, 12, 13, 13 ])
  });
});

describe('Función que resta dos puntos n-dimensionales coordenada a coordenada', () => {
  it('([2, 3, 4, 6], [3, 4, 4, 6]) returns value [ -1, -1, 0, 0 ]', () => {
    expect(nPointDiference([2, 3, 4, 6], [3, 4, 4, 6])).to.be.eql([ -1, -1, 0, 0 ])
  });
});

describe('Función que calcula el producto de un punto n-dimensional por un número', () => {
  it('([2, 3, 4, 5, 7], 3) returns value [ 6, 9, 12, 15, 21 ]', () => {
    expect(nPointProduct([2, 3, 4, 5, 7], 3)).to.be.eql([ 6, 9, 12, 15, 21 ])
  });
});

describe('Función que calcula la distancia euclidia entre dos puntos', () => {
  it('([2, 3, 6], [3, 4, 5]) returns value 1.7320508075688772', () => {
    expect(nPointDistance([2, 3, 6], [3, 4, 5])).to.be.eql(1.7320508075688772)
  });
});
```



## Ejercicio 8: El agente

El enucniado, nos pedia que apartir de un tablero bidimencional, considerando que un agente está situado en un punto del tablero con coordenadas $(x_0, y_0)$ y tiene que llegar a un objetivo $(x_1, y_1)$. Para lograrlo, el agente solo puede realizar movimientos en los puntos cardinales, esto es, Norte, Sur, Este y Oeste Debemos tener en cuenta que los movimientos positivos en el eje Y serán hacia el Norte y los negativos hacia el Sur. Del mismo modo, los movimientos positivos en el eje X serán hacia el Este y los negativos hacia el Oeste. Para resolverlo se solicitaba lo siguiente:

* Crear el tipo de dato más adecuado para representar los puntos cardinales
* Crear una funcion que reciba como parámetros las dimensiones del mapa, el punto de origen y el punto de destino del agente. Esta función calculará la ruta necesaria para llegar a dicho punto usando únicamente los movimientos permitidos (no se permiten movimientos en diagonal). El resultado de la función deberá ser un array que incluya todos los pasos que tiene que realizar el agente para llegar a su destino.

Para la realizacion, creamos la funcion **agent** la cual recibe como parametros el tamaño de tablero y el punto inicial y final. En primer lugar comprobamos que los puntos dados se encuentran dentro del tablero y cuando esto se cumpla seguiremos recorriendo el tablero hasta que el punto de inicio sea diferente al final. 

### Codigo realizado

```TypeScript
export function agent(X: number, Y: number, initialPoint: number[], end_Point: number[]) {
  if ((initialPoint[0] > X) || (initialPoint[1] > Y) || (end_Point[0] > X) || (end_Point[1] > Y)) {
    return "ERROR: La posición inicial o final no puede superar el tamaño del tablero";
  }

  const camino: string[] = [];

  while (initialPoint[0] != end_Point[0]) {
    if (initialPoint[0] < end_Point[0]) {
      camino.push("East");
      initialPoint[0]++;
    }
    if (initialPoint[0] > end_Point[0]) {
      camino.push("West");
      initialPoint[0]--;
    }
  }
  while (initialPoint[1] != end_Point[1]) {
    if (initialPoint[1] < end_Point[1]) {
      camino.push("North");
      initialPoint[1]++;
    }
    if (initialPoint[1] > end_Point[1]) {
      camino.push("South");
      initialPoint[1]--;
    }
  }
  return camino;
}

```

### Codigo test:

```TypeScript
import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio8';

describe('Ejercicio del agente ', () => {
  it('Primera coordenada', () => {
    expect(agent(10, 10, [1, 3], [3, 5])).to.deep.equal(['East', 'East', 'North', 'North']);
  });
  it('Segunda coordenada', () => {
    expect(agent(10, 10, [3, 7], [1, 2])).to.deep.equal(['West', 'West', 'South', 'South', 'South', 'South', 'South']);
  });
});
```

### Imagen con el test de todos los ejercicios implementados






## Concluciones

En cuanto a la practica que hemos realizado hemos ampliado varios aspectos de TypeScript, a la vez que la utilizacion de de las pruebas unitarias y de documentacion utilizando la heramienta de Typedoc. De los ejercicios, cabe destascar el 2 por su dificultad, el resto son ejercicios los podemos realizar sin dificultades a estas alturas de la carrera y a su vez, conocimientos adquiridos en estas pocoas semanas de clases de la asignatura de DSI. En resumen podria decir que estoy contento con la evolucion quen estoy teniendo y sobre todo por la forma de trabajar que estoy implementando ultimamente en mis practicas.

## Bibliografia 

* Informe de la practica: [Practica 3 - Tipos de datos estaticos y funciones](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/)
* Manual JavaScript: [w3schools.com](https://www.w3schools.com/js/js_string_methods.asp)
* Videos de JavaScript: [Tutoriales](https://www.youtube.com/results?search_query=javascript+desde+cero)
* Git hub pages info: [Git Hub](https://docs.github.com/en/github/working-with-github-pages)
* Informacion de Markdown: [Markdown](https://guides.github.com/features/mastering-markdown/)











  
