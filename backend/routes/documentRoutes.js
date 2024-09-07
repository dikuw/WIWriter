import express from 'express';
import { getDocuments, addDocument, updateDocument }  from '../controllers/documentController.js';

const router = express.Router();

router.get("/getDocuments", getDocuments);
// TODO
//router.get('/getDocumentById/:id', documentController.getDocumentById);
router.post("/addDocument", addDocument);
router.put("/updateDocument", updateDocument);

export default router;