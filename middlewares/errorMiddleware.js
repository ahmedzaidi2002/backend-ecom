export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

// ye aur achche se dekh lena promise aur resolve
// catch m bs function pass karet , call nhi

export const asyncError = (passed) => (req, res, next) => {
    Promise.resolve(passed(req, res, next)).catch(next);
    // Promise.resolve(passed(req, res, next)).catch(next()); wrong
};