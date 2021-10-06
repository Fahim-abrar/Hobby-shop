
const register = async (body) => {
    try {
      let response = await fetch('http://localhost:1000/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      return await response.json();
    } 
    catch (error) {
      console.log(error);
    }
  };
  
  export {register};