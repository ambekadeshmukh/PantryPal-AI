import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import RecipeForm from './components/RecipeForm';
import RecipeDisplay from './components/RecipeDisplay';
import VoiceInput from './components/VoiceInput';
import ImageUpload from './components/ImageUpload';
import axios from 'axios';


Amplify.configure({
  // Add your Amplify configuration here
});

function App() {
  const [recipe, setRecipe] = useState(null);

  const handleRecipeGeneration = async (ingredients, dietaryRestrictions) => {
    try {
      const response = await axios.post('https://6gsyuvcyr3.execute-api.us-east-1.amazonaws.com/Prod/generate-recipe', {
        ingredients,
        dietaryRestrictions
      });
      setRecipe(response.data);
    } catch (error) {
      console.error('Error generating recipe:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="App">
      <h1>AI-Powered Recipe Generator</h1>
      <VoiceInput onTranscript={(transcript) => console.log(transcript)} />
      <ImageUpload onUpload={(ingredients) => console.log(ingredients)} />
      <RecipeForm onSubmit={handleRecipeGeneration} />
      {recipe && <RecipeDisplay recipe={recipe} />}
    </div>
  );
}

export default withAuthenticator(App);