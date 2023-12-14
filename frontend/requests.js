export async function getAllCars(){
    const response = await fetch('http://localhost:8080/api/car', {
        method: 'GET'
    });
    const result = await response.json();
    console.log(result);
    return result;
}
export async function addCar(car){
    await fetch('http://localhost:8080/api/car',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: car.name,
            description: car.description,
            price: car.price,
            img: car.img
        })
    });
}
export async function deleteCar(id){
    await fetch('http://localhost:8080/api/car/' + id, {
        method: 'DELETE'
    });
}