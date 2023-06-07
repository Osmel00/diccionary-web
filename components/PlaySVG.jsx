
const PlaySvg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width='75px'  height= '75px'  {...props}>
    <g fill="#A445ED"  fillRule="evenodd">
      <circle cx={37.5} cy={37.5} r={37.5} opacity={props.opacity? 1 : 0.25} />
      <path d="M29 27v21l21-10.5z" fill={props.fill}  />
    </g>
  </svg>
)
export default PlaySvg
//opacity={0.25}
//opacity={props.opacity} 