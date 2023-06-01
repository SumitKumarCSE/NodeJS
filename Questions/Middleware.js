// Write a middleware function in express that logs the request method, URL, and timestamp for each incoming request.

// Custom middleware function
const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
};

app.use(logRequest);