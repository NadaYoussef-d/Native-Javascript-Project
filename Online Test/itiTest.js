// console.log('connjs')
///////////////////////////////////////////log in page
document.querySelector('#ok').addEventListener('click',function(e){
    var form = document.querySelector('.logIn');
    var userName = document.querySelector('#userName').value;
    var password = document.querySelector('#password').value;
    var testPage = document.querySelector('.content');
    if(userName.length > 3 && password.length >5){
        form.style.display = 'none';
        testPage.style.visibility = 'visible';
        ////////first question only
        html = '<div class="question">%i%- %q% </div><br><div class="answers"><div class="radio"><label><input type="radio" name="optradio" > a)%a%</label></div><div class="radio"><label><input type="radio" name="optradio" >b)%b%</label></div><div class="radio"><label><input type="radio" name="optradio" >c)%c%</label></div><div class="radio"><label><input type="radio" name="optradio" >d)%d%</label></div></div><div class="radio"></div>'; 
        html = html.replace('%i%',q1.index);
        html = html.replace('%q%',q1.question);
        html = html.replace('%a%',q1.ansewr1);
        html = html.replace('%b%',q1.ansewr2);
        html = html.replace('%c%',q1.ansewr3);
        html = html.replace('%d%',q1.ansewr4);
   
document.querySelector('.main').insertAdjacentHTML('afterbegin',html);
       // testPage.style.add ='active'
    }else 
    {
        alert('please enter user name "at least 4 character" and password "at least 6 numbers"');
    }
   })
   ///////////////////////////////////test page 
   function question (ind ,q , a, b , c,d, correct){
     this.index = ind;
       this.question = q;
       this.ansewr1 = a;
       this.ansewr2 = b;
       this.ansewr3 = c;
       this.ansewr4 = d;
       this.ansewr = correct;
    }
    var correct = ['a','a','d','c','c','b','c','b','b','b'];
    console.log(correct)
    // console.log(question)
    var q1 = new question (1 ,'what is the sky color?', 'red','blue', 'yellow', 'grey','a')
    var q2 = new question ( 2 ,'who is the instructor?', 'ahmed','omnia', 'menna', 'osama', 'a' )
    var q3 = new question ( 3 ,'Philology is the', 'study of bones','study of muscles', 'study of architecture', 'science of languages', 'd' )
    var q4 = new question ( 4 ,'The 2006 World Cup Football Tournament held in', 'France','China', 'Germeny', 'Brazil', 'c' )
    var q5 = new question ( 5 , 'The "Black flag" signifies', 'danger','peace', 'protest', 'truce', 'c' )
    var q6 = new question ( 6 ,'Study of life in outer space is known as', 'endbiology','exobiology', 'enterbiology', 'neobiology', 'b' )
    var q7 = new question ( 7 ,'School of Aviation Medicine (Air Force) is located at', 'Allahabad','Hyderabad', 'Bangalore', 'Jalahalli', 'c' )
    var q8 = new question ( 8 ,'Pythagoras was first to ____ the universal validity of geometrical theorem', 'give','prove', 'both', 'none', 'b' )
    var q9 = new question ( 9 ,'Hitler party which came into power in 1933 is known as', 'labour party','nazi party', 'ku-kiux-klan', 'democratic party', 'b' )
    var q10 = new question ( 10 ,'Garampani sanctuary is located at', 'Junagarh, Gujarat','Diphu', 'Kphima', 'Gangtok', 'b' )
    var arr = [q1 ,q2, q3, q4 ,q5 , q6, q7, q8, q9, q10];

   
    var elm;
        document.querySelector('.indexer1').addEventListener('click',function(e){
            elm = e.target.innerText ;
            document.querySelector('.main').innerHTML = '';
            for(var i = 0 ; i < arr.length ; i++){
                if(i == elm - 1){
                    html = '<div class="question">%i%- %q% </div><br><div class="answers"><div class="radio"><label><input type="radio" name="optradio" > a)%a%</label></div><div class="radio"><label><input type="radio" name="optradio" >b)%b%</label></div><div class="radio"><label><input type="radio" name="optradio" >c)%c%</label></div><div class="radio"><label><input type="radio" name="optradio" >d)%d%</label></div></div><div class="radio"></div>'; 
                    html = html.replace('%i%',arr[i].index);
                    html = html.replace('%q%',arr[i].question);
                    html = html.replace('%a%',arr[i].ansewr1);
                    html = html.replace('%b%',arr[i].ansewr2);
                    html = html.replace('%c%',arr[i].ansewr3);
                    html = html.replace('%d%',arr[i].ansewr4);
                    html = html.replace('%cr%',arr[i].ansewr);
                }
            }
            document.querySelector('.main').insertAdjacentHTML('afterbegin',html);
        })
        document.querySelector('#mark').addEventListener('click', function(e){
            var marked = 'q' + elm;
            console.log(marked);
            listOfMark = '<li class="item">%item%</li>';
            listOfMark = listOfMark.replace('%item%',marked)
            document.querySelector('.list').insertAdjacentHTML("afterbegin",listOfMark);
        })
    function next(){
        document.querySelector('.indexer1').innerHTML ='';
     pager = '<table><tr><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr></table>';
     document.querySelector('.indexer1').insertAdjacentHTML('afterbegin',pager);

    }
    function prev(){
        document.querySelector('.indexer1').innerHTML ='';
     prevPage = '<table><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></table>';
     document.querySelector('.indexer1').insertAdjacentHTML('afterbegin',prevPage);

    }

    ///////////////////////////score 
   var result = document.querySelector('input').value;
   console.log(result)

    // }
                // var el =e.target;
                // var Qone = this.querySelector('#one')
                // var Qtwo = this.querySelector('#two')
                // var Qthree = this.querySelector('#three')
                // var Qfour = this.querySelector('#four')
                // var Qfive = this.querySelector('#five')
                
                // console.log(el);
                // if(el === Qone){
    
                // }
    

    // while ( arrOfRandom.length < 5){

    //         var r = Math.floor(Math.random() * 5);
    //         if(arrOfRandom.indexOf(r) === -1) {
    //             arrOfRandom.push(r)
    //            
    //         }

