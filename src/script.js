'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const buttons = document.querySelectorAll('.btn-code');
    let previousValue = 0;
    let currentValue = 0;
    let clear = document.querySelector('.clear');
    let del = document.querySelector('.delete');
    let divide = document.querySelector('.divide');
    let mul = document.querySelector('.mul');
    let plus = document.querySelector('.plus');
    let minus = document.querySelector('.minus');
    let equals = document.querySelector('.equals');

    let actionDesc = '';

    const soundOnOff = document.querySelector('.sound-on-off');
    const input = document.querySelector('.input');
    let audio = new Audio;

    let audioObj = {
        0: '../sound/1.mp3',
        1: '../sound/2.mp3',
        2: '../sound/3.mp3',
        3: '../sound/4.mp3',
        4: '../sound/5.mp3',
        5: '../sound/6.mp3',
        6: '../sound/7.mp3'
    }


    {
        let count = 1;
        soundOnOff.style.backgroundColor = 'rgb(173, 255, 47)';
        soundOnOff.addEventListener('click', () =>{
            if(count % 2 != 0){
                for (let key of buttons) {
                    key.addEventListener('click', () => {
                        let randomSound = Math.floor(Math.random() * 7);
                        audio.src = audioObj[randomSound];
                        audio.play();
                    })
                }
                count += 1;
                soundOnOff.style.backgroundColor = 'rgb(255, 0, 0)';
            } else if(count % 2 == 0){
                for (let key of buttons) {
                    key.addEventListener('click', () => {
                        let randomSound = Math.floor(Math.random() * 7);
                        audio.src = null;                                    
                    })
                }
                count += 1;
                soundOnOff.style.backgroundColor = 'rgb(173, 255, 47)';
            }
        })
    }

    {   input.value = '';
        for (let key of buttons) {
            key.addEventListener('click', () => {
            if(input.value == '' && key.innerHTML == 0){
                    input.value = '';
            } else if (input.value.length <= 35) {
                input.value += key.innerHTML;
            }
            
            })
        }

        clear.addEventListener('click', () =>{
            input.value = '';
        })

        del.addEventListener('click', () =>{
            /* console.log(input.value.charAt(1)); */
            let lngth = input.value.length;
            input.value = input.value.slice(0, -1);
        })

        plus.addEventListener('click', () =>{
            previousValue = input.value;
            input.value = '';
            actionDesc = 'plus';
        })

        minus.addEventListener('click', () => {
            previousValue = input.value;
            input.value = '';
            actionDesc = 'minus';
        })

        divide.addEventListener('click', () => {
            previousValue = input.value;
            input.value = '';
            actionDesc = 'divide';
        })

        mul.addEventListener('click', () => {
            previousValue = input.value;
            input.value = '';
            actionDesc = 'mul';
        })

        equals.addEventListener('click', () => {
            currentValue = input.value;
            input.value = '';
            if (actionDesc == 'plus') {input.value = +previousValue + +currentValue};
            if (actionDesc == 'minus') { input.value = +previousValue - +currentValue };
            if (actionDesc == 'divide') { input.value = +previousValue / +currentValue };
            if (actionDesc == 'mul') { input.value = +previousValue * +currentValue };
        })
    }
})