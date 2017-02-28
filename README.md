# image-extract
> Extracts sprites from a spritesheet image

## Installation
```sh
npm install --save semibran/sprite
```

## Usage
```javascript
var Sprite = require('sprite')
var sprite = Sprite(image)(width, height)(x, y)
```

The main `Sprite` function is curried into three separate phases for reusability. Depending on how it is used, the final function may return either one or multiple `HTMLCanvasElement` objects.

### `use`
```javascript
var createSprite = Sprite(image)
```

Specifies the image from which the resulting sprite will be extracted. This can be either an `Image`, an `HTMLCanvasElement`, or anything that can be drawn onto a `CanvasRenderingContext2D`.

### `config`
```javascript
var createTile = Sprite(image)(width, height)
```

Configures the dimensions of the resulting sprite(s).

### `extract`
```javascript
var sprite = Sprite(image)(width, height)(x, y)
```

The last function does the actual sprite extraction. Note that `x` and `y` are indices referring to the location of the desired sprite rather than raw positions.

If `y` is not provided, `x` will be treated as an index, wrapping around the spritesheet until it reaches the desired sprite.

**If `x` is not provided, the library will extract all the sprites possible with the given dimensions in a grid shape, then return them all as an array.** I personally recommend this method since it abstracts away most (if not all) of the loop logic that you'd have to delve into in order to retrieve each individual sprite.

```javascript
// ES6 users can use the "new" destructuring and object assignment syntax.
var [idle, run0, run1, run2, skid, jump, ouch] = Sprite(mario)(16)()
hero.sprites = { idle, run0, run1, run2, skid, jump, ouch }
```

## License
MIT
