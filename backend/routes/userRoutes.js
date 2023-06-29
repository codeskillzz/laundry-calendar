const usersController = require("../controllers/users.Controller")


const userRoutes = (app) => {
	app.get("/", (req, res) => {
		res.render('index', { title: 'Welcome to Booking calendar application.' });
	  });
	  app.get("/register", usersController.registerUser) 
	
}

/**
 * 
 * const userRoutes = (app) => {
	app.get("/", (req, res) => {
		res.json({ message: "Welcome to Booking calendar application." });
	  });
	app.post('/register', usersController.registerUser)
	app.get('/confirm', usersController.validateUser)
	app.post('/verify', usersController.completeRegistration)

	app.get('/user', usersController.getAllUsers)
	app.get('/logout')
	app.post('/login')

}
 */

module.exports ={
    //slotRoutes,
	//bookingRoutes,
	userRoutes
  }