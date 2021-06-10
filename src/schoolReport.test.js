import SchoolReport from './schoolReport'

test('test output as per example', () => {
  const report = new SchoolReport
  expect(report.result("1,10,45,60,80,100")).toEqual("Green: 2\nAmber: 1\nRed: 3")
})

test('test output with different results', () => {
  const report = new SchoolReport
  expect(report.result("1,10,5,5,5,45,50,60,80,100,75,80")).toEqual("Green: 4\nAmber: 2\nRed: 6")
})

test('edge case of score above 100 and below 0', () => {
  const report = new SchoolReport
  expect(report.result("-5, 150, 50, 80")).toEqual("Green: 1\nAmber: 1\nUncounted: 2")
})

test('edge case of score above 100 and below 0', () => {
  const report = new SchoolReport
  expect(report.result("50")).toEqual("Amber: 1")
})
