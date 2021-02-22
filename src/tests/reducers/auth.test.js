import authReducer from '../../reducers/auth'

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({})
})

test('should provide uid on login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123',
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe('abc123')
})

test('should provide no uid on logout', () => {
  const action = {
    type: 'LOGOUT',
  }
  const state = authReducer({ uid: 'abc123' }, action)
  expect(state.uid).toBeFalsy()
})
