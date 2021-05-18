import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const Dialog = (props) => {
  const { open, onClose, children, className } = props

  const dialogCloseHandler = (e) => {
    if (e.keyCode === 27) onClose()
    document.removeEventListener("keyup", dialogCloseHandler)
  }

  const attachCloseEventListener = () => {
    document.body.style.overflowY = "hidden"
    document.addEventListener("keyup", dialogCloseHandler)
    // document.body.style.top = `-${window.scrollY}px`
  }

  const unset = () => {
    document.body.style.overflowY = "unset"
    document.removeEventListener("keyup", dialogCloseHandler)
  }

  useEffect(() => {
    if (open) attachCloseEventListener()
    else unset()
  }, [open])

  return (
    <div
      className={clsx({
        "fixed z-50 inset-0 w-screen h-screen flex items-center justify-center": open,
        hidden: !open
      })}
    >
      <div
        onClick={onClose}
        onKeyPress={dialogCloseHandler}
        role='presentation'
        style={{ backgroundColor: "rgb(0 0 0 / 55%)", zIndex: "-1" }}
        className='absolute w-full h-full'
      />
      <div
        style={{ width: "70%", height: "80%", minHeight: "300px" }}
        className={`z-10 bg-current rounded shadow-lg bg-gray-800 relative ${className}`}
      >
        <button
          onClick={onClose}
          type='button'
          className='absolute  text-2xl right-5 transform  rotate-45	 top-5 rounded-full hover:bg-gray-500 text-gray-500 hover:text-gray-800 cursor-pointer z-40 flex items-center justify-center h-6 w-6'
        >
          +{/* <span className='text-2xl '>+</span> */}
        </button>
        {children}
      </div>
    </div>
  )
}

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
}

Dialog.defaultProps = {
  children: null,
  className: ""
}

export default Dialog
