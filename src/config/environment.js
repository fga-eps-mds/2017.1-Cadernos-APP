const DEVELOPMENT = {
  baseURL: 'http://127.0.0.1:3000',
  timeout: 2000
}

const HOMOLOGATION = {
  baseURL: 'https://cadernos-api.herokuapp.com',
  timeout: 2000
}


export const Types = {development: 'DEVELOPMENT', homologation: 'HOMOLOGATION'};


export default {
  get development() {
    return DEVELOPMENT;
  },

  get homologation() {
    return HOMOLOGATION
  },


  data(type = Types.development) {
    switch (type) {
      case Types.development:
        return this.development;

      case Types.homologation:
        return this.homologation;

      default:
        throw new Error("No environment type given");
    }
  }
}
