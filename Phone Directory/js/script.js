// Solution

const phone = (a, b) => {
    a = a.split("\n").filter(x => x.includes(b))
    if (a.length > 1) return "Error => Too many people: " + b
    if (a.length < 1) return "Error => Not found: " + b
    let name = a[0].match(/<.+>/)[0].slice(1, -1)
    let address = a[0].replace(/<.+>|\+\d\d?-(\d{3}-){2}\d{4}|[;$*/?,:!]/g, "").replace(/_| +/g, " ")
    return `Phone => ${b}, Name => ${name}, Address => ${address.trim()}`
  }