import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
// prettier-ignore
import { listContacts, getContactById, removeContact,addContact,updateContact } from "../../models/contacts.js";

const router = express.Router();

router.get("/", ctrlWrapper(listContacts));

router.get("/:contactId", ctrlWrapper(getContactById));

router.post("/", ctrlWrapper(addContact));

router.delete("/:contactId", ctrlWrapper(removeContact));

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

export { router };
