const Select = ({ options, onSelect }) => {

    const onClick = (option) => {
        onSelect(option)
    }
        
    return(
        <ul>
          {options.map(option => { return (<li  onClick={ () => onClick(option) }>{option}</li>)} )}
        </ul>
    )
} 

export default Select 