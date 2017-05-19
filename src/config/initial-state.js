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
    errors: {}
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
  },

  // selected or created task
  task: {
    id: 0,
    title: '',
    content: '',
    userId: 0,
    sendingData: false,
    errors: {},
    created: false
  },

  // task list from screen after loggin or logged user activities
  taskList: {
    sendingData: false,
    activities: []
  }

};

export default initialState;
