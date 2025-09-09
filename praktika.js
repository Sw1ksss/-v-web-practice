const nums = [1,2,3,4,5];
const suam = 0;
function sumArray(nums) {
    var sum = 0;
    for (var i = 0; i  < nums.length; i++){
        sum = sum + nums[i];
    }
    return sum;
}

console.log(sumArray(nums));

function findMax(nums){
    var max = -Infinity;
    for(var i = 0; i<nums.length;i++){
        if (max < nums[i]){
            max = nums[i];
        }
    }
    return max;
}
console.log(findMax(nums));


const products = [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ];

// Нужно преобразовать в:
/**
* {
* "Electronics": [
*   { "productName": "Laptop", "price": 1000 },
*    { "productName": "Phone", "price": 500 }
*  ],
*  "Education": [
*    { "productName": "Book", "price": 20 }
*  ],
*  "Office": [
*    { "productName": "Pen", "price": 2 }
*  ]
* }
**/

function groupByCategory(products) {
  return products.reduce((acc, product) => {
    const { category, name, price } = product;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push({
      productName: name,
      price: price
    });

    return acc;
  }, {});
}



console.log(groupByCategory(products));