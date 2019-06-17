require('../src/db/mongoose')

// 5d049c4c8ba3af0ef2912940

const User = require('../src/models/user')

User.findByIdAndUpdate('5d049c4c8ba3af0ef2912940', { age: 1})
