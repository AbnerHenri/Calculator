import React, { useState } from 'react'

import { Container } from '@mui/material'
import { Box } from '@mui/system'

function Calculator(){

    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState('/')

    function numInput(e){

        if(num === 0){
            setNum(e.target.value)
        }else{
            setNum(num + e.target.value)
        }
        
    }

    function Clear(){
        setNum(0)
    }

    function Porcentage(){
        setNum(num / 100)
    }

    function operatorSign(){
        if(num > 0){
            setNum(-num)
        }else{
            setNum(Math.abs)
        }
        
    }

    
    function operatorHandler(e){
        let input = e.target.value;
        setOperator(input)
        setOldNum(num)
        setNum(0)

    }

    function Calculate(){
        if(operator === '/'){
             setNum(oldNum / num)
        }else if (operator === '*'){
            setNum(oldNum * num)
        }else if(operator === '+'){
            setNum(parseFloat(oldNum) + parseFloat(num))
        }else if(operator === '-'){
            setNum(parseFloat(oldNum) - parseFloat(num))
        }
    }

    return(
<div>
    <Box m={5}/>
    <Container maxWidth='xs' >
        <div className='wrapper'>
            <h1 className='screen'>{num}</h1>
            <button onClick={Clear}>AC</button>
            <button onClick={operatorSign}>+/-</button>
            <button onClick={Porcentage}>%</button>
            <button className='orage' onClick={operatorHandler} value='/'>/</button>
            <button className='gray' onClick={numInput} value={9}>9</button>
            <button className='gray' onClick={numInput} value={8}>8</button>
            <button className='gray' onClick={numInput} value={7}>7</button>
            <button className='orage' onClick={operatorHandler} value='*'>X</button>
            <button className='gray' onClick={numInput} value={6}>6</button>
            <button className='gray' onClick={numInput} value={5}>5</button>
            <button className='gray' onClick={numInput} value={4}>4</button>
            <button className='orage' onClick={operatorHandler} value='-'>-</button>
            <button className='gray' onClick={numInput} value={3}>3</button>
            <button className='gray' onClick={numInput} value={2}>2</button>
            <button className='gray' onClick={numInput} value={1}>1</button>
            <button className='orage' onClick={operatorHandler} value='+'>+</button>
            <button className='smallBut gray' onClick={numInput} value={0}>0</button>
            <button className='gray' onClick={numInput} value={','}>,</button>
            <button className='orage' onClick={Calculate}>=</button>
        </div>
    </Container>
</div>
    )
}

export default Calculator;