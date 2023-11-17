//Letters Array
let num = [10, 50, 40, 30, 80];
console.log(num);
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
console.log("The Array is: " + num);
num.push(20);
console.log("The New last element is added: " + num);
num.unshift(60);
console.log("The New first element is added: " + num);
num.pop();
console.log("The Last element is poped: " + num);
num.shift();
console.log("The First element is poped: " + num);
num.reverse()
console.log("The Given array is reversed: " + num);

function sort(n1, n2) {
    let sortit = n1 - n2;
    return sortit;
}
console.log("The Array sorted in ascending order: " + num.sort());
console.log("The Array sorted in Decending order: " + num.sort().reverse());
let num1 = num.indexOf(50, 1)
console.log("The Element is in that index or not: " + num1);
let num2 = num.splice(0, 3, 90, 70, 60);
console.log("The Elements which are replacing: " + num2);
console.log("The Elements are replaced: " + num);
let num3 = num.slice(0, 3)
console.log(num3);
console.log(num);

//Letters Array
let letters = ['c', 'e', 'f', 'a', 'h', 'b'];
console.log(letters);
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}
console.log("The Array of letters is: " + letters);
letters.push('g');
console.log("The New last letters is added: " + letters);
letters.unshift('s');
console.log("The New first letters is added: " + letters);
letters.pop();
console.log("The Last letters is poped: " + letters);
letters.shift();
console.log("The First letters is poped: " + letters);
letters.reverse()
console.log("The Given array of letters is reversed: " + letters);

function sort(l1, l2) {
    let sorting = l1 - l2;
    return sorting;
}
console.log("The Letters are sorted in Alphibatic aorder: " + letters.sort());
console.log("The Letters are sorted in Alphibatic dorder: " + letters.sort().reverse());
let l3 = letters.indexOf('f', 1)
console.log("The Element is in that index or not: " + l3);
let l4 = letters.splice(0, 3, 'r', 's', 't');
console.log(l4);
console.log(letters);
let l5 = letters.slice(1, 4);
console.log(l5);
console.log(letters);

//Names Array
let names = ['Ravi', 'Prashanth', 'Shashank', 'Kavya', 'Vinu', 'Manu'];
console.log(name);
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("The Array of names is: " + names);
names.push('Paru');
console.log("The New last names is added: " + names);
names.unshift('Manjula');
console.log("The New first names is added: " + names);
names.pop();
console.log("The Last names is poped: " + names);
names.shift();
console.log("The First names is poped: " + names);
names.reverse()
console.log("The Given array of names is reversed: " + names);

function sort(n1, n2) {
    let sortnames = n1 - n2;
    return sortnames;
}
console.log("The Names are sorted in Alphibatic aorder: " + names.sort());
console.log("The Names are sorted in Alphibatic dorder: " + names.sort().reverse());
let n3 = names.indexOf('vinu', 3)
console.log("The Name is in that index or not: " + n3);
let n4 = names.splice(0, 3, 'Abbhi', 'Chandu', 'Shekar');
console.log(n4);
console.log(names);
let n5 = names.slice(0, 4);
console.log(n5);
console.log(names);

//City Names Array
let cn = ['Chitradurga', 'Bellari', 'Gadag', 'Bengalure', 'Kolar'];
console.log(cn);
for (let i = 0; i < cn.length; i++) {
    console.log(cn[i]);
}
console.log("The Array of  city names is: " + cn);
cn.push('Bijapura');
console.log("The New last city names is added: " + cn);
cn.unshift('Mandya');
console.log("The New first city names is added: " + cn);
cn.pop();
console.log("The Last city names is poped: " + cn);
cn.shift();
console.log("The First city names is poped: " + cn);
cn.reverse()
console.log("The Given array of city names is reversed: " + cn);

function sort(cn1, cn2) {
    let sortcn = cn1 - cn2;
    return sortcn;
}
console.log("The CityNames are sorted in Alphibatic aorder: " + cn.sort());
console.log("The CityNames are sorted in Alphibatic dorder: " + cn.sort().reverse());
let cn3 = cn.indexOf('Gadag', 3)
console.log("The Name is in that index or not: " + cn3);
let cn4 = cn.splice(2, 4, 'Belagavi', 'Hassan', 'Mysore');
console.log(cn4);
console.log(cn);
let cn5 = names.slice(0, 4);
console.log(cn5);
console.log(cn);

//Animal Names
let an = ['Cat', 'Rat', 'Dog', 'Monkey', 'Cow'];
console.log(an);
for (let i = 0; i < an.length; i++) {
    console.log(an[i]);
}
console.log("The Array of  animal names is: " + an);
an.push('Buffallo');
console.log("The New last animal names is added: " + an);
an.unshift('Tiger');
console.log("The New first animal names is added: " + an);
an.pop();
console.log("The Last city animal is poped: " + an);
an.shift();
console.log("The First city animal is poped: " + an);
an.reverse()
console.log("The Given array of animal names is reversed: " + an);

function sort(an1, an2) {
    let sortan = an1 - an2;
    return sortan
}
console.log("The AnimalNames are sorted in Alphibatic aorder: " + an.sort());
console.log("The AnimalNames are sorted in Alphibatic dorder: " + an.sort().reverse());
let an3 = an.indexOf('Monkey', 1)
console.log("The AnimalName is in that index or not: " + an3);
let an4 = an.splice(1, 3, 'Goat', 'Sheep', 'Lion');
console.log(an4);
console.log(an);
let an5 = an.slice(0, 3);
console.log(an5);
console.log(an);