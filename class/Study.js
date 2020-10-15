let Segment = require("./Segment");

class Study {
    constructor(name, description, segmentData = null) {
        this.name = name
        this.description = description
        this.segments = this.parseSegmentData(segmentData);
    }

    parseSegmentData(segmentData) {
        return [];
    }
}

module.exports = Study;