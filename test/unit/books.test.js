const bookController = require("../../controller/book");
const Book = require('../../models/book');
const httpMocks = require('node-mocks-http');
const newBook = require("../data/new-book.json");
Book.create = jest.fn();

let req, res, next;
beforeEach(() => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    let next = null;    
})

describe("Book Controller create", () => {
    beforeEach(() => {
        req.body = newBook;
    })

    it("should hava a create Book function", () => {
        expect(typeof bookController.createBook).toBe("function");
    })

    it("should call Book.create", () => {
        bookController.createBook(req, res);
        expect(Book.create).toBeCalledWith(newBook);
    })

    // it("should call Book.create", () => {
    //     await bookController.createBook(req, res, next);
    //     bookController.createBook(req, res);
    //     expect(Book.create).toBeCalledWith(newBook);
    // })
})
