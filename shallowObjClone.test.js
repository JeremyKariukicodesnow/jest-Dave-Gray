const shallowObjectClone = require('./shallowObjClone')

test ('Create  a clone of the object parameter ' , ()=>{
    const myObj = {
        person:'Mikey',
        number:42
    }
    expect(shallowObjectClone(myObj)).toStrictEqual(myObj)
})