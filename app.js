const adder = (a, b) => {
  console.log(a + b)
}

// adder(5, 7)

let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])

adder(a, b)