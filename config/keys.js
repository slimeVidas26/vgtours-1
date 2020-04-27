 const dbuser = 'isaac';
 const dbpassword = 'trottinette';
//   const  mongoURI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-3or9x.mongodb.net/test?retryWrites=true&w=majority` ;
//   module.export = mongoURI;

  module.exports = {
     mongoURI: `mongodb+srv://${dbuser}:${dbpassword}@cluster0-3or9x.mongodb.net/test?retryWrites=true&w=majority`,
     secretOrKey: "secret",

    // AMAZON: {
    //   clientID: "",
    //   clientSecret : " "
    // },
    FACEBOOK: {
      clientID: "559684394976566",
      clientSecret : "222882e3bd869a90cf276ba8b5dccbfb"
    },
     GOOGLE: {
       clientID: "707374088332-j3gutvrrr1d4b4cgvkh6j1qph6638r94.apps.googleusercontent.com",
       clientSecret : "6cDXDV2RBJmQp0hk4jNuCxGi"
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
    }
  };


