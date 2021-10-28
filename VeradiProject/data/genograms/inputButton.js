'use strict';


const urlImage = {
    'none': '../../static/image/genograms/none.png',
    'man': '../../static/image/genograms/man.png',
    'woman': '../../static/image/genograms/woman.png'
}

// ------ 글로벌 변수 ------
let global_xnum = 5
let global_ynum = 5


// ------ <버튼> 초기 생성 ------
function buttonBuild() {
    let x = global_xnum
    let y = global_ynum
    document.open()
    document.write('<input type="button" value="event">')
    document.write('<table id="buttonTable" width="200" height="200" border=1>')
    for (let i=1; i<x+1; i++) {
        document.write('<tr>')
        for (let j=1; j<y+1; j++) {
            document.write(
                '<td onclick="buttonModify('+i+', '+j+')">'+
                '<img id="button['+i+']['+j+']" src="'+urlImage.woman+'"></td>')
        }
        document.write('</tr>')
    }
    document.write('</table>')
    document.close()
}


// ------ <버튼> 수정 ------
function buttonModify(i, j) {
    document.getElementById("button["+i+"]["+j+"]").src = urlImage.man
}


// ------ <버튼> 초기화 ------
// 모든 button 이미지를 none으로 바꾸고, 값 또한 바꿉니다.
function buttonDefault() {
    let x = global_xnum
    let y = global_ynum
    for (let i=1; i<x+1; i++) {
        for (let j=1; j<y+1; j++) {
            document.getElementById("button["+i+"]["+j+"]").src = urlImage.none
        }
    }
}

