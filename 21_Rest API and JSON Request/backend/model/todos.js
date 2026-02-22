 const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dueDate: Date,
    complete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
 