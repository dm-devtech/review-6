class SchoolReport {

  result(marks) {
    const results = marks.split(",")
    let green = 0
    let amber = 0
    let red = 0

    for(let i = 0; i < results.length; i++){
      if (results[i] >= 75) green += 1
      if (results[i] >= 50 && results[i] <= 74) amber += 1
      if (results[i] <= 49) red += 1
    }

    const colourResults = `Green: ${green}\nAmber: ${amber}\nRed: ${red}`

    return colourResults
  }

}

module.exports = SchoolReport
