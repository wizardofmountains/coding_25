import { AlertCircle, RotateCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="error-container">
      <AlertCircle className="error-icon" size={48} strokeWidth={2} />
      <h3 className="error-title">Oops! Something went wrong</h3>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="error-retry-button" onClick={onRetry}>
          <RotateCw className="retry-icon" size={20} strokeWidth={2} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;

