import React from 'react'
import ReactDom from 'react-dom'
import { LoginApp } from './LoginApp'

import './index.css'

const divRoot = document.querySelector('#root')

ReactDom.render(
  <LoginApp />,
  divRoot
)