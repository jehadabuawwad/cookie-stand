

/*-------------------------------------------------- PART A : Literal object --------------------------------------------------*/

// let Seattle = {
//     minHourlyCustomers: 23,
//     maxHourlyCustomers: 65,
//     averageCookiesPerCustomer: 6.3,
//     NumberOfCookies: [],
//     sum: 0,

//     generateRandomNumber: function () {
//         return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
//     },

//     simulatedNumberOfCookies: function () {
//         let perant = document.getElementById("Seattle");
//         let Name = document.createElement('h1');
//         perant.appendChild(Name);
//         Name.textContent = "Seattle";

//         for (let i = 6; i <= 19; i++) {
//             this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);

//             let child = document.createElement('li');
//             perant.appendChild(child);

//             if (i <= 11) {
//                 child.textContent = `  ${i} am: ${this.NumberOfCookies[i]} cookies`;
//             }
//             else if (i == 12) {
//                 child.textContent = `  ${i} pm: ${this.NumberOfCookies[i]} cookies`;
//             }

//             else if (i > 12 && i <= 19) {
//                 child.textContent = `  ${i - 12} pm: ${this.NumberOfCookies[i]} cookies`;

//             }
//         }

//         this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
//         perant = document.getElementById("Seattle");
//         child = document.createElement('li');
//         perant.appendChild(child);
//         child.textContent = `  Total : ${this.sum} cookies`;
//     },

// };

// console.log(Seattle.simulatedNumberOfCookies());


// let Tokyo = {
//     minHourlyCustomers: 3,
//     maxHourlyCustomers: 24,
//     averageCookiesPerCustomer: 1.2,
//     NumberOfCookies: [],
//     sum: 0,

//     generateRandomNumber: function () {
//         return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
//     },

//     simulatedNumberOfCookies: function () {
//         let perant = document.getElementById("Tokyo");
//         let Name = document.createElement('h1');
//         perant.appendChild(Name);
//         Name.textContent = "Tokyo";

//         for (let i = 6; i <= 19; i++) {
//             this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);
//             let child = document.createElement('li');
//             perant.appendChild(child);

//             if (i <= 11) {
//                 child.textContent = `  ${i} am: ${this.NumberOfCookies[i]} cookies`;
//             }
//             else if (i == 12) {
//                 child.textContent = `  ${i} pm: ${this.NumberOfCookies[i]} cookies`;
//             }

//             else if (i > 12 && i <= 19) {
//                 child.textContent = `  ${i - 12} pm: ${this.NumberOfCookies[i]} cookies`;

//             }
//         }

//         this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
//         perant = document.getElementById("Tokyo");
//         child = document.createElement('li');
//         perant.appendChild(child);
//         child.textContent = `  Total : ${this.sum} cookies`;
//     },

// };
// console.log(Tokyo.simulatedNumberOfCookies());


// let Dubai = {
//     minHourlyCustomers: 11,
//     maxHourlyCustomers: 38,
//     averageCookiesPerCustomer: 3.7,
//     NumberOfCookies: [],
//     sum: 0,

//     generateRandomNumber: function () {
//         return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
//     },

//     simulatedNumberOfCookies: function () {
//         let perant = document.getElementById("Dubai");
//         let Name = document.createElement('h1');
//         perant.appendChild(Name);
//         Name.textContent = "Dubai";

//         for (let i = 6; i <= 19; i++) {
//             this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);
//             let child = document.createElement('li');
//             perant.appendChild(child);

//             if (i <= 11) {
//                 child.textContent = `  ${i} am: ${this.NumberOfCookies[i]} cookies`;
//             }
//             else if (i == 12) {
//                 child.textContent = `  ${i} pm: ${this.NumberOfCookies[i]} cookies`;
//             }

//             else if (i > 12 && i <= 19) {
//                 child.textContent = `  ${i - 12} pm: ${this.NumberOfCookies[i]} cookies`;

//             }
//         }

//         this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
//         perant = document.getElementById("Dubai");
//         child = document.createElement('li');
//         perant.appendChild(child);
//         child.textContent = `  Total : ${this.sum} cookies`;
//     },

// };
// console.log(Dubai.simulatedNumberOfCookies());


// let Paris = {
//     minHourlyCustomers: 20,
//     maxHourlyCustomers: 38,
//     averageCookiesPerCustomer: 2.3,
//     NumberOfCookies: [],
//     sum: 0,

//     generateRandomNumber: function () {
//         return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
//     },

//     simulatedNumberOfCookies: function () {
//         let perant = document.getElementById("Paris");
//         let Name = document.createElement('h1')
//         perant.appendChild(Name);
//         Name.textContent = "Paris";

//         for (let i = 6; i <= 19; i++) {
//             this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);
//             let child = document.createElement('li');
//             perant.appendChild(child);

//             if (i <= 11) {
//                 child.textContent = `  ${i} am: ${this.NumberOfCookies[i]} cookies`;
//             }
//             else if (i == 12) {
//                 child.textContent = `  ${i} pm: ${this.NumberOfCookies[i]} cookies`;
//             }

//             else if (i > 12 && i <= 19) {
//                 child.textContent = `  ${i - 12} pm: ${this.NumberOfCookies[i]} cookies`;

//             }
//         }

//         this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
//         perant = document.getElementById("Paris");
//         child = document.createElement('li');
//         perant.appendChild(child);
//         child.textContent = `  Total : ${this.sum} cookies`;
//     },

// };
// console.log(Paris.simulatedNumberOfCookies());


// let Lima = {
//     minHourlyCustomers: 2,
//     maxHourlyCustomers: 16,
//     averageCookiesPerCustomer: 4.6,
//     NumberOfCookies: [],
//     sum: 0,

//     generateRandomNumber: function () {
//         return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
//     },

//     simulatedNumberOfCookies: function () {
//         let perant = document.getElementById("Lima");
//         let Name = document.createElement('h1')
//         perant.appendChild(Name);
//         Name.textContent = "Lima";

//         for (let i = 6; i <= 19; i++) {
//             this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);
//             let child = document.createElement('li');
//             perant.appendChild(child);

//             if (i <= 11) {
//                 child.textContent = `  ${i} am: ${this.NumberOfCookies[i]} cookies`;
//             }
//             else if (i == 12) {
//                 child.textContent = `  ${i} pm: ${this.NumberOfCookies[i]} cookies`;
//             }

//             else if (i > 12 && i <= 19) {
//                 child.textContent = `  ${i - 12} pm: ${this.NumberOfCookies[i]} cookies`;

//             }
//         }

//         this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
//         perant = document.getElementById("Lima");
//         child = document.createElement('li');
//         perant.appendChild(child);
//         child.textContent = `  Total : ${this.sum} cookies`;
//     },

// };
// console.log(Lima.simulatedNumberOfCookies());



/*-------------------------------------------------- PART B : constructor function object --------------------------------------------------*/

let storedCreatedObj = [];

const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
};


function Market(locationName, minCustomers, maxCustomers, averageCookies) {

    this.locationName = locationName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookies = averageCookies;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    this.sumOfCookiesPerDay = 0;

    this.calacCustomerPerHour = function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.customerPerHour.push(randomNumber(this.minCustomers, this.maxCustomers));
        };
    };

    this.calcCookiesPerHour = function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cookiesPerHour.push(Math.floor(this.averageCookies * this.customerPerHour[i]));
            this.sumOfCookiesPerDay += this.cookiesPerHour[i];
        };

    };

    this.render = function () {
        let dataRow = document.createElement('tr')
        perant.appendChild(dataRow);

        let nameOfLocation = document.createElement('th');
        dataRow.appendChild(nameOfLocation);
        nameOfLocation.textContent = this.locationName;

        for (let i = 0; i < workingHours.length; i++) {
            let data = document.createElement('td');
            dataRow.appendChild(data);
            data.textContent = this.cookiesPerHour[i];
        }

        let dailyTotal = document.createElement('td');
        dataRow.appendChild(dailyTotal);
        dailyTotal.textContent = this.sumOfCookiesPerDay;

    };

    storedCreatedObj.push(this);

};

/*----------------------------------------Form CREATING PART ----------------------------------------  */


let form = document.getElementById('form');
form.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    let newLocationName = event.target.locationEntry.value;
    let newMinCustomers = event.target.minCustomer.value;
    let newMaxCustomers = event.target.maxCustomer.value;
    let newAverageCookies = event.target.avgCookies.value;

    // newMinCustomers = Number(newMinCustomers);
    // newMaxCustomers = Number(newMaxCustomers);
    newAverageCookies = Number(newAverageCookies);

    newLocation = new Market(newLocationName, newMinCustomers, newMaxCustomers, newAverageCookies);
    storedCreatedObj[storedCreatedObj.length - 1].calacCustomerPerHour();
    storedCreatedObj[storedCreatedObj.length - 1].calcCookiesPerHour();
    storedCreatedObj[storedCreatedObj.length - 1].render();
    storedCreatedObj[storedCreatedObj.length - 1].footerMake();


};

/*----------------------------------------HEADER AND FOOTER CREATING PART ----------------------------------------  */



let perant = document.getElementById("theSales");
console.log(perant);

function headerMake() {
    let rowHeader = document.createElement('tr');
    perant.appendChild(rowHeader);

    let HomeTh = document.createElement('th');
    rowHeader.appendChild(HomeTh);
    HomeTh.textContent = "Location Name";

    for (let i = 0; i < workingHours.length; i++) {
        let timeList = document.createElement('th');
        rowHeader.appendChild(timeList);
        timeList.textContent = workingHours[i];
    };

    let lastHead = document.createElement('th');
    rowHeader.appendChild(lastHead);
    lastHead.textContent = "Daily Total";

};


Market.prototype.footerMake = function () {
    let footRow = document.createElement('tr');
    perant.appendChild(footRow);

    let firstFoot = document.createElement('th');
    footRow.appendChild(firstFoot);
    firstFoot.textContent = "Totals";

    let allTotals = 0;

    for (let i = 0; i < workingHours.length; i++) {
        let totalEachHour = 0;
        for (let j = 0; j < storedCreatedObj.length; j++) {
            totalEachHour += storedCreatedObj[j].cookiesPerHour[i];
        }
        allTotals += totalEachHour;
        let footData = document.createElement('td');
        footRow.appendChild(footData);
        footData.textContent = totalEachHour;
    }
    let totalOfTotal = document.createElement('th');
    footRow.appendChild(totalOfTotal);
    totalOfTotal.textContent = allTotals;

};



/*--------------------------------------------------INVOKING PART --------------------------------------------------  */


headerMake();

console.log(storedCreatedObj);

Location01 = new Market('Seattle', 23, 65, 6.3)
Location02 = new Market('Tokyo', 3, 24, 1.2)
Location03 = new Market('Dubai', 11, 38, 3.7)
Location04 = new Market('Paris', 20, 38, 2.3);
Location05 = new Market('Lima', 2, 16, 4.6);

for (let i = 0; i < storedCreatedObj.length; i++) {
    storedCreatedObj[i].calacCustomerPerHour();
    storedCreatedObj[i].calcCookiesPerHour();
    storedCreatedObj[i].render();
}



