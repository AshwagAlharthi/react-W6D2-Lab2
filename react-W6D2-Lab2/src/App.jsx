import { useState } from 'react'
import reactLogo from './assets/react.svg'
import underWeight from './assets/underWeight.png'
import normalWeight from './assets/normalWeight.png'
import overWeight from './assets/overWeight.png'
import obesity from './assets/obesity.png'
import extremeObesity from './assets/extremeObesity.png'
import './App.css'

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [resultType, setResultType] = useState("");
  const [image, setImage] = useState("");
  const [nWeight, setNWeight] = useState("");


  const handleWeight = (e) => {
    setWeight(e.target.value);
  }

  const handleHeight = (e) => {
    setHeight(e.target.value);
  }

  const claculateResult = () => {
    const w = Number(weight);
    const h = Number(height) / 100;
    //  2.2 x BMI + (3.5 x BMI) x (Height in meters minus 1.5)
    const BMI = (w / (h * h));
    const nWeight = 2.2 * BMI + (3.5 * BMI) * (h - 1.5);
    // const nWeight = (BMI *  (h * h)).toFixed(2);

    setResult(BMI.toFixed(1));
    setNWeight(nWeight.toFixed(1));

    if (Number(result) < 18.5) {
      setResultType("underWeight");
      setImage(underWeight);
    } else if (18.5 <= Number(result) && Number(result) <= 24.9) {
      setResultType("Normal Weight");
      setImage(normalWeight);
    } else if (24.9 <= Number(result) && Number(result) <= 29.9) {
      setResultType("OverWeight");
      setImage(overWeight);
    } else if (29.9 <= Number(result) && Number(result) <= 34.9) {
      setResultType("Obesity");
      setImage(obesity);
    } else if (34.9 <= Number(result)) {
      setResultType("Extreme Obesity");
      setImage(extremeObesity);
    }

  }

  return (
    <div className='bg-white w-full h-screen text-black flex flex-col justify-evenly items-center'>
      <div className='flex flex-col justify-evenly items-center  w-[45vw] h-[50vh] bg-gray-400 rounded-2xl max-sm:w-[90vw]'>
        <h1 className='text-5xl text-black font-bold'>IBM Calculation</h1>
        <input type="text"
          placeholder="Enter Your weight"
          className="text-white input input-bordered w-full max-w-xs"
          value={weight}
          onChange={handleWeight} />

        <input type="text"
          placeholder="Enter Your height"
          className="text-white input input-bordered w-full max-w-xs"
          value={height}
          onChange={handleHeight} />
        <button className='btn' onClick={claculateResult}>Calculate</button>
        {/* <p>{result}</p> */}

      </div>
      {result &&
        <div className='w-[45vw] h-[45vh] bg-gray-400 rounded-2xl max-sm:w-[90vw]'>
          <div className='flex justify-evenly items-center w-[100%] h-[100%]'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <div className='bg-green-900 text-white p-2 rounded-xl'>The Ideal body weight is: {nWeight}</div>
              <div className='font-bold'>The IBM is {result} - {resultType}</div>
            </div>

            <div><img src={image} /></div>
          </div>

        </div>
      }
    </div>
  )
}

export default App
