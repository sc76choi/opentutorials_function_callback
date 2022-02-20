
console.log('hello javascript')
{
    function a() {
    }

    a = {
        // method b
        b:function() {
        }
    }
}

{
    /**
     * @description 함수는 값이기 때문에 함수의 인자로 전달 가능
     * @ref https://youtu.be/zGBkPTwydeg
     * @param {*} func 
     * @param {*} num 
     * @returns function
     */

    function cal(func, num) {
        return  func(num);
    }

    function increase(num) {
        return num + 1;
    }

    function decrease(num) {
        return num - 1;
    }

    // console.log(cal(increase, 1));
    // console.log(cal(decrease, 1));
}

{
    /**
     * @description 함수는 함수의 리턴 값으로도 사용될 수 있다.
     * @ref https://youtu.be/1pqJphcounU
     * @param 
     * @param 
     * @returns 
     */

    function cal(mode) {
        let funcs = {
            'plus': function(left, right) {return left + right},
            'minus': function(left, right) {return left - right}
        }
        return funcs[mode];
    }
    // console.log(cal('plus')(2,1));
    // console.log(cal('minus')(2,1));

}

{
    /**
     * @description 당연히 배열의 값으로도 사용할 수 있다.
     *               first-class citizen/object
     * @ref https://youtu.be/1pqJphcounU
     * @param 
     * @param 
     * @returns 
     */

    let process = [
        function(input) {return input + 10;},
        function(input) {return input * input;},
        function(input) {return input / 2;}
    ];

    let input = 1;
    for(let i = 0; i < process.length; i++) {
        input = process[i](input);
    }
    // console.log(input);
}


{
    /**
     * @description callback 처리의 위임
     *  값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수를 전달할 수 있다.
     *  값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀수 있다.
     *  인자로 전달된 함수 sortNumber의 구현에 따라서 sort의 동작방법이 완전히 바뀌게 된다.
     * @ref https://youtu.be/R2AcG_SoCMk
     * @param 
     * @param 
     * @returns 
     */

    let numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    console.log(numbers);

    numbers.sort(); // sort는 배열객체의 method(내장객체, 내장method, build-in 객체)
    let sortfunc = function(a, b) {
        console.log(a, b);
        if(a > b){
            return 1;
        } else if ( a < b) {
            return -1;
        } else {
            return 0;
        }
        // return a - b;
    }
    console.log(numbers.sort(sortfunc)); // sortfunc는 callback 함수
    console.log(numbers.sort((a, b) => a - b));
}

{
        /**
     * @description 비동기 처리
     *  
     * @ref https://youtu.be/NDFjwybbong
     * @param 
     * @param 
     * @returns 
     */

    

}