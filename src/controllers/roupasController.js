class RoupasController {
    constructor(roupasService) {
        this.roupasService = roupasService;
    }

    async createRoupa(req, res) {
        try {
            const roupa = await this.roupasService.createRoupa(req.body);
            res.status(201).json(roupa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllRoupas(req, res) {
        try {
            const roupas = await this.roupasService.getAllRoupas();
            res.status(200).json(roupas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getRoupaById(req, res) {
        try {
            const roupa = await this.roupasService.getRoupaById(req.params.id);
            if (!roupa) {
                return res.status(404).json({ message: 'Roupa não encontrada' });
            }
            res.status(200).json(roupa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateRoupa(req, res) {
        try {
            const updatedRoupa = await this.roupasService.updateRoupa(req.params.id, req.body);
            if (!updatedRoupa) {
                return res.status(404).json({ message: 'Roupa não encontrada' });
            }
            res.status(200).json(updatedRoupa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteRoupa(req, res) {
        try {
            const deletedRoupa = await this.roupasService.deleteRoupa(req.params.id);
            if (!deletedRoupa) {
                return res.status(404).json({ message: 'Roupa não encontrada' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default RoupasController;