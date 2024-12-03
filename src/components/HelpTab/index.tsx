import React from 'react';
import { HelpCircle, FileText, Quote, Brain, Shield, Lightbulb, Settings, Users } from 'lucide-react';

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
            Welcome to PS Advisory's Workers' Compensation Insurance Rating Application. This comprehensive platform helps you manage insurance applications with AI-powered assistance and intelligent risk assessment.
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
                <li>Review the AI tutorial for guided assistance</li>
                <li>Fill out all required business information</li>
                <li>Add business locations and payroll details</li>
                <li>Include safety programs and risk controls</li>
                <li>Enter prior insurance and loss history</li>
                <li>Use AI suggestions to optimize your application</li>
                <li>Review and calculate premium</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Using Example Data</h4>
              <p className="text-gray-600">
                Click the "Load Example Data" button to see a complete example application. This demonstrates best practices and helps you understand the required information format.
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
                Track and manage quotes through their lifecycle:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Draft: Initial quote generation</li>
                <li>Issued: Quote sent to client</li>
                <li>Bound: Policy accepted and active</li>
                <li>Expired: Quote no longer valid</li>
              </ul>
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
                Our advanced AI system provides real-time risk assessment and recommendations:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Evaluate overall risk level</li>
                <li>Identify key risk factors</li>
                <li>Suggest safety improvements</li>
                <li>Recommend premium adjustments</li>
                <li>Analyze industry-specific trends</li>
                <li>Provide contextual guidance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Premium Suggestions</h4>
              <p className="text-gray-600">
                Leverage AI-powered premium optimization:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Multiple premium scenarios with confidence levels</li>
                <li>Specific recommendations for premium reduction</li>
                <li>Risk-based pricing adjustments</li>
                <li>Comparative industry analysis</li>
                <li>Safety program impact assessment</li>
                <li>Experience modification projections</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Real-time Assistance</h4>
              <p className="text-gray-600">
                The AI Assistant provides contextual help throughout your application:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Suggest improvements to your entries</li>
                <li>Highlight potential data inconsistencies</li>
                <li>Provide industry-specific guidance</li>
                <li>Help optimize your application for better rates</li>
                <li>Offer smart tips based on your inputs</li>
                <li>Learn from your interactions to improve suggestions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Administrative Features</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Rating Administration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Manage rating factors and tables</li>
                <li>Configure premium rules</li>
                <li>Set up territory definitions</li>
                <li>Maintain class code mappings</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">User Management</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Control user access and permissions</li>
                <li>Track user activity and changes</li>
                <li>Manage role-based access</li>
                <li>Monitor system usage</li>
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
                <li>Verify all classification codes</li>
                <li>Review experience modification factors</li>
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
                <li>Monitor claims and loss trends</li>
                <li>Update business operation changes</li>
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
                <li>Review section-specific guidance</li>
                <li>Access contextual help when needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}