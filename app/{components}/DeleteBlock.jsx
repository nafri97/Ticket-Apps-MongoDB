import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon className='text-red hover:cursor-pointer' icon={faX}/>
  )
}

export default DeleteBlock