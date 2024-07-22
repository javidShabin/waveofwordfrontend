import React from 'react'

export default function SelecAuth({person}) {
    console.log(person)
  return (
    <div>
      <h1>{person.authName}</h1>
      <p>{person.description}</p>
    </div>
  )
}
