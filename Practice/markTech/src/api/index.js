export const getInfo = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
  
      if (!Array.isArray(data)) {
        throw new Error("Invalid data format: Expected an array of users");
      }
  
      return data; 
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      throw error;
    }
  };