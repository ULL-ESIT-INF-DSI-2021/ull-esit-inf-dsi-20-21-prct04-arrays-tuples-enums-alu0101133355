type Npoint = [number, number, number, ...number[]];

/**
 * Función que suma dos puntos n-dimensionales coordenada a coordenada
 * @param point_1 tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @param point_2 tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @returns tipo creado Npoint 
 */
export function PointAdd(point_1: Npoint, point_2: Npoint): Npoint {
  if (point_1.length != point_2.length)
    throw 'Los puntos no son de la misma dimensión';
  
  for (let i = 0; i < point_1.length; i++) 
    point_1[i] = point_1[i] + point_2[i];

  return point_1;
}

/**
 * Función que resta dos puntos n-dimensionales coordenada a coordenada
 * @param point_1 es un tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @param point_2 es un tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @returns retorna un tipo creado Npoint 
 */
export function PointDiference(point_1: Npoint, point_2: Npoint): Npoint {
  if (point_1.length != point_2.length)
    throw 'Los puntos no son de la misma dimensión';
  
  for (let i = 0; i < point_1.length; i++) 
    point_1[i] = point_1[i] - point_2[i];
  
  return point_1;
}

/**
 * Función que calcula el producto de un punto n-dimensional por un número
 * @param point es un tipo creado Npoint que define las coordenadas de un punto n-dimensional
 * @param valor es una variable tipo number que contiene el multiplicando
 * @returns retorna un tipo creado Npoint 
 */
export function PointProduct(point: Npoint, valor: number): Npoint {

  for (let i = 0; i < point.length; i++) 
    point[i] = point[i] * valor
  
  return point;
}

/**
 * Función que calcula la distancia euclidia entre dos puntos
 * @param point_1 es un tipo creado Point que define las coordenadas de un punto n-dimensional
 * @param point_2 es un tipo creado Point que define las coordenadas de un punto n-dimensional
 * @returns retorna un tipo number con la distnacia euclidia calculada
 */
export function PointDistance(point_1: Npoint, point_2: Npoint): number {
  let result: number = 0;
  if (point_1.length != point_2.length)
  throw 'Los puntos no son de la misma dimensión';

  for (let i = 0; i < point_1.length; i++)
    result = result + (point_1[i] - point_2[i]) ** 2

  result = Math.sqrt(result);
  
  return result;
}
