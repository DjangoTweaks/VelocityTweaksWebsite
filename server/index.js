const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("./config/passport");
const { restrictToLoggedInUserOnly } = require("./middlewares/auth");

const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const webhookRoutes = require('./routes/webhookRoutes');
const paypalWebhookRoutes = require('./routes/paypalWebhookRoutes');
const downloadRoutes = require('./routes/downloadRoutes');
const productRoutes = require('./routes/productRoutes');
const methodRoutes = require('./routes/paymentMethod');
// CORS Configuration
app.use(cors({
  origin: 'https://velocity-tweaks-website-tau.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Cookie and session middlewares
app.use(cookieParser());

const mongoURI = 'mongodb+srv://Aaditya:admin@cluster0.kxn151h.mongodb.net/googleauth';

app.use(session({
  secret: process.env.SESSION_SECRET || 'Aaditya@3737',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: mongoURI }), // Set up MongoStore
  cookie: {
    secure: true, // Use secure cookies in production
    httpOnly: true, // Prevent client-side access to the cookie
    sameSite: 'None', // Required for cross-origin requests
  }
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Stripe webhook should use raw body before other middleware
app.use('/webhook', express.raw({ type: 'application/json' }), webhookRoutes);

// Other middlewares
app.use(express.json()); // Parse JSON bodies for other routes
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Other routes
app.use("/user", require("./routes/user"));
app.use("/home", restrictToLoggedInUserOnly, require("./routes/staticRouter"));
app.use("/open", require("./routes/openRouter"));
app.use("/auth", require("./routes/auth"));
app.use('/api/queries', require("./routes/queryRoutes"));
app.use('/api/review', require("./routes/reviewRoutes"));
app.use('/webhook', paypalWebhookRoutes);

// Routes for cart, checkout, and products
app.use('/cart', restrictToLoggedInUserOnly, cartRoutes);
app.use('/checkout', checkoutRoutes, methodRoutes);
app.use('/download', downloadRoutes);
app.use('/products', productRoutes);

// Serve static files for product downloads
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// MongoDB connection
const { connectMongoDB } = require('./connect');
connectMongoDB(mongoURI);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


