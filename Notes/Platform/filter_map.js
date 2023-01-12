const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Filter - Get 21 and older
// Common way of filtering by user a standard for loop. 
// Make a variable that will hold the new array.
let canDrink1 = []
// iterate through the array
for (let i = 0; i < ages.length; i++) {
    // if the age is 'i' which is going through to look at each number by its index
    // if greater than 21 then you push to the new array. 
    if (ages[i] >= 21) {
        canDrink1.push(ages[i])
    }

}

const canDrink2 = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
});

const canDrink3 = ages.filter(age => age >= 21);

// Filter the companies

const retailCompanies1 = companies.filter(function (company) {
    if (company.category == 'Retail') {
        return true;
    }
});

// Arrow functions
const retailCompanies2 = companies.filter(company => company.category == 'Retail')

// Get companies from the 80's

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// console.log(canDrink1);
// console.log(canDrink2);
// console.log(canDrink3);
// console.log(retailCompanies1);
// console.log(retailCompanies2);
// console.log(eightiesCompanies);
// console.log(lastedTenYears);

//Map

// Create array of company names

const companyNames1 = companies.map(function (company) {
    return company.name;
});

const companyNames2 = companies.map(company => company.name);

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);


// console.log(companyNames1);
console.log(companyNames2);


