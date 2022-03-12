	const container = document.querySelector('.container');
	const answerEls = document.querySelectorAll('.answer');
	const option = document.querySelectorAll('.option');
	const prize = document.querySelectorAll('.prize');
	const question=document.querySelector(".question");
	const question_box=document.querySelector(".question-box");
	const a_text=document.querySelector("#a");
	const b_text=document.querySelector("#b");
	const c_text=document.querySelector("#c");
	const d_text=document.querySelector("#d");
	const text2=document.querySelectorAll(".option span");

	const line=document.querySelector(".life-line");
	
	var quite=document.querySelector(".quite");
	var timer=document.querySelector(".container .question-box .timer");	
	const line_div=document.querySelectorAll(".life-line div");
	const content=document.querySelector(".question-box");
	const quit=document.querySelector(".quit");
	const quest=document.querySelector(".quest");
	const info=document.querySelector(".info");
	const info_div=document.querySelectorAll(".info div");
	const button=document.querySelectorAll("button");
	const ln_span=document.querySelector(".life-line h1 span");

	var h1=document.querySelector(".container h1.title");

	var lang=document.querySelector(".container .lang");
	var detail=document.querySelector(".container .lang summary");
	var opt=document.querySelectorAll(".container .lang option");
	var clock=15;
	var quizdata=0;
	var prize_amount=0;
	var ln_no=2;
	var ext=document.querySelector(".ext");
	// var answer=undefined;
	// btn.textContent=option.length;
	var answer = undefined;
	var id_no=0;
	var bg_color2=prize[quizdata].style.background;

	var qnI=document.querySelector('.container .qn-i');
	var qNo=document.querySelector('.container .question-no');
	// loadQuiz();
		
// ext.innerText=quiz_2.length;	
// 	window.onload=function(){
// 		alert('Inner Width: ' + window.innerWidth + ', Inner Height: '+ window.innerHeight+ 
// 				', Outer Width: ' + window.outerWidth + ', Outer Height: ' + window.outerHeight + '.')
// 	}
	var rand=Math.floor(Math.random()*(quiz.length));
	qnI.addEventListener('click',function(){
		if(qnI.innerText=="₹"){
			qNo.style.left="20px";
			qnI.innerText="X";
			qnI.style.top="10px";	
		}
		else if(qnI.innerText=="X"){
			qNo.style.left="-300px";
			qnI.innerText="₹";
			qnI.style.top="30px";		
		}
		
	})
	quest.addEventListener("click",function(){
		quite.style.top="-200px";
		quite.style.visibility="hidden";
		quite.style.transition="1s";
		if(quest.textContent=="Question" || quest.textContent=="Next Question"){
			
			// var rand2=Math.floor(Math.random()*(quiz_1.length));
			clock=15;
			question_box.style.visibility='visible';
			question_box.style.left='50%';
			question_box.style.transform="translate(-50%,-50%)";
			loadQuiz();
			deselectAnswers();
			prize[id_no].style.background=bg_color2;
			prize[id_no].style.boxShadow="0px 0px 0px #000";
			bg_color2=prize[quizdata].style.background;
			prize[quizdata].style.background="orange";
			prize[quizdata].style.boxShadow="1px 1px 20px #000";
			id_no=quizdata;
			quest.innerText="Quit";
			
			// clearInterval(runTimer);
			// runTimer();									
			// if(clock==0){
			// 	clearInterval(runTimer);
			// }
		}
		else if(quest.textContent=="Check"){
			if(answer){
				if(answer===quiz[rand][quizdata].correct || answer===quiz[rand][quizdata].e_correct) {
					// ext.innerText=rand+"rand";
					for(var i=0;i<option.length;i++){
						if(option[i].style.background=="orange"){
							option[i].style.background="green";
						}
					}
					quest.innerText="Next Question";
					quizdata++;
					if(quiz[rand].length==quizdata){
						quest.innerText="Prize";
					}

				}
				else{
					if(double_chance=="No"){
						for(var i=0;i<option.length;i++){
							if(option[i].style.background=="orange"){
								option[i].style.background="red";
							}
							if(option[i].id==quiz[rand][quizdata].correct){
								option[i].style.background="green";
							}
						}
						quest.innerText="Prize";
					}
					else if(double_chance=="Yes"){
						for(var i=0;i<option.length;i++){
							if(option[i].style.background=="orange"){
								option[i].style.background="red";
							}
						}
						double_chance="No";
						quest.innerText="Check";						
					}
				}
			}
		}
		else if(quest.textContent=="Prize"){
			if (quizdata>parseInt(prize.length/2) && quizdata!=prize.length) {
				prize_amount=prize[parseInt(prize.length/2)].innerText;
			}
			if (quizdata==prize.length) {
				prize_amount=prize[prize.length-1].innerText;
			}
			question_box.innerHTML="<h1 class='won'>You Won Prize amount : "+prize_amount+"<h1>";
			quest.innerText="Re play";			
		}
		else if(quest.textContent=="Quit"){
			if(quizdata>0){
				prize_amount=prize[quizdata-1].innerText;				
			}
			else{
				prize_amount=0;
			}
			question_box.innerHTML="<h1 class='won'>You Won Prize amount : "+prize_amount+ 
				"<h1>";				
			quest.innerText="Re play";
		}
		else if(quest.textContent=="Re play"){
			location.reload();
		}

	})
	var height_lt=["160","195","180"];
	var access_id=0;
	for(var i=0;i < line_div.length;i++){
		line_div[i].addEventListener("click",function(){
			if(rand || rand==0){
				info_div[access_id].style.visibility="hidden";
				button[access_id].style.visibility="hidden";
				info_div[this.id].style.visibility="visible";
				info.style.visibility="visible";
				button[this.id].style.visibility="visible";
				access_id=this.id;
				info.style.height=height_lt[this.id]+"px";
				// ext.innerText=access_id;
			}
		})
	}
	var var1=0;
	container.addEventListener("click",function(){
		info.style.visibility="hidden";
		info_div[access_id].style.visibility="hidden";
		button[access_id].style.visibility="hidden";

	})
	function runTimer(){
		var var3=true;
		setInterval(function(){									
			if(clock==0){
				clock=0;
				timer.innerText=clock;

				if(var3){
					h1.innerText="Time Up, You Lost";
					var3=false;
				}	
			}
			else{
				timer.innerText=clock;
				clock--;
			}
		},1000);
		
	}
	function loadQuiz(){
		rand=Math.floor(Math.random()*(quiz.length));
		question_box.classList.add('change');
		if(detail.innerText=='English'){
			h1.innerText="You also win one crore";
			quite.innerText="Change only will not change. Your life changing questions and crores";
			question.innerText=quiz[rand][quizdata].e_question;
			a_text.innerText=quiz[rand][quizdata].e_a;
			b_text.innerText=quiz[rand][quizdata].e_b;
			c_text.innerText=quiz[rand][quizdata].e_c;
			d_text.innerText=quiz[rand][quizdata].e_d;
			// let cnt=0;
			// let q=quiz[rand][quizdata].e_question;
			// for(let i=0;i<q.length;i++){
			// 	if(q[i]==" "){
			// 		cnt++;
			// 	}
			// 	if(cnt>=10){
			// 		question.style.padding="20px";
			// 	}
			// }
		}
		else{
			h1.innerText="நீங்களும் வெல்லலாம் ஒரு கோடி";
			quite.innerText="மாற்றம் ஒன்றே மாறாதது. வாழ்வை மாற்ற போகும் கேள்விகளோடும் கோடிகளோடும்.";
			question.innerText=quiz[rand][quizdata].question;	
			a_text.innerText=quiz[rand][quizdata].a;
			b_text.innerText=quiz[rand][quizdata].b;
			c_text.innerText=quiz[rand][quizdata].c;
			d_text.innerText=quiz[rand][quizdata].d;
			// let cnt=0;
			// let q=quiz[rand][quizdata].question;
			// for(let i=0;i<q.length;i++){
			// 	if(q[i]==" "){
			// 		cnt++;
			// 	}
			// 	if(cnt>=10){
			// 		question.style.fontSize="calc(100% - 2px)";
			// 		break;
			// 	}
			// }
			
		}
		
	}
	
	var bg_color=option[0].style.background;
	var green_color="No";
	var double_chance="No";
	function getSelected(){
		for(var i=0;i<option.length;i++){
			option[i].addEventListener("click",function(){
				for(var j=0;j<option.length;j++){
					if(option[j].style.background=="orange"){
						option[j].style.background=bg_color;
					}
					else if(option[j].style.background=="green"){
						green_color="Yes";
					}
				}
				if(green_color=="No"){
					this.style.background="orange";		
					answer=this.id;
					quest.innerText="Check";
				}
				// clearInterval(runTimer);				
			})
		}
		return answer;
	}

	function deselectAnswers(){
		for(var i=0;i<option.length;i++){
				option[i].style.background=bg_color;
				option[i].style.visibility="visible";
				answer=this.id;
		}
		green_color="No";
		answer=undefined;
		return answer;
	}
	function hint_life_line(){
		info.style.visibility="visible";
		info_div[access_id].innerText=quiz[rand][quizdata].hint;
		line_div[access_id].style.visibility="hidden";
		line_div[access_id].style.position="absolute";
		line_div[access_id].style.zIndex="-1";
		ln_no=ln_no-1;
		ln_span.innerText=ln_no;
	}
	function fifty_life_line(){
		var list1=[];
		for(var i=0;i<option.length;i++){
			list1[i]=option[i].id;
		}
		var rand_list=Math.floor(Math.random()*(list1.length));;
		while(list1[rand_list]==quiz[rand][quizdata].correct){
			rand_list=Math.floor(Math.random()*(list1.length));
		}
		for(var i=0;i<option.length;i++){
			if(option[i].id == quiz[rand][quizdata].correct || option[i].id == list1[rand_list]){
				option[i].style.visibility="visible";
			}
			else{
				option[i].style.visibility="hidden";
			}
		}
		info_div[access_id].style.visibility="hidden";
		button[access_id].style.visibility="hidden";
		info.style.visibility="hidden";
		line_div[access_id].style.visibility="hidden";
		line_div[access_id].style.position="absolute";
		line_div[access_id].style.zIndex="-1";
		ln_no=ln_no-1;
		ln_span.innerText=ln_no;
	}
	function double_life_line(){
		double_chance="Yes";

		info_div[access_id].style.visibility="hidden";
		button[access_id].style.visibility="hidden";
		info.style.visibility="hidden";
		line_div[access_id].style.visibility="hidden";
		line_div[access_id].style.position="absolute";
		line_div[access_id].style.zIndex="-1";
		ln_no=ln_no-1;
		ln_span.innerText=ln_no;
	}
	var function_list=[fifty_life_line,double_life_line,hint_life_line];
	for(var i=0;i<button.length;i++){
		button[i].addEventListener("click",function_list[i])
	}
	getSelected()
	var lang=document.querySelector(".container .lang");
	var detail=document.querySelector(".container .lang summary");
	var opt=document.querySelectorAll(".container .lang option");
	for(let i=0;i<opt.length;i++){
		opt[i].addEventListener('click',function(){
			if(this.innerText!=detail && quest.innerText!="Next Question"){
				detail.innerText=this.innerText;
				if(this.innerText=='English'){
					h1.innerText="You also win one crore";
					quite.innerText="Change only will not change. Your life changing questions and crores";
					question.innerText=quiz[rand][quizdata].e_question;
					a_text.innerText=quiz[rand][quizdata].e_a;
					b_text.innerText=quiz[rand][quizdata].e_b;
					c_text.innerText=quiz[rand][quizdata].e_c;
					d_text.innerText=quiz[rand][quizdata].e_d;
				}
				else if(this.innerText=='தமிழ்'){
					h1.innerText="நீங்களும் வெல்லலாம் ஒரு கோடி";
					quite.innerText="மாற்றம் ஒன்றே மாறாதது. வாழ்வை மாற்ற போகும் கேள்விகளோடும் கோடிகளோடும்.";
					question.innerText=quiz[rand][quizdata].question;	
					a_text.innerText=quiz[rand][quizdata].a;
					b_text.innerText=quiz[rand][quizdata].b;
					c_text.innerText=quiz[rand][quizdata].c;
					d_text.innerText=quiz[rand][quizdata].d;
				}
			}
			if(quest.innerText=="Next Question"){
				alert("Click the next question, Then select language.");
			}
		})
	}
	lang.addEventListener('click',function(){
		line.style.zIndex=4;
		lang.style.zIndex=5;
	})
	var a3=true;
	line.addEventListener('click',linefunc);
	function linefunc(){
		if(a3){
			this.classList.add('active');
			a3=false;
		}
		else{
			this.classList.remove('active');	
			a3=true;
		}
	}
	
	// quite.style.setProperty('--x',0+'px');
	// quite.style.setProperty('--y',0+'px');
	// var var2=false;
	// var l1=[];
	// quite.addEventListener('mousedown',function(e){
	// 	var2=true;
	// 	// var x = e.pageX - quite.offsetLeft;
	// 	var a1 = e.pageX;
	// 	console.log(e.pageX+"-"+quite.offsetLeft);
	// 	// var y = e.pageY - quite.offsetTop;
	// 	var b1 = e.pageY;
	// 	console.log(e.pageY+"-"+quite.offsetTop);
	// 	l1[0]=a1;
	// })
	// quite.addEventListener('mousemove',function(e){
	// 	if(var2){
	// 		// console.log(var2);
	// 		a1=l1[0];
	// 		var x = e.pageX;
	// 		var y = e.pageY;
	// 		if(x==a1){
	// 			quite.style.setProperty('--x',x+'px');
	// 			ext.innerText=x;
	// 		}	
	// 		console.log(e.pageX+"-"+quite.offsetLeft);
	// 		console.log(e.pageY+"-"+quite.offsetTop);
	// 		// quite.style.setProperty('--y',y+'px');		
	// 	}		
	// })
	// quite.addEventListener('mouseup',function(e){
	// 	var2=false;
	// // 	// alert('Active');
	// // 	// quite.style.left='var(--x)';
	// // 	// quite.style.top='var(--y)';
	// // 	const x = e.pageX - quite.offsetLeft;
	// // 	console.log(e.pageX+"-"+quite.offsetLeft);
	// // 	const y = e.pageY - quite.offsetTop;
	// // 	console.log(e.pageY+"-"+quite.offsetTop);

	// // 	quite.style.setProperty('--x',x+'px');
	// // 	quite.style.setProperty('--y',y+'px');
	// })
