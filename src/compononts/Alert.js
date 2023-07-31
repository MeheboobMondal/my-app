import React from 'react'

export default function Alert(props) {
    // const text =(word) => {
    //     const a = word.toLowerCase()
    //     return a.charAt[0].toUpperCase() + a.slice(1);
    // }
  return (
    props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{(props.alert.type)}</strong>:{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
