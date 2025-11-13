import React from 'react';
import { Database, Users, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

export interface DataSource {
  name: string;
  description: string;
  sampleSize?: string;
  dateRange?: string;
  methodology?: string;
}

interface DataTransparencyProps {
  sources: DataSource[];
  limitations?: string[];
  confidence?: 'high' | 'medium' | 'moderate';
  lastUpdated: string;
  updateFrequency?: string;
}

export default function DataTransparency({
  sources,
  limitations = [],
  confidence = 'high',
  lastUpdated,
  updateFrequency = 'monthly'
}: DataTransparencyProps) {
  const confidenceConfig = {
    high: {
      label: 'High Confidence',
      color: 'text-green-700 dark:text-green-300',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      description: 'Based on comprehensive data from multiple verified sources'
    },
    medium: {
      label: 'Medium Confidence',
      color: 'text-blue-700 dark:text-blue-300',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      description: 'Based on reliable industry data and established patterns'
    },
    moderate: {
      label: 'Moderate Confidence',
      color: 'text-yellow-700 dark:text-yellow-300',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      description: 'Based on available data with some limitations noted below'
    }
  };

  const config = confidenceConfig[confidence];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20 rounded-xl p-6 my-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-start gap-3 mb-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
          <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
            Data Transparency & Methodology
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Our commitment to accuracy and transparency in all calculations and insights
          </p>
        </div>
      </div>

      {/* Confidence Level */}
      <div className={`${config.bgColor} ${config.borderColor} border rounded-lg p-4 mb-6`}>
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className={`w-5 h-5 ${config.color}`} />
          <span className={`font-bold ${config.color}`}>{config.label}</span>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {config.description}
        </p>
      </div>

      {/* Data Sources */}
      <div className="space-y-4 mb-6">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Database className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          Data Sources
        </h4>

        {sources.map((source, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {source.name}
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {source.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {source.sampleSize && (
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Sample Size</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {source.sampleSize}
                    </p>
                  </div>
                </div>
              )}

              {source.dateRange && (
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Date Range</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {source.dateRange}
                    </p>
                  </div>
                </div>
              )}

              {source.methodology && (
                <div className="flex items-start gap-2 md:col-span-3">
                  <TrendingUp className="w-4 h-4 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Methodology</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {source.methodology}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Limitations */}
      {limitations.length > 0 && (
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <h4 className="font-semibold text-orange-900 dark:text-orange-100">
              Known Limitations
            </h4>
          </div>
          <ul className="space-y-2">
            {limitations.map((limitation, index) => (
              <li key={index} className="text-sm text-orange-800 dark:text-orange-200 flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>{limitation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Update Info */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              Last Updated: <strong className="text-gray-900 dark:text-gray-100">
                {new Date(lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>
              Update Frequency: <strong className="text-gray-900 dark:text-gray-100 capitalize">
                {updateFrequency}
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
