const fakeData = { 
  location: { name: "Manila" }, 
  current: { 
    temp_c: 30, 
    condition: { 
      text: "Partly Cloudy", 
    }, 
  }, 
};

// Destructure the data
const {
  location: { name },
  current: {
    temp_c,
    condition: { text },
  },
} = fakeData;

// Output to console
console.log(`Weather in ${name}: ${temp_c}°C and ${text}`);

