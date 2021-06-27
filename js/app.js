
let Seattle = {
minHourlyCustomers: 23,
maxHourlyCustomers: 65,
averageCookiesPerCustomer: 6.3,
NumberOfCookies:[],
sum : 0,

generateRandomNumber : function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
},

simulatedNumberOfCookies : function(){
    let perant=document.getElementById("Seattle");
    let Name= document.createElement('h1');
    perant.appendChild(Name);
    Name.textContent="Seattle";  
    
    for (let i = 6; i <= 19; i++) {
        this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);    
       
        let child= document.createElement('li');    
        perant.appendChild(child);
        
        if(i<=11){
            child.textContent=`  ${i} am: ${this.NumberOfCookies[i]} cookies`;  
        }
        else if(i==12){
            child.textContent=`  ${i} pm: ${this.NumberOfCookies[i]} cookies`;  
        }
        
        else if(i>12 && i<=19){
            child.textContent=`  ${i-12} pm: ${this.NumberOfCookies[i]} cookies`;  

        }
    }
    
    this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
    perant=document.getElementById("Seattle");
    child= document.createElement('li'); 
    perant.appendChild(child);
    child.textContent=`  Total : ${this.sum} cookies`;  
},

};

console.log(Seattle.simulatedNumberOfCookies());


let Tokyo = {
minHourlyCustomers: 3,
maxHourlyCustomers: 24,
averageCookiesPerCustomer: 1.2,
NumberOfCookies:[],
sum : 0,

generateRandomNumber : function(){
return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
},

simulatedNumberOfCookies : function(){
let perant=document.getElementById("Tokyo");
let Name= document.createElement('h1');
perant.appendChild(Name);
Name.textContent="Tokyo";  

for (let i = 6; i <= 19; i++) {
    this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);    
    let child= document.createElement('li');    
    perant.appendChild(child);
    
    if(i<=11){
        child.textContent=`  ${i} am: ${this.NumberOfCookies[i]} cookies`;  
    }
    else if(i==12){
        child.textContent=`  ${i} pm: ${this.NumberOfCookies[i]} cookies`;  
    }
    
    else if(i>12 && i<=19){
        child.textContent=`  ${i-12} pm: ${this.NumberOfCookies[i]} cookies`;  

    }
}

this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
perant=document.getElementById("Tokyo");
child= document.createElement('li'); 
perant.appendChild(child);
child.textContent=`  Total : ${this.sum} cookies`;  
},

};
console.log(Tokyo.simulatedNumberOfCookies());


let Dubai = {
minHourlyCustomers: 11,
maxHourlyCustomers: 38,
averageCookiesPerCustomer: 3.7,
NumberOfCookies:[],
sum : 0,

generateRandomNumber : function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
},

simulatedNumberOfCookies : function(){
    let perant=document.getElementById("Dubai");
    let Name= document.createElement('h1');
    perant.appendChild(Name);
    Name.textContent="Dubai";  
    
    for (let i = 6; i <= 19; i++) {
        this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);    
        let child= document.createElement('li');    
        perant.appendChild(child);
        
        if(i<=11){
            child.textContent=`  ${i} am: ${this.NumberOfCookies[i]} cookies`;  
        }
        else if(i==12){
            child.textContent=`  ${i} pm: ${this.NumberOfCookies[i]} cookies`;  
        }
        
        else if(i>12 && i<=19){
            child.textContent=`  ${i-12} pm: ${this.NumberOfCookies[i]} cookies`;  

        }
    }
    
    this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
    perant=document.getElementById("Dubai");
    child= document.createElement('li'); 
    perant.appendChild(child);
    child.textContent=`  Total : ${this.sum} cookies`;  
},

};
console.log(Dubai.simulatedNumberOfCookies());


let Paris = {
minHourlyCustomers: 20,
maxHourlyCustomers: 38,
averageCookiesPerCustomer: 2.3,
NumberOfCookies:[],
sum : 0,

generateRandomNumber : function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
},

simulatedNumberOfCookies : function(){
    let perant=document.getElementById("Paris");
    let Name= document.createElement('h1')
    perant.appendChild(Name);
    Name.textContent="Paris";  
    
    for (let i = 6; i <= 19; i++) {
        this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);    
        let child= document.createElement('li');    
        perant.appendChild(child);
        
        if(i<=11){
            child.textContent=`  ${i} am: ${this.NumberOfCookies[i]} cookies`;  
        }
        else if(i==12){
            child.textContent=`  ${i} pm: ${this.NumberOfCookies[i]} cookies`;  
        }
        
        else if(i>12 && i<=19){
            child.textContent=`  ${i-12} pm: ${this.NumberOfCookies[i]} cookies`;  

        }
    }
    
    this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
    perant=document.getElementById("Paris");
    child= document.createElement('li'); 
    perant.appendChild(child);
    child.textContent=`  Total : ${this.sum} cookies`;  
},

};
console.log(Paris.simulatedNumberOfCookies());


let Lima = {
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    averageCookiesPerCustomer: 4.6,
    NumberOfCookies:[],
    sum : 0,
    
    generateRandomNumber : function(){
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers)
    },
    
    simulatedNumberOfCookies : function(){
        let perant=document.getElementById("Lima");
        let Name= document.createElement('h1')
        perant.appendChild(Name);
        Name.textContent="Lima";  
        
        for (let i = 6; i <= 19; i++) {
            this.NumberOfCookies[i] = Math.floor(this.generateRandomNumber() * this.averageCookiesPerCustomer);    
            let child= document.createElement('li');    
            perant.appendChild(child);
            
            if(i<=11){
                child.textContent=`  ${i} am: ${this.NumberOfCookies[i]} cookies`;  
            }
            else if(i==12){
                child.textContent=`  ${i} pm: ${this.NumberOfCookies[i]} cookies`;  
            }
            
            else if(i>12 && i<=19){
                child.textContent=`  ${i-12} pm: ${this.NumberOfCookies[i]} cookies`;  
    
            }
        }
        
        this.sum = this.NumberOfCookies.reduce((a, b) => a + b, 0)
        perant=document.getElementById("Lima");
        child= document.createElement('li'); 
        perant.appendChild(child);
        child.textContent=`  Total : ${this.sum} cookies`;  
    },
    
    };
    console.log(Lima.simulatedNumberOfCookies());