'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function BmiCalculator() {
  // State for form inputs
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
  const [height, setHeight] = useState({ value: '', unit: 'cm' });
  const [weight, setWeight] = useState({ value: '', unit: 'kg' });
  
  // State for BMI result
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [error, setError] = useState('');
  
  // Handle unit system change
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    // Reset values when changing units
    setHeight({ 
      value: '', 
      unit: newUnit === 'metric' ? 'cm' : 'ft'
    });
    setWeight({ 
      value: '', 
      unit: newUnit === 'metric' ? 'kg' : 'lb'
    });
    setBmi(null);
    setBmiCategory('');
    setError('');
  };
  
  // Calculate BMI when height or weight changes
  useEffect(() => {
    calculateBmi();
    // Adding console log to debug
    console.log('useEffect triggered with:', { height: height.value, weight: weight.value, unit });
  }, [height.value, weight.value, unit]);
  
  // BMI calculation function
  const calculateBmi = () => {
    // Clear previous results
    setBmi(null);
    setBmiCategory('');
    setError('');
    
    // Validate inputs
    if (!height.value || !weight.value) {
      console.log('Missing height or weight value');
      return;
    }
    
    try {
      let bmiValue;
      
      if (unit === 'metric') {
        // Metric calculation: weight (kg) / height (m)²
        const heightInMeters = parseFloat(height.value) / 100;
        const weightInKg = parseFloat(weight.value);
        
        console.log('Metric calculation with:', { heightInMeters, weightInKg });
        
        if (heightInMeters <= 0 || weightInKg <= 0) {
          setError('Please enter valid height and weight values');
          return;
        }
        
        bmiValue = weightInKg / (heightInMeters * heightInMeters);
      } else {
        // Imperial calculation: (weight (lb) / height (in)²) × 703
        const heightInInches = parseFloat(height.value) * 12;
        const weightInLbs = parseFloat(weight.value);
        
        console.log('Imperial calculation with:', { heightInInches, weightInLbs });
        
        if (heightInInches <= 0 || weightInLbs <= 0) {
          setError('Please enter valid height and weight values');
          return;
        }
        
        bmiValue = (weightInLbs / (heightInInches * heightInInches)) * 703;
      }
      
      // Round to 1 decimal place
      bmiValue = Math.round(bmiValue * 10) / 10;
      
      // Set BMI and category
      setBmi(bmiValue);
      setBmiCategory(getBmiCategory(bmiValue));
      
      console.log('BMI calculated:', bmiValue, getBmiCategory(bmiValue));
    } catch (err) {
      console.error('BMI calculation error:', err);
      setError('An error occurred while calculating BMI');
    }
  };
  
  // Determine BMI category
  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };
  
  // Get color based on BMI category
  const getCategoryColor = () => {
    if (!bmiCategory) return 'bg-gray-200';
    
    switch (bmiCategory) {
      case 'Underweight':
        return 'bg-blue-500';
      case 'Normal weight':
        return 'bg-green-500';
      case 'Overweight':
        return 'bg-yellow-500';
      case 'Obese':
        return 'bg-red-500';
      default:
        return 'bg-gray-200';
    }
  };
  
  // Calculate position on the BMI scale (for the gauge)
  const getBmiPosition = () => {
    if (!bmi) return 0;
    
    // Clamp BMI between 10 and 40 for display purposes
    const clampedBmi = Math.max(10, Math.min(bmi, 40));
    // Convert to percentage (10 = 0%, 40 = 100%)
    return ((clampedBmi - 10) / 30) * 100;
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Unit Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              unit === 'metric'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-200`}
            onClick={() => handleUnitChange('metric')}
          >
            Metric (cm/kg)
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              unit === 'imperial'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-200`}
            onClick={() => handleUnitChange('imperial')}
          >
            Imperial (ft/lb)
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Height Input */}
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Height ({unit === 'metric' ? 'cm' : 'ft'})
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="height"
                id="height"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder={unit === 'metric' ? '175' : '5.9'}
                value={height.value}
                onChange={(e) => setHeight({ ...height, value: e.target.value })}
                min="0"
                step={unit === 'metric' ? '1' : '0.1'}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <span className="text-gray-500 sm:text-sm px-3">
                  {unit === 'metric' ? 'cm' : 'ft'}
                </span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {unit === 'metric'
                ? 'Enter your height in centimeters'
                : 'Enter your height in feet (e.g., 5.9 for 5′9″)'}
            </p>
          </div>
          
          {/* Weight Input */}
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Weight ({unit === 'metric' ? 'kg' : 'lb'})
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="weight"
                id="weight"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder={unit === 'metric' ? '70' : '154'}
                value={weight.value}
                onChange={(e) => setWeight({ ...weight, value: e.target.value })}
                min="0"
                step={unit === 'metric' ? '0.1' : '1'}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <span className="text-gray-500 sm:text-sm px-3">
                  {unit === 'metric' ? 'kg' : 'lb'}
                </span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {unit === 'metric'
                ? 'Enter your weight in kilograms'
                : 'Enter your weight in pounds'}
            </p>
          </div>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        {/* Results Display */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your Result</h3>
          
          {/* Always show the result section, but conditionally show content */}
          <div className="text-center">
            {bmi ? (
              <>
                <div className="inline-block px-6 py-3 rounded-full bg-gray-100 mb-4">
                  <span className="text-3xl font-bold text-gray-900">{bmi}</span>
                  <span className="text-gray-600 ml-1">kg/m²</span>
                </div>
                
                <p className="text-lg font-medium mb-4">
                  Your BMI indicates you are{' '}
                  <span
                    className={`font-bold ${
                      bmiCategory === 'Normal weight'
                        ? 'text-green-600'
                        : bmiCategory === 'Underweight'
                        ? 'text-blue-600'
                        : bmiCategory === 'Overweight'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  >
                    {bmiCategory}
                  </span>
                </p>
                
                {/* BMI Scale Visualization */}
                <div className="mt-6 mb-4">
                  <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${getBmiPosition()}%`,
                        background: `linear-gradient(90deg, #3b82f6, #10b981, #f59e0b, #ef4444)`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>10</span>
                    <span>20</span>
                    <span>30</span>
                    <span>40+</span>
                  </div>
                  <div className="flex justify-between text-xs font-medium mt-2">
                    <span className="text-blue-600">Underweight</span>
                    <span className="text-green-600">Normal</span>
                    <span className="text-yellow-600">Overweight</span>
                    <span className="text-red-600">Obese</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Enter your height and weight to see your BMI result
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* CTA Placeholder */}
        {bmi && (
          <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Take the Next Step</h3>
            <p className="text-gray-600 mb-4">
              Now that you know your BMI, discover how we can help you achieve your health goals.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Learn More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
