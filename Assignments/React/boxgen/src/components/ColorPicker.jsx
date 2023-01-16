import { useState } from 'react'

// This defines the function and has props as an argument so you are able to 
// access props from other components. 
const ColorPicker = (props) => {
    // State variables that will be apart of your form. You want to mirror the form 
    // data here. The variable below is asking for colors so when someone types in a color
    // the box will be created with that color. 
    // const [color, setColor] = useState('')
    // const [width, setWidth] = useState('')
    // const [height, setHeight] = useState('')
    //USING COMBINDED STATE......

    const [newBox, setNewBox] = useState({
        color: "",
        width: "",
        height: ""
    })

    // This will deconstruct the new box so they can be acceess in the input value 
    const { color, width, height } = newBox;

    const handleOnChange = (e) => {
        setNewBox({
            ...newBox,
            [e.target.name]: e.target.value
        })
    }

    // Thsi is deconstruct the handle submit function passed through from the App.js
    // component. You will now be able to use in this component and tie is to the 
    // onSubmit on your form.  
    const { handleSubmit } = props;

    return (
        // This onSubmit function calls on a the handleSubmit function. 
        <form onSubmit={(e) => handleSubmit(e, newBox)}>
            <input type="text" placeholder='color'
                // onChange allows you to calls on useState which uses setState to set the color you typed.
                // Also you will write an anonmyous focus that will pass in the event. Be sure to to add the
                // the value as well. 
                name="color"
                onChange={handleOnChange}
                value={color} />
            <input type="text" placeholder='width'
                name="width"
                onChange={handleOnChange}
                value={width} />

            <input type="text" placeholder='height'
                name="height"
                onChange={handleOnChange}
                value={height} />
            <input type="submit" value='Add Box' />

            {/* Old Example  */}
            {/* <input type="text" placeholder='height'
                name="height"
                onChange={(e) => setHeight(e.target.value)}
                value={height} />
            <input type="submit" value='Add Box' /> */}
        </form>


    )
}

export default ColorPicker