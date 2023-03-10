import React, { Component, useEffect, useState } from 'react'
import '../App.css'


const RecipeChoices = ({ handleChange, label, choices, checked, currentVal }) => {




  return (
    <>
      <div className="radio-buttons">
        <input
          type="text"
          name={label}
          value={currentVal}
          placeholder="Guess the ingredient..."
          onChange={handleChange}
          className="textbox"
        />
        {choices &&
          choices.map((choice) => (
            <li key={choice}>
              {choice}
            </li>
          ))}
      </div>
      {/* <h1 className="radio-buttons">hi</h1> */}
    </>
  );
};

export default RecipeChoices;