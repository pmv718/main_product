const mongoose = require('mongoose');

const userChatHistory = mongoose.Schema({
    email: String,
    chats: Array,
    domain: String
});

module.exports = mongoose.model('userChatHistory', userChatHistory);
