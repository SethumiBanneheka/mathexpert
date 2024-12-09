function check(qN,ans){
	var q=document.getElementById(qN);
        if (q.value==ans){
		q.classList.remove("default-color");
  		q.classList.add("green-color");
	} else {
		q.classList.remove("default-color");
		q.classList.add("red-color");
	}
                                                        }
function addCheck(){
           check("q1",5);
           check("q2",11);
        }
function subCheck(){
           check("q1",4);
	   check("q2",2);
        }
function mulCheck(){
           check("q1",15);
           check("q2",12);
        }
function divCheck(){
           check("q1",13);
	   check("q2",5);
        }