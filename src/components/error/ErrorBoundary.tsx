'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);

    // In production, you would send this to your error tracking service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
      });
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-heading-lg font-bold text-neutral-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-body-md text-neutral-600 mb-6">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        {process.env.NODE_ENV === 'development' && error && (
          <details className="text-left bg-neutral-100 p-4 rounded-lg mb-6">
            <summary className="cursor-pointer font-semibold">Error Details</summary>
            <pre className="text-sm mt-2 overflow-auto">{error.stack}</pre>
          </details>
        )}
        <div className="space-y-3">
          <button
            onClick={resetError}
            className="btn btn-primary w-full"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="btn btn-outline w-full"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
