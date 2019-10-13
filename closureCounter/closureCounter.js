function closureCounter(initCount) {
    let count = initCount;

    return () => count++;
}

export default closureCounter;
