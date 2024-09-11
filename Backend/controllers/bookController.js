import Book from "../models/bookModel.js"

export const getBook = async (req,res) => {
    try {
        let book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("error : ", error);
        res.status(404).json(error)
    }
}
