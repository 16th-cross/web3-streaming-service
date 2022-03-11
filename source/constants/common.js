exports.constructSQLData = (custObj) => {
    let arr = [];
    Object.entries(custObj).forEach(
        ([key, value]) => arr.push(value)
    );
    return arr;
}