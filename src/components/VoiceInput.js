import React, { useState, useEffect } from 'react';
import { Storage, Interactions } from 'aws-amplify';

function VoiceInput({ onTranscript }) {
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Interactions.onComplete('RecipeInputBot', (complete) => {
      const ingredient = complete.slots.ingredient;
      if (ingredient) {
        onTranscript(ingredient);
      }
    });
  }, [onTranscript]);

  const startListening = async () => {
    setIsListening(true);
    try {
      await Interactions.send('RecipeInputBot', 'start');
    } catch (error) {
      console.error('Error with voice input:', error);
    }
    setIsListening(false);
  };

  return (
    <button onClick={startListening} disabled={isListening}>
      {isListening ? 'Listening...' : 'Start Voice Input'}
    </button>
  );
}

export default VoiceInput;