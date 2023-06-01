import { useState } from 'react';
import {db, auth, timestamp} from './firebase/config.js'
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore';



const Form = () => {
  const [number, setNumber] = useState('');
  const [model, setModel] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [err, setErr]= useState(null)
  const [succ, setSucc]= useState(null)

  const handleNumberChange = (event) => {
    const inputValue = event.target.value;
    const fourDigitNumber = /^[0-9]{0,4}$/;
    if (inputValue === '' || fourDigitNumber.test(inputValue)) {
      setNumber(inputValue);
    }
  };


  const handleTextChange = (event) => {
    setModel(event.target.value);
  };
  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      if (!(number.trim()) || number.toString().length != 4 || isNaN(number)){
        throw new Error("Invalid Number Plate");
      }

      if(!(model.trim())) throw new Error("Enter the model name");
      
      const data = {
        numberPlate: number,
        vehicle: radioValue,
        model,
      };

     const fireDoc= await setDoc(doc(db, "EV", data.numberPlate), data)
      console.log(fireDoc)

      // Reset form
      setNumber('');
      setRadioValue('');
      setModel('');

      setSucc(true)
      setTimeout(() =>{
        setSucc(null)
      },2000)

    } catch (error) {
      // console.error('Error adding document: ', error.message);
      setErr(error.message)
      setTimeout(() =>{
        setErr(null)
      },2000)
    }
  };

  return (
    <form className="mx-auto max-w-md">
      <h1 className='underline my-10 text-xl text-center'>EV PROJECT FORM</h1>
      <div className="mb-4 mx-5 my-5">
        <label htmlFor="numberInput" className="block mb-2 font-semibold text-gray-700">
          Number Plate (4 digits)
        </label>
        <input
          type="number"
          id="numberInput"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          value={number}
          onChange={handleNumberChange}
          maxLength={4}
          required
        />
      </div>
      <div className="mb-4 mx-5">
        <label htmlFor="textInput" className="block mb-2 font-semibold text-gray-700">
          Vehicle model:
        </label>
        <input
          type="text"
          id="textInput"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          value={model}
          onChange={handleTextChange}
          required
        />
      </div>
      <div className="mb-4 mx-5">
        <p className="mb-2 font-semibold text-gray-700">Vehicle</p>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="radioOption"
            value="option1"
            checked={radioValue === 'option1'}
            onChange={handleRadioChange}
          />
          <span className="ml-2">EV 2 wheeler</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            className="form-radio"
            name="radioOption"
            value="option2"
            checked={radioValue === 'option2'}
            onChange={handleRadioChange}
          />
          <span className="ml-2">EV car</span>
        </label>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className='my-5 text-center'>
      <p className="bg-red-600 text-red-100">{err}</p>
      {succ && <p className="bg-green-600 text-green-100">Vehicle added to DB!</p>}
      </div>
    </form>
  );
};

export default Form;
