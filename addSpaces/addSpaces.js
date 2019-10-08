function addSpaces(str) {
    return str
        .split(' ')
        .map((word) => word.split('').join(' '))
        .join('  ');
}

export default addSpaces;
