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
    isUser: false,
    isUserLogout: false,
    isUserLogin: false,
    errors: {}
  },

  // selected or created book
  book: {
    id: 0,
    title: '',
    userId: 0,
    authorName: '',
    sendingData: false,
    errors: {},
    created: false,
    coverOriginal: "",
    coverMedium: "",
    coverThumb: "",
    edited: false
  },

  //selected inspiration
  inspiration: {
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
  invites: [],
  memberships: [],


  // Book list from screen after loggin or logged user books
  bookList: {
    sendingData: false,
    books: []
  },

  /**
   tasks : Array<Task> = [
     {
      id: Number,
      title: String,
      content: String,
      book_id: Number,
      user_id: Number,
      category_id: Number,
      created_at: String,
      updated_at: String,
      picture_original: String,
      picture_medium: String,
      picture_thumb: String,
      user: {
        id: Number,
        name: String
      }
    }
  ]
  */
  tasks: [],
  inspirationTasks: [],

  singleTask: {
    id: 0,
    title: "",
    content: "",
    book_id: 0,
    user_id: 0,
    category_id: 0,
    picture_original: "",
    picture_medium: "",
    picture_thumb: "",
    image_url: "",
    picture_base: "",
    user: {},
    sendingData: false,
    errors: {}
  },



  categories: [],
  inspirations: []


};

export default initialState;
