const express = require("express");
const path= require("path")
const app =express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const {restrictToLoggedInUserOnly} = require("./middlewares/auth");
const passport = require("./config/passport");


// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true, // Allow credentials such as cookies to be sent
}));


const userRoute = require("./routes/user")
const staticRouter= require("./routes/staticRouter");
const openRouter = require("./routes/openRouter");
const authRouter = require("./routes/auth");

const queryRoutes = require("./routes/queryRoutes");
const reviewRoutes = require("./routes/reviewRoutes")

const router= express.Router();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());


app.use(
    session({
      secret: "Aaditya@3737",
      resave: false,
      saveUninitialized: false,
    })
  );

app.use(passport.initialize());
app.use(passport.session());


app.use("/user", userRoute);
app.use("/home", restrictToLoggedInUserOnly, staticRouter);
app.use("/open", openRouter);
app.use("/auth", authRouter);

app.use('/api/queries', queryRoutes);
app.use('/api/review', reviewRoutes);

app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

const{connectMongoDB}= require('./connect')
connectMongoDB('mongodb+srv://Aaditya:admin@cluster0.kxn151h.mongodb.net/D1')

app.listen(3000)
