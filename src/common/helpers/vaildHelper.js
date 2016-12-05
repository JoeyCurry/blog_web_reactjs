//判断数据不为空
function isNotEmpty(value){
    if (value) {
        return true;
    }
    return false;
}

//判断是否为数字
function isNum(value){
    if (!isNaN(value)) {
        return true;
    }
    return false;
}

function isCardNo(card)
{
   // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
   let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
   if(reg.test(card)) {
       return true;
   }
   return false;
}

function isUnSame(str1,str2){
    console.log(str1 == str2);
    if (str1 !== str2) {
        return true
    }
    return false
}

//判断是否为固定长度
function isFixedNumLength(value, length){
    if (value.length == length && !isNaN(value)) {
        return true;
    }
    return false;
}

//判断长度是否不少于固定值
function isMoreThenNunLength(value, length){
    if (value.length >= length) {
        return true;
    }
    return false;
}

const validType = {
    'isNotEmpty': (value)=>isNotEmpty(value),
    'isFixedNumLength': (value, length)=>isFixedNumLength(value, length),
    'isMoreThenNunLength':(value, length)=>isMoreThenNunLength(value, length),
    'isCardNo':(value)=>isCardNo(value),
    'isUnSame':(str1,str2)=>isUnSame(str1,str2),
}

export default class ValidHelper {
    constructor() {

    }

    setValid(validList){
        this._validList = validList;
    }
    //   [ {value: '', rules:[type: '', errMsg]} ]
    // [{value: '', rules: [{type: '', errMsg}]}]
    valid(){
        let ret = '';
        for(let i=0; i<this._validList.length; i++){
            let valids = this._validList[i];
            let value = valids.value;
            for(let j=0; j<valids.rules.length; j++){
                let valid = valids.rules[j];
                let types = valid.type.split(':');
                let tempFunc = validType[types[0]];
                let funcRet;
                if (types.length > 1) {
                    funcRet = tempFunc(value, types[1]);
                }else{
                    funcRet = tempFunc(value);
                }
                if (!funcRet) {
                    ret = valid.errMsg;
                    return ret;
                }
            }
        }
        return ret;
    }
}
