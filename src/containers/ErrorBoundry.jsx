import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, info) => {
      setHasError(true);
    };

    // Add an event listener for unhandled errors
    window.addEventListener("error", handleError);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  return hasError ? <h1>Something went wrong</h1> : children;
};

export default ErrorBoundary;
