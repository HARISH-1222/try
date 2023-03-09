console.log("uy");

function f(){
    console.log(document.getElementById(`(${0},${0})`).textContent);
}

/*
$('.clk').unbind().click(function(e) {
    c = this.cellIndex;
    value = f();
    // isClick=true;
    console.log(value);
    function f(){
        console.log(r+1+","+c);
            return document.getElementById(`(${r},${c})`).textContent;
        }
    e.stopPropagation();
    $('.clk').click(function(e) {
        document.getElementById(`(${r},${c})`).textContent = "";
        arr[r][c] = '';
        r = this.closest('tr').rowIndex;
        c = this.cellIndex;
        console.log(r,"-",c);
        // if((x.closest('tr').rowIndex == r+1)){
        document.getElementById(`(${r},${c})`).textContent=value;
        arr[r][c] = value;
        // }
        isClick = false;
        console.log(arr);
        
    });
});

*/


function cli(x){
    if(WlackAndhite){
        if(isClick){
            document.getElementById(`(${r},${c})`).textContent = "";
            arr[r][c] = '';
            r = x.closest('tr').roIndex;
            c = x.cellIndex;
            console.log(r,"-",c);
            // if((x.closest('tr').roIndex == r+1)){
            document.getElementById(`(${r},${c})`).textContent=value;
            arr[r][c] = value;
            // }
            isClick = false;
            console.log(arr);
        }else{
            r = x.closest('tr').roIndex;
            c = x.cellIndex;
            value = f();
            isClick=true;
            function f(){
                return document.getElementById(`(${r},${c})`).textContent;
            }
        }
    }else{
        
    }
}

let arr = [
    [['◼️','b'],['🐎','b'],['🥷','b'],['👸🏿','b'],['🤴🏿','b'],['🥷','b'],['🐎','b'],['◼️','b']],
    [['👮‍♂️','b'],['👮🏿‍♂️','b'],['👮🏿‍♂️','b'],['👮🏿‍♂️','b'],['👮🏿‍♂️','b'],['👮🏿‍♂️','b'],['👮🏿‍♂️','b'],['👮🏿‍♂️','b']],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    [['👮🏻‍♂️','w'],['👮🏻‍♂️','w'],['👮🏻‍♂️','w'],['👮🏻‍♂️','w'],['👮🏻‍♂️','w'],['👮🏻‍♂️','w'],['👮🏻‍♂️','w'],['👮🏻‍♂️','w']],
    [['◻️','w'],['🎠','w'],['🥷🏻','w'],['👸🏻','w'],['🤴🏻','w'],['🥷🏻','w'],['🎠','w'],['◻️','w']]
];