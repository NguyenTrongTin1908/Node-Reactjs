import express from "express";
import { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import indexRoute from "./routes/indexRoute.js";
import { detailRoute } from "./routes/detailRoute.js";
import { userRoute } from "./routes/usersRoute.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');

// });

// app.use("/api/user",userRoute)
userRoute(app);
// detailRoute(app);
app.use("/api/index", indexRoute);

// indexRoute(app);

app.listen(4000);

export { app };
