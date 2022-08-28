import React from 'react'

const Container = ({children, testingValue}) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <p>o valor é: {testingValue}</p>
    </div>
  )
}

export default Container;