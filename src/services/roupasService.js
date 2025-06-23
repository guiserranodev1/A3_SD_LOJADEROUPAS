class RoupasService {
    constructor(database) {
        this.database = database;
    }

    async createRoupa(roupaData) {
        const newRoupa = { id: Date.now(), ...roupaData };
        await this.database.collection('roupas').insertOne(newRoupa);
        return newRoupa;
    }

    async getAllRoupas() {
        return await this.database.collection('roupas').find().toArray();
    }

    async getRoupaById(id) {
        return await this.database.collection('roupas').findOne({ id: parseInt(id) });
    }

    async updateRoupa(id, roupaData) {
        await this.database.collection('roupas').updateOne(
            { id: parseInt(id) },
            { $set: roupaData }
        );
        return this.getRoupaById(id);
    }

    async deleteRoupa(id) {
        const result = await this.database.collection('roupas').deleteOne({ id: parseInt(id) });
        return result.deletedCount > 0;
    }
}

export default RoupasService;