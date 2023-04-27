let num     = [1,2,3,4,5,6,7,8,9,0];
let sec     = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
let third   = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
let fourth  = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

let box = [];
const findIndex = (digit) => {
    let index = digit == 0 ? -1 : (digit == 1 ? -2 : (digit == 2 ? -3 : (digit == 3 ? -4 : (digit == 4 ? -5 : (digit == 5 ? 4 : (digit == 6 ? 3 : (digit == 7 ? 2 : (digit == 8 ? 1 : (digit == 9 ? 0 : null)))))))));
    return index;
}

document.querySelector('[name="hugetext"]').addEventListener("keyup", function(e){
    let text = e.target.value.split('');
    box = [];

    let transformed = document.querySelector('[name="char"]').value;
    if(transformed)
    {
        if(transformed == 'H')
        {
            text.forEach(element => {
                
                let found = null;
                let rows  = '';

                num.forEach((number, key) => {
                    if(element == number)
                    {
                        found = findIndex(key);
                        rows  = num;
                    }
                });
                
                sec.forEach((second, key) => {
                    if(element == second)
                    {
                        found = findIndex(key);
                        rows  = sec;
                    }
                });
                
                third.forEach((thirdchar, key) => {
                    if(element == thirdchar)
                    {
                        found = findIndex(key);
                        rows  = third;
                    }
                });
                
                fourth.forEach((foruthchar, key) => {
                    if(element == foruthchar)
                    {
                        found = findIndex(key);
                        rows  = fourth;
                    }
                });

                if(found != null)
                {
                    found < 0 ? box.push(rows[rows.length + found]) : box.push(rows[found]);
                    
                }  
            });

            document.getElementById('output').innerText = box.join();
        }

    }else{

        if(text.length != 0)
        {
            alert('please enter a character');
        }
    }
    
});