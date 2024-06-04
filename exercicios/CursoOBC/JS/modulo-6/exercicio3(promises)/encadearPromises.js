getAge('2009-09-02')
    .then(age => {
        return checkAge(age)
    })
    .then(isOver18 => {
        if (isOver18) {
            console.log('Maior de idade')
        } else {
            console.log('Menor de idade')
        }
    })
    .catch(err => {
        console.log(err.message)
    })