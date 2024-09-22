import React from 'react';

function RecipeDisplay({ recipe }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <p>Sustainability Score: {recipe.sustainabilityScore}/10</p>
    </div>
  );
}

export default RecipeDisplay;