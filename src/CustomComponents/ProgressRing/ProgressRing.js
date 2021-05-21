import PropTypes from "prop-types"
import "./progressRing.css"

const ProgressRing = (props) => {
  const { radius, stroke, progress } = props
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke='white'
        fill='transparent'
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        // stroke-width={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}

ProgressRing.propTypes = {
  radius: PropTypes.number.isRequired,
  stroke: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired
}

export default ProgressRing
