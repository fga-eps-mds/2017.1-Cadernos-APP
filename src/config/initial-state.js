const initialState = {
  login: {
    remember: true
  },

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
    coverOriginal: "",
    coverMedium: "",
    coverThumb: "",
    edited: false
  },

  // Book list from screen after loggin or logged user books
  bookList: {
    sendingData: false,
    books: []
  },

  tasks: [],

  singleTask: {
    id: 0,
    title: "",
    content: "",
    book_id: 0,
    user_id: 0,
    category_id: 0,
    documents: [],
    images: [],
    user: {},
    sendingData: false,
    errors: {}
  },

categories: [],
inspirations: []
};

export default initialState;
