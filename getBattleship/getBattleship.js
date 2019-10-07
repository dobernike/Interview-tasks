function getBattleship(array) {
    return array.filter((item) => item !== 0).length;
}

export default getBattleship;
