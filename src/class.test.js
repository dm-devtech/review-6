import Sth from './class'

test('test output', () => {
  test = new Sth
  expect(test.joinList()).toBe(5)
})
