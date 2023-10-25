var a, b
function clickA(){
    a = parseInt(prompt('Nhập giá trị A'))
}
function clickB(){
    b = parseInt(prompt('Nhập giá trị B'))
}
function clickC(){
    if (a == 0) {
        if (b == 0) {
            alert('Phuong trinh vo so nghiem')
    }
        else {
            alert('Phuong trinh vo nghiem')
        }
    }else {
                alert("Tổng của A và B là: " + (-b/a))
    }
}
         
        
        
