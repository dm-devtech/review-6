class SchoolReport {

  result(marks) {
    const results = marks.split(",")
    let green = 0
    let amber = 0
    let red = 0
    let uncounted = 0

    for(let i = 0; i < results.length; i++){
      if (results[i] < 0 || results[i] > 100) uncounted += 1
      if (results[i] >= 75 && results[i] <= 100) green += 1
      if (results[i] >= 50 && results[i] <= 74) amber += 1
      if (results[i] <= 49 && results[i] >= 0) red += 1
    }

    const colourResults = []

    if (green > 0) colourResults.push(`Green: ${green}`)
    if (amber > 0) colourResults.push(`Amber: ${amber}`)
    if (red > 0) colourResults.push(`Red: ${red}`)
    if (uncounted > 0) colourResults.push(`Uncounted: ${uncounted}`)

    return colourResults.join("\n")
  }

}

module.exports = SchoolReport
