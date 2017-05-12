const initialState = {
  user: { // current logged user
    id: 1,
    name: 'Fábio Teixeira',
    email: 'fabio1079@gmail.com',
    password: '',
    sendingData: false,
    authenticated: false,
    errors: []
  },

  book: { // selected book
    id: 0,
    title: '',
    userId: 0,
    sendingData: false,
    errors: {}
  }
};

export default initialState;