import * as React from 'react'

import { render } from 'react-dom'

import { Calculator } from './calculator'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { fractionReducer } from 'redux-fractions'

const appStore = createStore(fractionReducer)

render(
  <Provider store={appStore}>
    <Calculator />
  </Provider>,
  document.getElementById('container')
)
