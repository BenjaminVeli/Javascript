let i = 0;

while (i < 6) {
    i++;
    if (i === 2) {
        continue;
    }
    if (i === 4) {     
        break;       // Cuando encuentre el 4 el loop se acaba
    }
    console.log(i);
}