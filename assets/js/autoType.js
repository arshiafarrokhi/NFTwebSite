let x = ''
let y = ''

let _goal = document.getElementById('gradiantText')


function autotype() {

    setTimeout(() => {
        let i = 1
        let temp = ('NFT Digital Art')
        x = setInterval(() => {
            if (i <= temp.length) {
                _goal.innerHTML = temp.slice(0, i)
                i++
            } else {
                clearInterval(x)
                y = setInterval(_del, 80)
            }
        }, 200);

        function _del() {
            if (i >= 0) {
                _goal.innerText = temp.slice(0, i)
                i--
            } else {
                clearInterval(y)
                i = 0
                autotype().click
            }
        }
    }, 1100);
}

