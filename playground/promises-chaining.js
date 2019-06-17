require('../src/db/mongoose')


const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('5d049c4c8ba3af0ef2912940', { age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 23})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Task.findByIdAndDelete('5d049de39c73630f79771a1f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeandCount = async (id,age) => {

    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

const findByIdAndDelete = async(id) => {

    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

// updateAgeandCount('5d049c4c8ba3af0ef2912940', 2).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

findByIdAndDelete('5d049df0a2f44b0f8923214f').then((count) => {
    console.log(count)
}).then((e) => {
    console.log(e)
})