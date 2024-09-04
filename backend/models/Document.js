import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  number: {
    type: String,
    trim: true,
    required: 'Please enter a document number'
  },
  title: {
    type: String,
    trim: true,
    required: 'Please enter a document title'
  },
  description: {
    type: String,
    trim: true,
    required: 'Please enter a document description'
  },
  version: { 
    type: Number, 
    default: 0 
  },
}, { timestamps: true });

const Document = mongoose.model('Document', documentSchema);