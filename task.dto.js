class TaskDto {
    /**
     * @param {Object} data
     * @param {number} data.id
     * @param {string} data.description
     * @param {string} data.status
     */
    constructor(data) {
        this.id = data.id;
        this.description = data.description;
        this.status = data.status;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

module.exports = { TaskDto }