const mongoose = require('mongoose');

mongoose.connect(process.env.DB || 'mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
})
.then(db => console.log('BD conectada!.'))
.catch(err => console.error('error:', err));