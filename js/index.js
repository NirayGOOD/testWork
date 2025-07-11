const objects = document.querySelectorAll('.moving-object')
const centerX = window.innerWidth / 2.2
const centerY = window.innerHeight / 4
const radiusX = 330
const radiusY = 120
const rotationAngle = Math.PI / 16

let angles = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3]

function moveObjects() {
	objects.forEach((object, index) => {
		const xEllipse = radiusX * Math.cos(angles[index])
		const yEllipse = radiusY * Math.sin(angles[index])

		const x =
			centerX +
			(xEllipse * Math.cos(rotationAngle) -
				yEllipse * Math.sin(rotationAngle)) -
			15
		const y =
			centerY +
			(xEllipse * Math.sin(rotationAngle) +
				yEllipse * Math.cos(rotationAngle)) -
			15

		object.style.left = x + 'px'
		object.style.top = y + 'px'

		const angleDeg = ((angles[index] * 180) / Math.PI) % 360

		if (angleDeg >= 180 && angleDeg <= 185) {
			object.style.zIndex = '0'
			object.style.transform = 'scale(0.8)'
		} else if (angleDeg >= 335 && angleDeg <= 340) {
			object.style.zIndex = ''
			object.style.transform = 'scale(1.2)'
		}

		angles[index] += 0.005

		if (angles[index] >= Math.PI * 2) {
			angles[index] = 0
		}
	})
	requestAnimationFrame(moveObjects)
}

objects.forEach((object) => {
	object.style.position = 'absolute'
})

moveObjects()
