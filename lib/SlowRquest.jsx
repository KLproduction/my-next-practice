export default function simulateLongApiRequest(delay, result) {
    // Return a new Promise
    return new Promise((resolve, reject) => {
      // Set a timeout to simulate network delay
      setTimeout(() => {
        // Resolve the promise with the provided result after the delay
        resolve(result);
      }, delay); // Delay in milliseconds
    });
  }