/*!
 * Determine if an element is in the viewport
 * @param  {Node}  elem The element
 * @return {Boolean}  Returns true if element is in the viewport
 */
const isInViewport = (elem) => {
  const distance = elem.getBoundingClientRect()
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}

export default isInViewport
