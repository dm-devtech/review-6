import SchoolReport from './schoolReport'

test('test output', () => {
  const report = new SchoolReport
  expect(report.result("1,10,45,60,80,100")).toEqual("Green: 2\nAmber: 1\nRed: 3")
})
