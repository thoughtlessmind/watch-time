import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const Dialog = (props) => {
  const { open, onClose, children, className } = props

  const test = () => {
    document.body.style.overflowY = "hidden"
    document.addEventListener("keyup", ex)
    // document.body.style.top = `-${window.scrollY}px`
  }

  const ex = (e) => {
    console.log(e)
    if (e.keyCode === 27) onClose()
    document.removeEventListener("keyup", ex)
  }

  const unset = () => {
    document.body.style.overflowY = "unset"
    document.removeEventListener("keyup", ex)
  }

  useEffect(() => {
    if (open) test()
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
        onKeyPress={ex}
        role='presentation'
        style={{ backgroundColor: "rgb(0 0 0 / 55%)", zIndex: "-1" }}
        className='absolute w-full h-full'
      />
      <div
        style={{ width: "70%", height: "80%", minHeight: "300px" }}
        className={`z-10 bg-current rounded shadow-lg bg-gray-800 ${className}`}
      >
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
