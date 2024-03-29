const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/banners"), (err, success) => {
      if (err) {
        throw new err();
      }
    });
  },

  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name, (err, success) => {
      if (err) throw new err();
    });
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
