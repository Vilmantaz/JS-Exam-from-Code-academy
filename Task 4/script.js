/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const cars = async () => {
    const response = await fetch(ENDPOINT)
    const json = await response.json();

    console.log(json)
    displayCars(json)
}

const displayCars = (cars) => {
    const carContainer = document.getElementById('output');

    cars.forEach(car => {
        const brand = document.createElement('b');
        brand.innerText = car.brand;
        const models = document.createElement('div');
        models.innerText = car.models;
        const brandBox = document.createElement('div');
        
        const carBox = document.createElement('div');
        carBox.className = 'car-box';

        brandBox.append(brand);
       

        carBox.append(brandBox, models);
        carContainer.append(carBox);
    });
}


cars();