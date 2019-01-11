import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
// Will be exporting to Pages file
export default {
  getAapl: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
};
