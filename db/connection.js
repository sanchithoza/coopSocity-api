const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coopsocity-db',{ useNewUrlParser: true, useUnifiedTopology: true })
