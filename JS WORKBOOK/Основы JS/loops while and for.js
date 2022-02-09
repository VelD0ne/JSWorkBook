a = 1;
while (a < 5) {
    a++;
    console.log("Huawei");
}

do {
    console.log("Wow i made it")
} while (false);

for (let i = 0; i < 10; i++) { // parts can pe skipped
    if (i % 2 == 0) continue;
    else if (i == 5) break;
    console.log(i);
}

label: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 2 && j == 5) break label;
        console.log(`${i}+${j}=${i+j}`);
    }
}