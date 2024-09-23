import React, { useState } from 'react';

function RecipeForm({ onSubmit }) {
  const [ingredients, setIngredients] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(ingredients, dietaryRestrictions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients, separated by commas"
      />
      <input
        type="text"
        value={dietaryRestrictions}
        onChange={(e) => setDietaryRestrictions(e.target.value)}
        placeholder="Enter any dietary restrictions"
      />
      <button type="submit">Generate Recipe</button>
    </form>
  );
}

export default RecipeForm;