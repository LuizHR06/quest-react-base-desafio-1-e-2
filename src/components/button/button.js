import './button.css'

const Button = (props) => {
    return (
        <div className='btn-container'>
            <button className='btn' onClick={() => { alert(`A label desse botão é ${props.label}`) }}>Clique aqui</button>
        </div>
    )
}

export default Button