/* Exos - partie 2 */

function typeCheckV1(arg1, arg2){
    let verifType = '';
    if(typeof(arg1) == 'number' && arg2 == 'number') {
        verifType = true;
    }
    else if(typeof(arg1) == 'string' && arg2 == 'string'){
        verifType = true;
    }
    else if(typeof(arg1) == 'boolean' && arg2 == 'boolean') {
        verifType = true;
    }
    else if(arg1 == '' && arg2 == 'null') {
        verifType = true;
    }
    console.log(verifType);
}
typeCheckV1('','null');

