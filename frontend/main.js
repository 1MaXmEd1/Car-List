import {createItem} from "./components/item.js"
import { getAllCars, addCar, deleteCar } from "./requests.js"

(function(){
    class Car{
        constructor(name, description, price, img){
            this.name = name;
            this.description = description;
            this.price = price;
            this.img = img;
        }
    }

    let list = document.getElementById('car-list');
    async function elementsGenerator(){
        const cars = await getAllCars();

        for(let car of cars){
            let listItem = createItem(car.name, car.price, car.description, car.img);
            listItem.btnDelete.addEventListener('click', function(){
                if(confirm('Вы уверены, что хотите удалить объект?'))
                    deleteCar(car.id);
                    listItem.item.remove();
            });
            list.append(listItem.item);
        }
    }

    document.addEventListener('DOMContentLoaded', function(){

        const form = document.getElementById('add-element-form');
        elementsGenerator();

        form.addEventListener('submit', function(e){
            e.preventDefault();

            let carName = document.getElementById('carName');
            let carPrice = document.getElementById('carPrice');
            let carDescription = document.getElementById('carDescription');
            let carImg = document.getElementById('carImg');

            let listItem = createItem(carName.value, carPrice.value, carDescription.value, carImg.value);
            let car = new Car(carName.value, carPrice.value, carDescription.value, carImg.value);
            addCar(car);
            list.append(listItem.item);
        });
    })


})();