import Document from '../models/Document.js';

export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({});
    if (!documents.length) {
      return res
        .status(404)
        .json({ success: false, error: `No documents found` })
    }
    res.status(200).json({ success: true, data: documents });
  } catch(error) {
    console.error("Error in get documents:", error.message);
    res.status(500).json({ success: false, message: error });
  }
};

export const addDocument = async (req, res) => {
  const document = req.body;
  const newDocument = new Document(document);
  try {
    await newDocument.save();
    res.status(201).json({ success: true, data: newDocument });
  } catch(error) {
    console.error("Error in add document:", error.message);
    res.status(500).json({ success: false, message: error });
  }
};

export const updateDocument = async (req, res) => {

  if (!req.body.id) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a document',
    });
  }

  const document = await Document.findOneAndUpdate({ _id: req.body.id }, req.body, {
    new: true,
    runValidators: true
  }).exec();

  if (!document) {
    return res.status(400).json({ success: false, error: "Document not found" });
  }

  await document.save();
    
  return res.status(201).json({
    success: true,
    id: document._id,
    document: 'Document updated!',
  });
};