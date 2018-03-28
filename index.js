module.exports = class Tagger {
    constructor() {

    }
    addTag(object, tag) {
        if (typeof object == "object" && typeof tag == "string") {
            object["tag"] = tag;
            return this;
        } else {
            throw new Error("Invallid Parameters.");
        }
    }
    removeTag(object, tag) {
        if (typeof object == "object" && typeof tag == "string") {
            object["tag"] = null;
            return this;
        } else {
            throw new Error("Invallid Parameters.");
        }
    }
    sort(array, tag) {
        var toReturn = [];
        if (typeof array == "object" && typeof tag == "string") {
            for (var i = 0; i < array.length; i++) {
                if (array[i].tag == "tag") {
                    toReturn.push(array[i]);
                }
            }
            return toReturn;
        } else {
            throw new Error("Invallid Parameters.");
        }
    }
}