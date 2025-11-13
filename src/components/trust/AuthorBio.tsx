import React from 'react';
import { User, Award, Calendar } from 'lucide-react';

export interface Author {
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  credentials?: string[];
  yearsOfExperience?: number;
}

interface AuthorBioProps {
  author: Author;
  publishDate?: string;
  lastUpdated?: string;
  variant?: 'full' | 'compact';
}

export default function AuthorBio({
  author,
  publishDate,
  lastUpdated,
  variant = 'full'
}: AuthorBioProps) {
  if (variant === 'compact') {
    return (
      <div className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 pl-4 py-3 my-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-semibold text-gray-900 dark:text-gray-100">{author.name}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">{author.role}</p>
            </div>
            {lastUpdated && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
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
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 my-8 border border-blue-100 dark:border-blue-800/30">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {author.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {author.role}
              </p>
            </div>

            {author.yearsOfExperience && (
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {author.yearsOfExperience}+ Years
                </span>
              </div>
            )}
          </div>

          <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
            {author.bio}
          </p>

          {author.expertise && author.expertise.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Areas of Expertise:
              </p>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {author.credentials && author.credentials.length > 0 && (
            <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800/30">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Credentials & Background:
              </p>
              <ul className="space-y-1">
                {author.credentials.map((credential, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(publishDate || lastUpdated) && (
            <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800/30 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              {publishDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Published: {new Date(publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              )}
              {lastUpdated && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Last Updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
