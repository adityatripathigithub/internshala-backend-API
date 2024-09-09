const { catchAsyncError } = require("../middlewares/catchAsyncError");

exports.homepage = catchAsyncError(async (req, res, next) => {
    res.json({ message: "homepage" });
});

exports.studentsignup = catchAsyncError(async (req, res, next) => {
    res.json(req.body);
});
