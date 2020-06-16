# fibonacci_node

## Build
Mediante npm es posible compilar el módulo de Rust y obtener las dependencias de node secuencialmente.
```
$ npm install
```

Este es un ejemplo sencillo de consumo de código nativo compilado con Rust y consumido desde node. 

## Uso

* Obtener el dígito 1.000.000 de fibonacci calculado en JS.
``` 
$ node index.js 1000000 
```


* Obtener el dígito 1.000.000 de fibonacci calculado con código nativo.

```
$ node index.js 1000000 native 
```

## Dependencias

**Rust**:
* [neon](https://crates.io/crates/neon)
* [rug](https://crates.io/crates/rug)

**Node**:
* [neon](https://github.com/neon-bindings/neon)