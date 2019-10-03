function objectCreatePolyfill(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}

module.exports = objectCreatePolyfill;
