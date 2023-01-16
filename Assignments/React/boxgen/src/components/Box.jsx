
const Box = (props) => {
    // Making color the props variable will allow you to create box with color.. BUT
    // we can take futher by deconstructing the box and placing the box as the variable. 
    // const { color } = props;
    const { box } = props;
    const { width, height, color } = box
    return (

        // This is the easy way of creating the box. But see below which allows users
        // to put in not just color but width, and height.
        // <div
        //     Just using the color  you would use below as you added default.
        //     style={{
        //         width: "100px",
        //         height: "100px",
        //         backgroundColor: color,
        //         margin: "10px"
        //     }}
        // ></div>

        <div style={{
            width: width + "px",
            height: height + "px",
            backgroundColor: color,
            margin: "10px"
        }}>

        </div>

    )
}

export default Box;