import React from 'react';
import { HelpCircle, FileText, Quote, Brain, Shield } from 'lucide-react';

export function HelpTab() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Getting Started</h2>
        </div>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600">
            Welcome to the Workers' Compensation Insurance Rating Application. This guide will help you understand how to use the system effectively.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Managing Applications</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Creating a New Application</h4>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Click "New Rating" in the navigation bar</li>
                <li>Fill out all required business information</li>
                <li>Add business locations and payroll details</li>
                <li>Include safety programs and risk controls</li>
                <li>Enter prior insurance and loss history</li>
                <li>Review and calculate premium</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Using Example Data</h4>
              <p className="text-gray-600">
                Click the "Load Example Data" button to populate the form with sample data. This helps you understand the required information and format.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Quote className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Managing Quotes</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Generating Quotes</h4>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Complete all required application fields</li>
                <li>Click "Calculate Premium" to review details</li>
                <li>Confirm the information is correct</li>
                <li>Save the rating when complete</li>
                <li>Click "Generate Quote" on any saved rating</li>
                <li>Set the effective date and add notes</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Quote Management</h4>
              <p className="text-gray-600">
                Track quotes in the Quotes tab. Update status as needed (Draft, Issued, Bound, or Expired).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI Assistance</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Risk Assessment</h4>
              <p className="text-gray-600">
                Our AI actively assists you throughout the application process and analyzes your business data to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Evaluate overall risk level</li>
                <li>Identify key risk factors</li>
                <li>Suggest safety improvements</li>
                <li>Recommend premium adjustments</li>
                <li>Validate data completeness and accuracy</li>
                <li>Provide real-time guidance during form completion</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Premium Suggestions</h4>
              <p className="text-gray-600">
                AI-powered analysis provides:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Multiple premium scenarios with confidence levels</li>
                <li>Specific recommendations for premium reduction</li>
                <li>Risk-based pricing adjustments</li>
                <li>Comparative industry analysis</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Real-time Assistance</h4>
              <p className="text-gray-600">
                Look for the AI indicator throughout the application. The AI assistant will:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Suggest improvements to your entries</li>
                <li>Highlight potential data inconsistencies</li>
                <li>Provide industry-specific guidance</li>
                <li>Help optimize your application for better rates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Best Practices</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Data Accuracy</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Provide detailed business descriptions</li>
                <li>Keep loss history up to date</li>
                <li>Document all safety programs</li>
                <li>Maintain accurate payroll records</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Regular Updates</h4>
              <p className="text-gray-600">
                Review and update your information regularly to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Maintain accurate premium calculations</li>
                <li>Keep risk assessments current</li>
                <li>Benefit from the latest AI insights</li>
                <li>Track safety program effectiveness</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Progress Tracking</h4>
              <p className="text-gray-600">
                Use the progress indicator to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Monitor application completion status</li>
                <li>Navigate between sections easily</li>
                <li>Identify missing required information</li>
                <li>Track AI-assisted improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}