import { screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { trans } from '../../../config/i18n'
import { memoryDBFirebase } from '../../mocks/FirestoreMemoryMock'
import { ejecAllMocks, renderAppWithRoute } from '../../helpers'
import store from '../../../redux/store'
import { getWords } from '../../../redux/actions'
import { addStudiedWord } from '../../../redux/config.slice'
ejecAllMocks()

describe('Home', () => {
  beforeAll(() => {
    store.dispatch(addStudiedWord('hola'))
    store.dispatch(addStudiedWord('mundo'))
  })

  it('should render studied words', () => {
    renderAppWithRoute('/')
    expect(screen.getByText('Número de estudiadas: 2')).toBeInTheDocument()
  })
})
