import totalExpenses from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  const result = totalExpenses([])
  expect(result).toEqual(0)
})

test('should correctly add up a single expense', () => {
  const result = totalExpenses([expenses[0]])
  expect(result).toEqual(195)
})

test('should correctly add up a multiple expenses', () => {
  const result = totalExpenses(expenses)
  expect(result).toEqual(114195)
})
