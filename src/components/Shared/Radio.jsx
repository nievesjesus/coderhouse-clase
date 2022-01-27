const Radio = ({ options, onSelect }) => {
    
    const onClick = (option) => {
        onSelect(option)
    }
    return(
        <div>
          {options.map(option => { return (<div style={{ backgroundColor: "#c1c1c1"}} onClick={ () => onClick(option) }>{option}</div>)} )}
        </div>
    )
} 

export default Radio 