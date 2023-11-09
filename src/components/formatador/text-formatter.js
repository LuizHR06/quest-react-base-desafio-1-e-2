import './text-formatter.css'

const TextFormatter = (props) => {
    return <p className='texto' style={{ color: props.color}}>{props.text}</p>
}

export default TextFormatter