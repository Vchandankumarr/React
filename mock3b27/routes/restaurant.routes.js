const express = require("express")

const { RestaurantModel } = require("../models/restaurant.models")


const RestaurantRouter = express.Router()

// to add new restro

RestaurantRouter.post('/api/restro-add', async (req, res) => {
    const { name, address, menu } = req.body;
    try {
        const ifRestroPresent = await RestaurantModel.findOne({ name });

        if (ifRestroPresent) {
            res.send("Already present");
            return;
        }

        const data = {
            name,
            address,
            menu,
        };

        const post = new RestaurantModel(data);
        await post.save();
        res.send({ msg: "Restro Add successfully" });

    } catch (err) {
        res.status(500).send({ msg: "Cannot add restaurant", error: err.message });
        console.log(err);
    }
});

// geting restaurant
RestaurantRouter.get('/api/restaurants', async (req, res) => {
    try {
        const restaurants = await RestaurantModel.find();
        res.status(200).json(restaurants);

    } catch (error) {
        console.error('Error while fetching restaurants:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// get by id
RestaurantRouter.get('/api/restaurants/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await RestaurantModel.findById(id);
        if (!restaurant) {

            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        console.error('Error while fetching restaurant:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
// geting restaurant menu
RestaurantRouter.get('/api/restaurants/:id/menu', async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await RestaurantModel.findById(id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant.menu);
    } catch (error) {
        console.error('Error while fetching restaurant menu:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// add new to munu
RestaurantRouter.post('/api/restaurants/:id/menu', async (req, res) => {

    try {
        const { id } = req.params;
        const { name, description, price, image } = req.body;

        const restaurant = await RestaurantModel.findById(id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }

        const newItem = {
            name,
            description,
            price,
            image,
        };

        restaurant.menu.push(newItem);
        await restaurant.save();

        res.status(201).json({ message: 'Item added to the menu successfully' });
    } catch (error) {
        console.error('Error while adding item to menu:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// deleted specific item in menu by id
RestaurantRouter.delete('/api/restaurants/:restaurantId/menu/:itemId', async (req, res) => {
    try {
        const { restaurantId, itemId } = req.params;

        const restaurant = await RestaurantModel.findById(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }

        const menuIndex = restaurant.menu.findIndex((item) => item._id.toString() === itemId);
        if (menuIndex === -1) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        restaurant.menu.splice(menuIndex, 1);
        await restaurant.save();

        res.status(202).json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = {
    RestaurantRouter
}