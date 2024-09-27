import React from "react"
function Hello() {
    const hiAll = () => {
        alert("Hello everyone")
    }
    const hiYou = (name) => {
        alert("Hello " + name)
    }
    return (
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={() => hiYou("Jimmy")}>Hi you</button>
        </span>

    )


}
export default Hello
