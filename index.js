Array.prototype.every = function(target) {
    for (let i=0; i<this.length; i++) {
        if (this[i] !== target) {
            return false;
        }
    }
    return true;
}

Array.prototype.some = function(target) {
    for (let i=0; i<this.length; i++) {
        if (this[i] === target) {
            return true;
        }
    }
    return false;
}

Array.prototype.reduce = function(cb) {
    let result;
    for (let i=0; i<this.length; i++) {
        result += this[i];
    }
    return result;
}

Array.prototype.filter = function(cb) {
    let result = [];
    for (let i=0; i<this.length; i++) {
        if (cb(this[i])) {
            result.push(this[i])
        }
    }
    return result;
}

// function greaterSix(val) {
//     return val > 6;
// }