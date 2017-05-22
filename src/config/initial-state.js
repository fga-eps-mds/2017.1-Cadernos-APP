const initialState = {
   // current logged user
  user: {
    id: 0,
    name: '',
    email: '',
    password: '',
    sendingData: false,
    isRegistered: false,
    authenticated: false,
    isUpdated: false,
    isVisitor: false,
    errors: {}
  },

  // selected or created book
  book: {
    id: 0,
    title: '',
    userId: 0,
    sendingData: false,
    errors: {},
    created: false,
    edited: false
  },

  // Book list from screen after loggin or logged user books
  bookList: {
    sendingData: false,
    books: []
  }
};

export default initialState;
