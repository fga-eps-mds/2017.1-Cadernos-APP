const initialState = {
   // current logged user
  user: {
    id: 1,
    name: 'Fábio Teixeira',
    email: 'fabio1079@gmail.com',
    password: '',
    sendingData: false,
    authenticated: false,
    errors: []
  },

  // selected or created book
  book: {
    id: 0,
    title: '',
    userId: 0,
    sendingData: false,
    errors: {},
    created: false
  },

  // Book list from screen after loggin or logged user books
  bookList: {
    sendingData: false,
    books: []
  }
};

export default initialState;