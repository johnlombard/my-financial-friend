import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("api/users/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("api/users/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("api/users", userData);
  },
  // Get all holdings
  getHoldings: function() {
    return axios.get("api/holdings/holdings")
  },
  // Get individual holding
  getHolding: function(id) {
    return axios.get("api/holdings/holdings/" + id);
  },
  // Save holding to DB
  saveHolding: function(holdingData) {
    return axios.post("api/holdings/holdings/", holdingData)
  },
  // Remove holding
  deleteHolding: function(id) {
    return axios.delete("/api/holdings/holdings/" + id);
  }
};
