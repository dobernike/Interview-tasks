function promiseAllPolyfill(arrayOfPromises = []) {
    if (!arrayOfPromises.length) {
        return Promise.resolve([]);
    }

    return new Promise((resolve, reject) => {
        let resultMap = {};

        arrayOfPromises.forEach((promise, index) => {
            return promise
                .then((data) => {
                    resultMap = {
                        ...resultMap,
                        [index]: data,
                    };

                    if (Object.keys(resultMap).length === arrayOfPromises.length) {
                        const resultArr = Object.keys(resultMap).map((key) => resultMap[key]);

                        resolve(resultArr);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
}

export default promiseAllPolyfill;
