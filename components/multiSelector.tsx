// create a React functional component selector with multiple options selected
import React from 'react'

export default function multiSelector() {
    const [selected, setSelected] = React.useState(['chocolate', 'strawberry'])
    const [options, setOptions] = React.useState([
        'chocolate',
        'strawberry',
        'vanilla',
        'caramel',
        'banana',
    }
    ) // options for the selector
    // handle multiple selections on change
    const handleChange = (event) => {
        const { options } = event.target
        const value = []
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }
        setSelected(value)
    }
    



    const onChange = (event) => {
        setSelected(event.target.value)
    } // onChange handler for the selector  
    return (
        <div>
            <h2>MultiSelector</h2>
            <select multiple value={selected} onChange={onChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <p>
                Selected: {selected.join(', ')}
            </p>
        </div>
    )

    
