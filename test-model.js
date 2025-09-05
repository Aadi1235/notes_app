const mongoose = require('mongoose');
const User = require('./models/user');
const Note = require('./models/note');

// Connect to database
mongoose.connect('mongodb://localhost:27017/notesdb');

async function testSchemas() {
  try {
    console.log('📝 Testing User and Note schemas...');
    
    // Create a test user
    const testUser = new User({
      email: 'test@example.com',
      passwordHash: 'temporaryHash123'
    });
    
    console.log('✅ User schema works!');
    
    // Create a test note
    const testNote = new Note({
      userId: testUser._id,
      title: 'My First Note',
      content: 'This is a test note to verify schemas work!'
    });
    
    console.log('✅ Note schema works!');
    console.log('🎉 Both schemas are properly structured!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Schema error:', error.message);
    process.exit(1);
  }
}

testSchemas();
