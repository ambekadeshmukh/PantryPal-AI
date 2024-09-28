# PantryPal: AI-Powered Recipe Generator

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Introduction

PantryPal is an innovative, AI-powered recipe generator that leverages cutting-edge technologies to create unique, sustainable, and personalized recipes based on the ingredients you already have. By combining natural language processing, image recognition, and personalization algorithms, PantryPal aims to revolutionize home cooking, reduce food waste, and promote sustainable eating habits.

## Features

- AI-powered recipe generation using Claude 3 Sonnet model
- Image recognition for ingredient identification
- Voice input for hands-free interaction
- Personalized recipe recommendations
- Sustainability scoring for environmentally conscious cooking
- Automated generation of simple animated cooking tutorials
- User authentication and profile management
- Responsive web design for desktop and mobile use

## Technologies Used

- Frontend: React, AWS Amplify
- Backend: AWS Lambda, Amazon API Gateway
- AI/ML: Amazon Bedrock (Claude 3 Sonnet), Amazon Rekognition, Amazon Lex, Amazon Personalize
- Database: Amazon DynamoDB
- Authentication: Amazon Cognito
- Storage: Amazon S3
- Text-to-Speech: Amazon Polly
- Monitoring: Amazon CloudWatch

## Architecture


## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/ambekadeshmukh/pantrypal.git
   cd pantrypal
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure AWS services:
   - Set up an AWS account and configure the CLI
   - Create necessary resources (S3 bucket, Lambda functions, API Gateway, etc.)
   - Update the `src/aws-exports.js` file with your AWS configuration

4. Start the development server:
   ```
   npm start
   ```

## Usage

1. Sign up or log in to your PantryPal account
2. Input available ingredients through text, voice, or image upload
3. Specify any dietary restrictions or preferences
4. Click "Generate Recipe" to receive a personalized, sustainable recipe
5. View the recipe details, including ingredients, instructions, and sustainability score.

## API Documentation



## Future Enhancements

- Integration with smart kitchen devices
- Meal planning and grocery list generation
- Nutritional information and calorie tracking
- Community features for sharing and rating recipes
- Advanced video tutorials with step-by-step animations
- Augmented reality cooking assistant

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
