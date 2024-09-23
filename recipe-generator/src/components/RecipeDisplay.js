import React from 'react';
import TutorialPlayer from './TutorialPlayer';

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
      <h3>Sustainability Score: {recipe.sustainabilityScore}/10</h3>
      <p>
        {recipe.sustainabilityScore > 7
          ? "Great choice! This recipe has a low environmental impact."
          : recipe.sustainabilityScore > 4
          ? "This recipe has a moderate environmental impact."
          : "Consider trying a more sustainable recipe to reduce environmental impact."}
      </p>
      {recipe.tutorialStreamUrl && (
        <TutorialPlayer streamUrl={recipe.tutorialStreamUrl} />
      )}
    </div>
  );
}
export default RecipeDisplay;
