import React from 'react';
import { FileText, Calendar, DollarSign, CheckCircle, XCircle, Clock, Download } from 'lucide-react';
import { Quote } from '../../types';
import { formatCurrency } from '../../utils/formatters';
import { format } from 'date-fns';
import { updateQuoteStatus } from '../../utils/storage';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { QuoteDocument } from '../QuoteDocument';

interface QuoteListProps {
  quotes: Quote[];
  onStatusChange: () => void;
}

export function QuoteList({ quotes, onStatusChange }: QuoteListProps) {
  const handleStatusChange = (quoteId: string, status: Quote['status']) => {
    updateQuoteStatus(quoteId, status);
    onStatusChange();
  };

  const getStatusIcon = (status: Quote['status']) => {
    switch (status) {
      case 'issued':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'expired':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'bound':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quote Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Business
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Effective Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Premium
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {quotes.map((quote) => (
            <tr key={quote.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-900">
                    {quote.quoteNumber}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{quote.businessInfo.name}</div>
                <div className="text-sm text-gray-500">{quote.businessInfo.fein}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {format(new Date(quote.effectiveDate), 'MMM d, yyyy')}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm font-medium text-gray-900">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  {formatCurrency(quote.premium)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {getStatusIcon(quote.status)}
                  <span className="text-sm font-medium capitalize text-gray-700">
                    {quote.status}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={quote.status}
                  onChange={(e) => handleStatusChange(quote.id, e.target.value as Quote['status'])}
                  className="text-sm border border-gray-300 rounded-md px-2 py-1"
                >
                  <option value="draft">Draft</option>
                  <option value="issued">Issued</option>
                  <option value="bound">Bound</option>
                  <option value="expired">Expired</option>
                </select>
                <PDFDownloadLink
                  document={<QuoteDocument quote={quote} />}
                  fileName={`quote-${quote.quoteNumber}.pdf`}
                  className="ml-2 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Download className="w-4 h-4" />
                </PDFDownloadLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}