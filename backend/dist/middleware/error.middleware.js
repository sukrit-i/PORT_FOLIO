"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error('[Unhandled Error Log]:', err);
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    const isDev = process.env.NODE_ENV === 'development';
    return res.status(statusCode).json({
        success: false,
        error: {
            code: err.code || 'SERVER_ERROR',
            message: err.message || 'An unexpected error occurred on the server.',
            ...(isDev && { stack: err.stack }),
        },
    });
};
exports.errorHandler = errorHandler;
const notFoundHandler = (req, res) => {
    return res.status(404).json({
        success: false,
        error: {
            code: 'NOT_FOUND',
            message: `The requested endpoint ${req.method} ${req.originalUrl} does not exist on this API.`,
        },
    });
};
exports.notFoundHandler = notFoundHandler;
