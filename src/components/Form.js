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
    const inputTitleChange = (e) => {
        const textValue = e.target.value
        setInputTitle(textValue)
    }
    const inputTextChange = (e) => {
        const textValue = e.target.value
        setInputText(textValue)
    }

    const colorBlue = () => { setCardColor('light-blue') }
    const colorGreen = () => { setCardColor('green') }
    const colorRed = () => { setCardColor('red') }
    const colorDark = () => { setCardColor('dark') }
    const colorWhite = () => { setCardColor('white') }

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
    <div className="form">
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
            <div className="input-color shadow">
                <div onClick={colorBlue} className="light-blue"></div>
                <div onClick={colorGreen} className="green"></div>
                <div onClick={colorRed} className="red"></div>
                <div onClick={colorDark} className="dark"></div>
                <div onClick={colorWhite} className="white"></div>
            </div>
        </form>
    </div>
    );
}

export default Form;