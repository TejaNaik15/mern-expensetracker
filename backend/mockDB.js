// Simple in-memory database for development
const users = [];
let userIdCounter = 1;

const mockDB = {
  users: {
    findOne: async (query) => {
      if (query.email) {
        return users.find(user => user.email === query.email) || null;
      }
      if (query._id) {
        return users.find(user => user._id === query._id) || null;
      }
      return null;
    },
    
    create: async (userData) => {
      const newUser = {
        _id: userIdCounter++,
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      users.push(newUser);
      return newUser;
    },
    
    findById: async (id) => {
      return users.find(user => user._id == id) || null;
    }
  }
};

module.exports = mockDB;