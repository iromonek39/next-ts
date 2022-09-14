import { createContext, Dispatch } from 'react'
import { State, Actions } from 'lib/interfaces'

const context = createContext<{
  state: State
  dispatch: Dispatch<Actions>
}>(null)
export default context
