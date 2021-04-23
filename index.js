// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter(num) {
    this.radius = num / 2
  }

  get circumference() {
    return this.diameter * Math.PI
  }

  set circumference(num) {
    this.radius = num / 2 / Math.PI
  }

  get area() {
    return this.radius * this.radius * Math.PI
  }

  set area(num) {
    this.radius = Math.sqrt(num / Math.PI)
  }
}

const c1 = new Circle(1)
console.log(c1.radius)
console.log(c1.area)
c1.circumference = (10 + 10) * Math.PI
console.log(c1.radius)
console.log(c1.area)
c1.area = 100 * 100 * Math.PI
console.log(c1.radius)
console.log(c1.area)