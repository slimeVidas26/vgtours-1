 const dbuser = 'isaac';
 const dbpassword = 'trottinette';
//   const  mongoURI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-3or9x.mongodb.net/test?retryWrites=true&w=majority` ;
//   module.export = mongoURI;

  module.exports = {
    mongoURI: `mongodb+srv://${dbuser}:${dbpassword}@cluster0-3or9x.mongodb.net/test?retryWrites=true&w=majority`,
    secretOrKey: "secret",

    AMAZON: {
      clientID: "",
      clientSecret : " "
    },
    FACEBOOK: {
      clientID: "",
      clientSecret : " "
    },
    GOOGLE: {
      clientID: "",
      clientSecret : " "
    },
    GITHUB: {
      clientID: "",
      clientSecret : " "
    },
    INSTAGRAM: {
      clientID: "",
      clientSecret : " "
    },
    SPOTIFY: {
      clientID: "",
      clientSecret : " "
    },
  };


