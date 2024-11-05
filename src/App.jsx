
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  
  const [principle, setPrinciple] = useState("")
  const [rate,setRate] = useState("")
  const [year,setYear] = useState("") 

  const [isPrinciple , setIsPrinciple] = useState(true)
  const [isRate , setIsRate] = useState(true)
  const [isYear , setIsYear] = useState(true) 

  const [interest , setInterest] = useState(0)


  const validate = (e)=>{
    const {name,value} = e.target
    console.log(name);
    console.log(value);

    //match(regExp)
    //^[0-9]$ 
    if(!!value.match('^[0-9]*$')){
      if(name =='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='Rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if(name =='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name=='Rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }

    }
    
  }

  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)

  }
  const calculate=()=>{
    setInterest((principle*rate*year)/100)
  }

  return (
    <>
      <div className='d-flex bg-black justify-content-center align-items-center' style={{height:'100vh', width:'100%'}}> 
        <div className='bg-light p-4 rounded-2' style={{width:'500px'}}>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest Easily</p>

          <div className='bg-warning p-3 mt-4 d-flex  justify-content-center align-items-center rounded flex-column' style={{height:'110px'}}>
            <h1>₹ {interest}</h1> 
            <p> Total Simple Interest</p>
          </div>

          <div className='my-3'>
          <TextField id="outlined-basic" className='w-100' value={principle} name='principle' label="₹ Principle Amount" variant="outlined" onChange={(e)=>validate(e)} />
            { isPrinciple==false && <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={rate} name='Rate' label="Rate of Interest (%)" variant="outlined" onChange={(e)=>validate(e)} />
          {isRate==false && <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={year} name='Year' label="Year (Yr)" variant="outlined" onChange={(e)=>validate(e)} />
          { isYear==false && <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className="mb-3 d-flex justify-content-between">
          <Button disabled={isPrinciple && isRate && isYear? false : true} variant="contained" style={{width:'200px'}} color="success" className='p-3' onClick={calculate}>CALCULATE</Button>
          <Button variant="outlined" style={{width:'200px'}} className='p-3' onClick={handleReset}>RESET</Button>
          </div>



        </div> 


      </div>
    </>
  )
}

export default App
