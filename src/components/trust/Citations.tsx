import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

export interface Citation {
  id: number;
  source: string;
  title: string;
  url?: string;
  accessDate?: string;
  type?: 'research' | 'industry' | 'platform' | 'news';
}

interface CitationsProps {
  citations: Citation[];
  title?: string;
}

export default function Citations({ citations, title = "Sources & References" }: CitationsProps) {
  const getTypeLabel = (type?: string) => {
    switch (type) {
      case 'research': return { label: 'Research', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' };
      case 'industry': return { label: 'Industry Report', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' };
      case 'platform': return { label: 'Platform Data', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' };
      case 'news': return { label: 'News', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' };
      default: return { label: 'Source', color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' };
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>

      <div className="space-y-3">
        {citations.map((citation) => {
          const typeInfo = getTypeLabel(citation.type);

          return (
            <div
              key={citation.id}
              className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-center">
                  {citation.id}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        {citation.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {citation.source}
                      </p>
                    </div>

                    {citation.type && (
                      <span className={`flex-shrink-0 px-2 py-1 rounded text-xs font-medium ${typeInfo.color}`}>
                        {typeInfo.label}
                      </span>
                    )}
                  </div>

                  {citation.url && (
                    <a
                      href={citation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline mt-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View source</span>
                    </a>
                  )}

                  {citation.accessDate && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      Accessed: {new Date(citation.accessDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          All sources have been reviewed for accuracy and relevance. Data is updated regularly to reflect the latest
          information available. If you notice any discrepancies or have updated information, please contact us.
        </p>
      </div>
    </div>
  );
}
