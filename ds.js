const names = ['Max', 'James', 'Smart', 'john']
console.log(names[3])
console.log(names.length)
for (const el of names){
    console.log(el)
}

names.push('Aaron')

console.log(names)

names.find(el => el === 'Aaron')

console.clear()


names.push('Aaron')

console.log(names)

const aaron = names.findIndex(el => el === 'Aaron')
console.warn(aaron)



const yam = names.findIndex(el => el === 'Aaron')
names.splice(2, 3)

console.log(names)
