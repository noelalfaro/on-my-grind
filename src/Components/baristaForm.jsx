import React from 'react'
import { useState } from 'react';
import '../App.css'
import '../index.css'
import RecipeChoices from './recipeChoices';
import drinksJson from "./drinks.json"

const BaristaForm = () => {

  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });

  const ingredients = {
    temperature: ['Hot', 'Cold'],

    syrup: ['Mocha', 'Vanilla', 'Sugar Cookie', 'Brown Sugar', 'Chai', 'Matcha', 'Hazelnut', 'None'],

    milk: ['Cow', 'Oat', 'Almond', 'None'],

    blended: ['Yes', 'No']
  }
  const [currentDrink, setCurrentDrink] = useState('');

  const [trueRecipe, setTrueRecipe] = useState({});


  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  }

  const onNewDrink = () => {
    setInputs({
      'temperature': '',
      'milk': '',
      'syrup': '',
      'blended': ''
    });

    getNextDrink();
    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');
  };

  const onCheckAnswer = () => {
    if (trueRecipe.temp != inputs['temperature']) {
      setCheckedTemperature('wrong'); console.log('test');
    }
    else {
      setCheckedTemperature("correct");
    }

    if (trueRecipe.milk != inputs['milk']) {
      setCheckedMilk('wrong');
    }
    else {
      setCheckedMilk("correct");
    }

    if (trueRecipe.syrup != inputs['syrup']) {
      setCheckedSyrup('wrong');
    }
    else {
      setCheckedSyrup("correct");
    }

    if (trueRecipe.blended != inputs['blended']) {
      setCheckedBlended('wrong');
    }
    else {
      setCheckedBlended("correct");
    }

    if (!ingredients['temperature'].includes(inputs['temperature'])) {
      alert("For Temperature, that isn't even an option!")
    }

    if (!ingredients['milk'].includes(inputs['milk'])) {
      alert("For Milk, that isn't even an option!")
    }

    if (!ingredients['syrup'].includes(inputs['syrup'])) {
      alert("For Syrup, that isn't even an option!")
    }

    if (!ingredients['blended'].includes(inputs['blended'])) {
      alert("For Blended, that isn't even an option!")
    }

  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="new-drink-button"
          className="button newdrink"
          onClick={onNewDrink} id="refreshButton"
        >
          🔄
        </button>
      </div>


      <form className="container">
        <div className="mini-container">
          <h3>Temperature</h3>
          <div className="answer-space" id={correct_temp} >
            {inputs["temperature"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label='temperature'
            choices={ingredients['temperature']}
            checked={inputs['temperature']}
          />
        </div>
        <div className="mini-container">
          <h3>Syrup</h3>
          <div className="answer-space" id={correct_syrup}>
            {inputs["syrup"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
          />
        </div>

        <div className="mini-container">
          <h3>Milk</h3>
          <div className="answer-space" id={correct_milk}>
            {inputs["milk"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
          />
        </div>

        <div className="mini-container">
          <h3>Blended</h3>
          <div className="answer-space" id={correct_blended}>
            {inputs["blended"]}
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
          />
        </div>
      </form >

      <div className='buttonContainers'>
        <button type="submit" className="button submit" onClick={onCheckAnswer}>
          Check Answer
        </button>

        <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>
          New Drink
        </button>
      </div>

    </div>
  )
};
export default BaristaForm;
