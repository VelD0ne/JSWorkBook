let x = 'value3';
switch (x) {
    case 'value1': // if (x === 'value1')
        console.log(1);

    case 'value2': // if (x === 'value2')
        console.log(2);
        break;

    default:
        console.log(0);
        break;
}

let a = 3;

switch (a) {
    case 4:
        console.log('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
        break;

    default:
        console.log('The result is strange. Really.');
}