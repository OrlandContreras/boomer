# Boomer
Boomer es un idioma inventado producto de una práctica de Javascript

## Descripción del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras

- Si la palabra inicia con Z, se le añade "pe" al final

- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con guión al medio

- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install boomer
```

## Uso

```
import boomer from 'boomer'

boomer("Programar") // Program
boomer("Zorro") // Zorrope
boomer("Zarpar") // Zarppe
boomer("abecedario") // abece-dario
boomer("sometemos") // SoMeTeMoS
```

## Créditos
- [Orland Contreras](https://twitter.com/Orland_Dev)

## Licencia
[MIT](https://opensource.org/licenses/MIT)