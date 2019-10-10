function pick(obj, props) {
    const temp = {};

    props.forEach((prop) => {
        if (obj[prop]) {
            temp[prop] = obj[prop];
        }
    });

    return temp;
}

export default pick;
