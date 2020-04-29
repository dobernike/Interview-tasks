Promise.resolve(11)
    .then(
        (val) => console.log('then', val), // then 11
        (err) => console.log('catch', err)
    )
    .then(null, (err) => console.log('catch', err))
    .catch((err) => console.log('catch', err))
    .then(() => Promise.reject(22))
    .catch(null)
    .then(
        (val) => console.log('then', val), // then 22
        null
    )
    .finally(
        (val) => console.log('finally', val) // finally 22
    )
    .catch((val) => console.log('catch', val))
    .finally(() => Promise.reject(33))
    .then(
        (val) => console.log('then', val),
        (err) => console.log('catch', err) // catch Error 33
    )
    .catch(
        (val) => console.log('then', val), // the
        (err) => console.log('catch', err)
    );

// answer

// then 11, finally undefined, catch 22, catch 33
