export function fetchData({ timeout, requestTime }: { timeout: number; requestTime: number }): Promise<{ name: string; age: number }> {
  return new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., fetching data from an API)

    if (timeout < requestTime) {
      reject("Request timeout");
    }

    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, requestTime); // Simulate a 1-second delay
  });
}
