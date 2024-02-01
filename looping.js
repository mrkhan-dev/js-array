const friends = ["Rimon", "Billal", "Arman", "Arman", "Naiem", "Farabi"];
console.log(friends.length);
// for of loop
for (const friend of friends) {
  //   console.log(friend);
}

// for loop
for (i = 0; i < friends.length; i++) {
  //   console.log(friends[i]);
}

let n = 0;
while (n < friends.length) {
  console.log(friends[n]);
  n++;
}
