import React, { useState } from 'react'
import Display from "./Display";


const Keyboard = () => {
    const [list, setList] = useState([])
    const [answer, setAnswer] = useState(0)
    console.log(list)

    const handleClick = (e) => {
        setList([...list, Number(e.target.value)])
    }

    const handleElement = (e) => {
        setList([...list, e.target.value])
    }

    const handleBack = () => {
        const newList = list.filter((_, i) => i !== list.length - 1)
        setList(newList)
    }

    const handleDelete = () => {
        setList([])
        setAnswer(0)
    }

    const handleEnter = () => {
        const string = list.join("")
        setAnswer(eval(string))
    }

    return (
        <div>
            <Display list={list} />
            <div className='text-end text-lg font-bold m-4'>
                {answer} =
            </div>
            <div className='flex bg-slate-200 my-2 mx-2 justify-between'>
                <div>
                    <div>
                        <button className='bg-black text-white mr-2' value="1" onClick={handleClick}>1</button>
                        <button className='bg-black text-white' value="2" onClick={handleClick}>2</button>
                        <button className='bg-black text-white' value="3" onClick={handleClick}>3</button>
                    </div>
                    <div>
                        <button value="4" onClick={handleClick}>4</button>
                        <button value="5" onClick={handleClick}>5</button>
                        <button value="6" onClick={handleClick}>6</button>
                    </div>
                    <div>
                        <button value="7" onClick={handleClick}>7</button>
                        <button value="8" onClick={handleClick}>8</button>
                        <button value="9" onClick={handleClick}>9</button>
                    </div>
                    <div>
                        <button value="0" onClick={handleClick}>0</button>
                        <button className='pl-9' value="." onClick={handleElement}>.</button>
                        <button className='pl-9' value="*" onClick={handleElement}>*</button>
                    </div>
                    <div>
                        <button className='pl-8' value="+" onClick={handleElement}>+</button>
                        <button className='pl-8' value="-" onClick={handleElement}>-</button>
                        <button className='pl-8' value="/" onClick={handleElement}>/</button>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <button value="%">%</button>
                        <button onClick={handleEnter}>ENTER</button>
                        <button onClick={handleDelete}>DELETE</button>
                        <button onClick={handleBack}>BACK</button>
                        <button className='bg-white text-black'>MANOJ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keyboard