export function setItem(key: string, value: object) {
  try {
    // Check if window is defined
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error("Error setting item in localStorage:", error);
  }
}

export function getItem(key: string) {
  try {
    // Check if window is defined
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    }
    return undefined; // Return undefined if not in the browser
  } catch (error) {
    console.error("Error getting item from localStorage:", error);
    return undefined; // Handle error gracefully
  }
}

export function removeItem(key: string) {
  try {
    // Check if window is defined
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  } catch (error) {
    console.error("Error removing item from localStorage:", error);
  }
}
