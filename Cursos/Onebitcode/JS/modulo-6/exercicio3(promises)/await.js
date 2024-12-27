async function asyncSum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return Promise.reject("Arguments must be a number!")
    }
    return a + b
}

// async function execute(a,b) {
//     asyncSum(a,b).then(result=>{
//         console.log(result);
//     }).catch(err => {console.log(err)})
// }

async function execute(a, b) {
    try {
        const result = await asyncSum(a, b)
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

execute(50, 'false')