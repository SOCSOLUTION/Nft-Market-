const mongoose = require('mongoose');

// Define the database URL
const url =
  'mongodb+srv://jack:jack@cluster0.dlbq3vu.mongodb.net/?retryWrites=true&w=majority';
// Connect to MongoDB
mongoose.set('strictQuery', false);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('SUCCESS DB CONNECTED');
  })
  .catch((err) => {
    console.log(err + 'ERROR');
  });

// Define the schema
const registerDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  repeatpassword: {
    type: String,
    required: true,
  },
});

// Define the model
module.exports =
  mongoose.models.registerDataSchema ||
  mongoose.model('RegisterData', registerDataSchema);
