module.exports = function use(image) {
  return function config(width, height) {
    if (isNaN(height))
      height = width
    return function extract(x, y) {
      if (isNaN(x)) {
        var sprites = []
        var cols = image.width  / width
        var rows = image.height / height
        var i = Math.round(cols * rows)
        while (i--) {
          var x = i % cols
          var y = (i - x) / cols
          sprites[i] = extract(x, y)
        }
        return sprites
      }
      if (isNaN(y))
        y = 0
      var canvas = document.createElement('canvas')
      var context = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height
      context.drawImage(image, -x * width, -y * height)
      return canvas
    }
  }
}
