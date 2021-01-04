import React from "react";

const Form = ({
    inputTitle, 
    setInputTitle, 
    inputText, 
    setInputText, 
    todos, 
    setTodos, 
    cardColor,
    setCardColor
}) => {
    const colors = ["light-blue", "pink", "green", "yellow", "red", "dark", "white"]

    const inputTitleChange = (e) => {
        const textValue = e.target.value
        setInputTitle(textValue)
    }
    const inputTextChange = (e) => {
        const textValue = e.target.value
        setInputText(textValue)
    }

    const colorHandler = (e) => {
        const color = e.target.dataset.color
        setCardColor(color)
    }

    const addTodos = (e) => {
        e.preventDefault()
        if(inputText !== '') {
            setTodos([...todos, {
                title: inputTitle, 
                text: inputText, 
                id: Math.random() * 10, 
                completed:false, 
                color: cardColor}])
            setInputText("")
            setInputTitle("")
            setCardColor("white")
        } else {
            alert("Cannot add empty todos")
        }
    }

    return(
    <>
        <form onSubmit={addTodos}>
            <div className={`note-text shadow ${cardColor}`}>
                <input 
                    onChange={inputTitleChange} 
                    value={inputTitle} 
                    type="text" 
                    placeholder="Title" 
                />
                <textarea 
                    onChange={inputTextChange} 
                    type="text" 
                    value={inputText}
                    placeholder="What to do..."></textarea>
                <button type="submit">+</button>
            </div>
            <div className="input-color-wrapper shadow">
                <div className="input-color">
                    {colors.map(color => (
                        <div 
                            onClick={colorHandler} 
                            data-color={color} 
                            className={`color-option ${color} ${cardColor === color ? 'active' : ''}`}>
                        </div>
                    ))}
                </div>
            </div>
        </form>
    </>
    );
}

export default Form;