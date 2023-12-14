const db = require('../db.js');

class CarController{
    async createCar(req, res){
        const {name, description, price, img} = req.body;
        const newCar = await db.query(`INSERT INTO cars (name, description, price, img)
                                        VALUES ($1, $2, $3, $4) RETURNING *`, [name, description, price, img]);
        res.json(newCar.rows[0]);
    }
    async getCars(req, res){
        const cars = await db.query(`SELECT id, name, description, price, img FROM cars`);
        res.json(cars.rows);
    }
    async deleteCar(req, res){
        const id = req.params.id;
        const deletedCar = db.query(`DELETE FROM cars WHERE id = $1`, [id]);
        res.json(deletedCar.rows);
    }
}
module.exports = new CarController();