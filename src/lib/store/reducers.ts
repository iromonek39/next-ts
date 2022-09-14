import { State, Actions } from 'lib/interfaces'

export const reducer = (state: State, actions: Actions) => {
  switch (actions.type) {
    case 'TOTAL':
      return {
        ...state,
        sandwichePrice: state,
      }
    default:
      return state
  }
}
