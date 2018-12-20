import * as React from 'react'

import { component } from 'redux-fractions'

const outputStyle: React.CSSProperties = {
  fontFamily: 'monospace',
  color: 'blue',
  borderBottom: '2px solid',
  padding: '1em'
}

const buttonStyle: React.CSSProperties = {
  fontSize: '25pt',
  color: '#32e01f',
  borderStyle: 'groove',
  borderColor: 'black',
  backgroundColor: 'transparent'
}

export const Calculator = component('calculator').render(() => (
  <div>
    <h1 style={outputStyle}>dwwdwdw</h1>
    <button style={buttonStyle}>0</button>
    <button style={buttonStyle}>1</button>
    <button style={buttonStyle}>2</button>
    <button style={buttonStyle}>3</button>
    <button style={buttonStyle}>4</button>
    <button style={buttonStyle}>5</button>
    <button style={buttonStyle}>6</button>
    <button style={buttonStyle}>7</button>
    <button style={buttonStyle}>8</button>
    <button style={buttonStyle}>9</button>
  </div>
))
