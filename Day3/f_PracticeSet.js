let marks = {
    harry: 98,
    monika: 40,
    haeeli: 90
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(Object.keys(marks)[i] + ":" + marks[Object.keys(marks)[i]])
}

for (let key in marks) {
    console.log(key + ":" + marks[key]);
}