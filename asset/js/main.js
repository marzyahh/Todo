let _userName = document.getElementsByClassName('userName')[0]

function _Entire() {
    let _Entire = prompt('Who are You?');
    _userName.innerText = _Entire
}
// _Entire()

let _timer = document.getElementsByClassName('timer')[0]
let _iconPlus = document.getElementsByClassName('iconPlus')[0]
let _right = document.getElementsByClassName('right')[0]
let _test = document.getElementsByTagName('input')[0]

// Date
let _today = new Date();
_timer.innerText = _today.getHours() + ":" + _today.getMinutes();

_iconPlus.addEventListener('click', () => {
    let _high = document.getElementById('high')
    let _medium = document.getElementById('medium')
    let _low = document.getElementById('low')

    let _input = document.getElementsByTagName('input')[0].value

    function _newTask(){
            let _div = document.createElement('div')
        _right.appendChild(_div)
        _div.classList.add('newDiv')
    
    
        let _h5 = document.createElement('h5')
        _h5.innerText = _input
        _div.appendChild(_h5)
    
        let _iconCheck = document.createElement('div')
        _iconCheck.innerHTML = '<i class="bi bi-check-circle"></i>'
        _div.appendChild(_iconCheck)
    
        let _iconEdit = document.createElement('div')
        _iconEdit.innerHTML = '<i class="bi bi-pencil-fill"></i>'
        _div.appendChild(_iconEdit)
    
        let _iconTrash = document.createElement('div')
        _iconTrash.innerHTML = '<i class="bi bi-trash"></i>'
        _div.appendChild(_iconTrash)
        for (let q = 0; q < 3; q++) {
            _star = document.createElement('i')
            _star.innerHTML = '<i class="bi bi-star"></i>'
            _star.classList.add('star')
            _right.appendChild(_star)
    
            _star.addEventListener('click', (e) => {
                e.target.classList.toggle('starBg')
                if (q == 0) {
                    _low.appendChild(_h5)
                }
                if (q == 1) {
                    _medium.appendChild(_h5)
                }
                if (q == 2) {
                    _high.appendChild(_h5)
                }
            })
        }
        let _allDiv = document.querySelectorAll('.newDiv')
        let _allStar = document.querySelectorAll('.star>i')
    
        _allDiv.forEach((val) => {
            let _allChild = val.children
            // Checked Tasks
            console.log('testtt');
            _allChild[1].addEventListener('click', () => {
                _allChild[0].classList.toggle('decoration')
                console.log('decoration');
            })
    
            //  Edit Task
            _allChild[2].addEventListener('click', () => {
                _allChild[2].style.color = 'red'
                let _editInp = document.createElement('input')
                _div.appendChild(_editInp)
                _editInp.value = _h5.innerText
                _editInp.addEventListener('input', () => {
                    _h5.innerHTML = _editInp.value
                })
    
                _editInp.addEventListener('keyup', (e) => {
                    if (e.key == 'Enter') {
                        _editInp.remove()
                        _allChild[2].style.color = 'black'
    
    
                    }
                })
    
            })
            // Delete Tasks
            _allChild[3].addEventListener('click', () => {
                val.remove()
                console.log(_allStar);
                _allStar.forEach((val)=>{
                    val.remove()
                })
            })
        })
        // _allStar.forEach((val)=>{
        //     val.remove()
        // })
    }
    if(_input == ''){
        alert('Please Enter a Task!')

    }else{
        _newTask()
    }

    // checked Tasks
  
    document.getElementsByTagName('input')[0].value = ''
})


