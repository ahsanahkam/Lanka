
import React, { useState } from 'react';

interface QuizState {
  travelStyle: string;
  duration: string;
  budget: string;
}

const TrailFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizState>({
    travelStyle: '',
    duration: '',
    budget: ''
  });
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const questions = [
    {
      question: "What's your preferred travel style?",
      options: [
        { value: 'adventure', label: 'Adventure & Exploration' },
        { value: 'relaxation', label: 'Relaxation & Wellness' },
        { value: 'culture', label: 'Culture & Heritage' },
        { value: 'wildlife', label: 'Wildlife & Nature' }
      ],
      key: 'travelStyle' as keyof QuizState
    },
    {
      question: "How long is your trip?",
      options: [
        { value: '3-5', label: '3-5 days' },
        { value: '6-8', label: '6-8 days' },
        { value: '9+', label: '9+ days' }
      ],
      key: 'duration' as keyof QuizState
    },
    {
      question: "What's your budget range?",
      options: [
        { value: 'budget', label: 'Budget (Under $50/day)' },
        { value: 'mid-range', label: 'Mid-range ($50-150/day)' },
        { value: 'luxury', label: 'Luxury ($150+/day)' }
      ],
      key: 'budget' as keyof QuizState
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentStep].key]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Generate recommendation based on answers
      const recommendedTrail = getRecommendation(newAnswers);
      setRecommendation(recommendedTrail);
    }
  };

  const getRecommendation = (answers: QuizState): string => {
    if (answers.travelStyle === 'culture') return 'Cultural Trail';
    if (answers.travelStyle === 'wildlife') return 'Wildlife Trail';
    if (answers.travelStyle === 'relaxation') return 'Coastal Trail';
    return 'Highland Trail';
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({ travelStyle: '', duration: '', budget: '' });
    setRecommendation(null);
  };

  const trailDescriptions = {
    'Cultural Trail': 'Explore ancient temples, royal palaces, and UNESCO World Heritage sites including Sigiriya and Anuradhapura.',
    'Wildlife Trail': 'Embark on thrilling safaris in Yala and Udawalawe National Parks to spot elephants, leopards, and exotic birds.',
    'Coastal Trail': 'Relax on pristine beaches, explore colonial Galle Fort, and enjoy water sports along the southern coast.',
    'Highland Trail': 'Journey through misty mountains, tea plantations, and charming hill stations like Ella and Nuwara Eliya.'
  };

  return (
    <section id="finder" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Trail</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take our quick quiz to get a personalized trail recommendation
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!recommendation ? (
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">Question {currentStep + 1} of {questions.length}</span>
                  <span className="text-sm font-medium text-gray-500">{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {questions[currentStep].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full p-4 text-left bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg transition-all duration-200 hover:shadow-md"
                  >
                    <span className="font-medium text-gray-800">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Perfect Match Found!</h3>
                <h4 className="text-3xl font-bold text-emerald-600 mb-4">{recommendation}</h4>
                <p className="text-gray-600 mb-6">
                  {trailDescriptions[recommendation as keyof typeof trailDescriptions]}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  Explore This Trail
                </button>
                <button 
                  onClick={resetQuiz}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Take Quiz Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrailFinder;
