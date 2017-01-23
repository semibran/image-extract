# sprite
> extracts sprites from a spritesheet image

## Usage
```javascript
var Sprite = require('./path/to/sprite/lib')
Sprite(image)(width, height)(x, y)
```

### 1. Image loading: `use(image)`
Specifies the image from which the resulting sprite will be extracted. This can be either an `Image` or an `HTMLCanvasElement`.

### 2. Dimension definitions: `config(width[, height])`
Configures the dimensions of the resulting sprite(s). In the event that `height` is not provided, it will default to `width`.

```javascript
// Only one argument is required for sprites with a 1:1 size ratio.
var letter = Sprite(text)(8)(x, y)
```

```javascript
// Otherwise, specify both the width and height.
var sprite = Sprite(mario)(16, 32)(x, y)
```

### 3. Sprite extraction: `extract([x, y])`
The last function does the actual sprite extraction. Note that `x` and `y` are indices referring to the location of the desired sprite rather than raw positions.

`y` will default to `0` if not provided, which is especially handy for wide images with sprites stacked up along the x-axis.

**If `x` is not provided, the library will extract all the sprites possible with the given dimensions in a grid shape, then return them all as an array.** I personally recommend this usage since it abstracts away a lot of the loop logic that you'd have to delve into in order to retrieve each individual sprite.

```javascript
// ES6 users can use the "new" destructuring and object assignment syntax.
var [idle, run0, run1, run2, skid, jump, ouch] = Sprite(mario)(16)()
hero.sprites = { idle, run0, run1, run2, skid, jump, ouch }
```

#### Returns
An `HTMLCanvasElement` with the requested sprite.

## License
MIT
