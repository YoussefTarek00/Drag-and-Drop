let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let boxes = document.querySelectorAll('.boxs')
let drag = null;

btn.onclick = function(){
if(inp.value != ''){
    boxes[0].innerHTML += `
    <p class="items" draggable="true">${inp.value}<p/>
    `
    inp.value=''
}
dragItems()
}

function dragItems(){
    let items = document.querySelectorAll('.items');
    items.forEach( items=> {
        items.addEventListener('dragstart', function(){
            drag = items;
            items.style.opacity = '0.5';
        })
        items.addEventListener('dragend', function(){
            drag = null;
            items.style.opacity = '1';
        })


        boxes.forEach(box=>{
            box.addEventListener('dragover', function(e){
                e.preventDefault()
                this.style.background = '#090';
                this.style.color = '#fff';
            })
            
            box.addEventListener('dragleave', function(){
                this.style.background = '#fff';
                this.style.color = '#000';
            })

            box.addEventListener('drop', function(){
                box.append(drag)
                this.style.background = '#fff';
                this.style.color = '#000';
            })
            
        })
    });
}