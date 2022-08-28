import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <>
        <h2>Primeiro título</h2>
        <h3>Segundo título</h3>
        <h3>{propFragment}</h3>
    </>
  )
}

export default Fragment;