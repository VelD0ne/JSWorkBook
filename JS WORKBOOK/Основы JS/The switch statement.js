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
        alert('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}