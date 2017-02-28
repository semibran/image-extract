module.exports = function use(image) {
	return function config(width, height) {
		var cols = image.width  / width
		var rows = image.height / height
		return function extract(x, y) {
			if (isNaN(x)) {
				var sprites = []
				for (var y = rows; y--;)
					for (var x = cols; x--;)
						sprites[y * cols + x] = extract(x, y)
				return sprites
			}
			if (!y) {
				var i = x
				x = i % cols
				y = (i - x) / cols
			}
			var canvas = document.createElement('canvas')
			var context = canvas.getContext('2d')
			canvas.width = width
			canvas.height = height
			context.drawImage(image, -x * width, -y * height)
			return canvas
		}
	}
}
