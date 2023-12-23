let GLS = {
    maxSpeed: "240 км/ч",
    strong: "245 л. с.",
    action: "7.3 с.",
    price: "4 590 000 ₽",
    img: "img/gls.png"
};

let GLE = {
    maxSpeed: "260 км/ч",
    strong: "277 л. с.",
    action: "6.6 с.",
    price: "5 720 000 ₽",
    img: "img/gle.png"
};

let Sclass = {
    maxSpeed: "260 км/ч",
    strong: "580 л. с.",
    action: "5.1 с.",
    price: "15 100 000 ₽",
    img: "img/s.png"
};

let AMGGT = {
    maxSpeed: "310 км/ч",
    strong: "800 л. с.",
    action: "3.1 с.",
    price: "26 000 000 ₽",
    img: "img/amggt.png"
};

document.getElementById("selectID").addEventListener("change", function() {
    let selectedCar = this.value; 
    let maxSpeed = document.getElementById("maxSpeed");
    let strong = document.getElementById("strong");
    let action = document.getElementById("action");
    let price = document.getElementById("price");
    let carImage = document.getElementById("car");

    if (selectedCar === "GLS") {
        maxSpeed.textContent = "Максимальная скорость: " + GLS.maxSpeed;
        strong.textContent = "Мощность: " + GLS.strong;
        action.textContent = "Разгон до 100 км/ч: " + GLS.action;
        price.textContent = "Цена: " + GLS.price;
        carImage.src = GLS.img;
    }
    else if (selectedCar === "GLE") {
        maxSpeed.textContent = "Максимальная скорость: " + GLE.maxSpeed;
        strong.textContent = "Мощность: " + GLE.strong;
        action.textContent = "Разгон до 100 км/ч: " + GLE.action;
        price.textContent = "Цена: " + GLE.price;
        carImage.src = GLE.img;
    }
    else if (selectedCar === "S-class") {
        maxSpeed.textContent = "Максимальная скорость: " + Sclass.maxSpeed;
        strong.textContent = "Мощность: " + Sclass.strong;
        action.textContent = "Разгон до 100 км/ч: " + Sclass.action;
        price.textContent = "Цена: " + Sclass.price;
        carImage.src = Sclass.img;
    }
    else if (selectedCar === "AMGGT") {
        maxSpeed.textContent = "Максимальная скорость: " + AMGGT.maxSpeed;
        strong.textContent = "Мощность: " + AMGGT.strong;
        action.textContent = "Разгон до 100 км/ч: " + AMGGT.action;
        price.textContent = "Цена: " + AMGGT.price;
        carImage.src = AMGGT.img;
    }
});