const DEVELOPMENT = {
  //change on codenvy
  baseURL: 'http://node18.codenvy.io:40413/',
  timeout: 5000 // 5s
}

const HOMOLOGATION = {
  baseURL: 'https://cadernos-api.herokuapp.com',
  timeout: 5000 // 5s
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