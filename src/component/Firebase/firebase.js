import app from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJ_ID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MESSAGE_ID,
    appId: process.env.APP_ID
  };

  const config =
  	process.env.ENV === 'production' ? firebaseConfig : firebaseConfig;


class Firebase {
	constructor () {
		app.initializeApp(config);

		this.db = app.database();
	}
	
	post = pid => this.db.ref(`posts/${pid}`);

	posts = () => this.db.ref(`posts`);
}

  export default Firebse;