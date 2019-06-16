
			var number_board = 0;
			var last_wart_in = -1;
			var last_conflict = -1;
			var last = -1;
			var last_wart_out = -1;
			var last_update = '';
			var boarde = new Array();
			var minutes = 0;

			var undoManager;
					
                
			var btnUndo = document.getElementById('undo');
			var btnRedo = document.getElementById('redo');
			
			//board description
			var board_description = 
				"020730001" +
				"009010047" +
				"000208900" +
				"000600802" +
				"207853406" +
				"804007000" +
				"003405000" +
				"640080700" +
				"100072090";
			boarde[0] = board_description; //boards[0]

			var board_description1 =
				"058007304" +
				"004010065" +
				"106400070" +
				"005008900" +
				"680900130" +
				"070600400" +
				"007040002" +
				"041876000" +
				"800500041";
			boarde[1] = board_description1;

			var board_description2 =
				"060037049" +
				"009060003" +
				"000900820" +
				"001000092" +
				"900001600" +
				"630094075" +
				"400076080" +
				"306428000" +
				"007500300";
			boarde[2] = board_description2;

			var board_description3 =
				"040965800" +
				"006028107" +
				"030700650" +
				"350010080" +
				"200000904" +
				"004002030" +
				"700000408" +
				"001004270" +
				"000180090";
			boarde[3] = board_description3;

			var aaa = "aaaa";
			var bbb = new Array(3 , 5, 7);

			var board_description4 =
				"050037240" +
				"106420000" +
				"200905003" +
				"400009030" +
				"060014050" +
				"002070090" +
				"023000509" +
				"090750300" +
				"600001027";
			boarde[4] = board_description4;

			var board_description5 =
				"006407301" +
				"010030005" +
				"800019400" +
				"040000120" +
				"000208007" +
				"507006800" +
				"102064000" +
				"085700090" +
				"000500210";
			boarde[5] = board_description5;

			var board_description6 =
				"008900005" +
				"600780000" +
				"090000604" +
				"023000700" +
				"500000902" +
				"000207058" +
				"380005090" +
				"007690040" +
				"400072563";
			boarde[6] = board_description6;

			var board_description7 =
				"040200800" +
				"000687040" +
				"096005703" +
				"600004200" +
				"008503090" +
				"725000300" +
				"500098002" +
				"004000908" +
				"083740060";
			boarde[7] = board_description7;

			var board_description8 =
				"050009100" +
				"009160002" +
				"280040690" +
				"098020006" +
				"006780020" +
				"400000801" +
				"100600070" +
				"820405300" +
				"060072500";
			boarde[8] = board_description8;

			var board_description9 =
				"020080006" +
				"000709500" +
				"605000094" +
				"000350029" +
				"540008100" +
				"010020758" +
				"100030045" +
				"004002037" +
				"203507080";
			boarde[9] = board_description9;

			var board_description10 =
				"100890000" +
				"045201908" +
				"080300006" +
				"400580030" +
				"800006200" +
				"090043005" +
				"020075300" +
				"506100090" +
				"004030052";
			boarde[10] = board_description10;

			akt_board = board_description;
			var n = [];
			for (var t = 0 ; t < akt_board.length ; t++){
				n.push(akt_board[t]);
			}
			akt_boardChar = n;


			/**
			* Function changes the current board to the next one.
			*/
			function board_further(){ //next board
				var r=confirm("Do you really want to change board? \nBy doing it you will loose everything you have done already!");
				if (r==true){
					number_board++;
					if (number_board > 10){
						number_board = 0;
					}
	
					akt_board = boarde[number_board];
					document.getElementById('nr_nr').value = number_board;

					for (var t = 0 ; t < akt_board.length ; t++){
						n.push(akt_board[t]);
					}
					akt_boardChar = n;
	
					last = -8;
					last_conflict = -8; //last conflict
					$("#board").html(Board(akt_board));
					$("table").css('border-spacing', '0');
					edges_draw();
					sec = 0; //seconds
					minutes = 0; //minutes
					iwentuj();
	
					undoManager.clear();
					updateUI();
	
					var x = document.getElementsByTagName('link');
					var queryString = '?reload=' + new Date().getTime();
					for(a in x) {
						if(typeof x[a] == 'object' && x[a].getAttribute('rel') == 'stylesheet'){
							qs = x[a].getAttribute('href');
							x[a].setAttribute('href', qs.replace(/\?.*|$/, queryString));
						}
					}
	
				}
				else
				{

				}


			}

			/**
			* Function changes the current board to the previous one.
			*/
			function board_back(){ //former board
				var r=confirm("Are you sure you want to change the boards? \ n You will lose everything you did so far.");
				if (r==true){
					number_board--;
					if (number_board < 0){
						number_board = 10;
					}
	
					akt_board = boarde[number_board];
					document.getElementById('nr_nr').value = number_board;
	
					for (var t = 0 ; t < akt_board.length ; t++){
						n.push(akt_board[t]);
					}
					akt_boardChar = n;
	
					last = -8;
					last_conflict = -8;
					$("#board").html(Board(akt_board));
					$("table").css('border-spacing', '0');
					edges_draw();
					sec = 0;
					minutes = 0;
					iwentuj();
	
					undoManager.clear();
					updateUI();
	
					var x = document.getElementsByTagName('link');
					var queryString = '?reload=' + new Date().getTime();
					for(a in x) {
						if(typeof x[a] == 'object' && x[a].getAttribute('rel') == 'stylesheet'){
							qs = x[a].getAttribute('href');
							x[a].setAttribute('href', qs.replace(/\?.*|$/, queryString));
						}
					}	
				}
				else
				{

				}
			}

			paused = false;
			minutes = 0;
			sec = 0;


			/**
			* Function is used to count down the time and ensure proper time display
			*/
			function count(o){ 
				if (minutes < 10){
					if (sec < 10){
						o.innerHTML='0'+minutes + ':0'+sec;
					} else {
						o.innerHTML='0'+minutes + ':'+sec;
					}
				} else {
					if (sec > 9){
						o.innerHTML=minutes + ':'+sec;
					} else {
						o.innerHTML=minutes + ':0'+sec;	
					}
				}

				if(sec==59){
					sec = -1;
					minutes++;
				}
				++sec;
				if (!paused){
					setTimeout(function(){count(o)},1e3);
				}
			}


			/**
			* Function draws boardes of the board
			*/
			function edges_draw(){ 
				var i;
				for(i = 0; i < 81; i++){
					if ((i + 1) % 3 == 0){
						$('#td'+coordinates(i)).css('border-right', '3px solid');
					}
					if (i % 9 == 0){
						$('#td'+coordinates(i)).css('border-left', '3px solid');
					}
					if (Math.floor(i / 9) % 3 == 0){
						$('#td'+coordinates(i)).css('border-top', '3px solid');
					}
					if (i > 71){
						$('#td'+coordinates(i)).css('border-bottom', '3px solid');
					}
				}
			}

			/**
			* Function gives coordinates of i-th square of the board
			*/
			function coordinates(i){ //coordinates of ...
				//if (i < 0 || i > 80) {
					//alert("coordinates: wrong data");
				//}
				return Math.floor(i/9) + 10 * (i % 9) + 11;
			}

			/**
			* Function gives the value of i-th square
			*/
			function value_z_nr(nr){ 
				return $('#i' + nr).val();
			}

			/**
			* Function returns an array of numbers of squares in one raw
			*/
			function row(i){ //row
				//if (i < 1 || i > 9) {
					//alert("row: wrong row");
				//}
				w = new Array();
				for(k = 10; k <= 90; k+=10){
					w.push(k+i);
				}
				return w;
			}

			/**
			* Function returns an array of numbers of squares in one column
			*/
			function column(i){ //column
				//if (i < 1 || i > 9){
					//alert("column: wrong column");
				//}
				w = new Array();
				for(k = 1; k <= 9; k++){
					w.push(i*10 + k);
				}
				return w;
			}

			/**
			* Function highlights selected block of 9 squares
			*/
			function highlight_table(t){
				for(i = 0; i < 9; i++){
					$('#td'+t[i]).css('background-color', '#7cfc00');
				}
			}

			/**
			* Function chceks if there are duplicates in the board
			*/
			function check_duplicatestable(t, a){ 
				var vv = $('#i' + a).val();
				// debug +='vv: '+vv+', a: '+a+'<br/>';
				for(i = 0; i < 9; i++){
					var v = $('#i' + t[i]).val();
					// debug +='v: '+v+', t[i]: '+t[i]+'<br/>';
					if (t[i] != a && v == vv && v != ''){
						// debug+='<span class="red">conflict: '+'v: '+v+', vv: '+vv+',t[i]: '+t[i]+', a: '+a+'</span><br/>';
						$('#td'+t[i]).css('background-color', 'red');
						$('#td'+a).css('background-color', 'red');
					}
				}
			}

			function highlight_table_mouse(t){
				$('#td'+t[0]+t[1]).css('background-color', '#f5deb3');
			}

			function highlight_table_mouse_rule(t){
				$('#td'+t[0]+t[1]).css('background-color', 'transparent');
			}

			function highlight_mouse(i){ //highligh under mouse
				highlight_table_mouse(i);
			}

			function highlight_mouse_rule(i){ //highligh under mouse
				highlight_table_mouse_rule(i);
			}


			/**
			* Function is responsible for the hint functionallity
			*/
			function hint(nr){ 
				var w = new Array();
				// debug = 'hint: <br/>';
	
				rrow = new Array();
				ccolumn = new Array();
				ssquare = new Array();
	
	
				rrow = row(nr % 10);
				ccolumn = column(Math.floor(nr/10));
				ssquare = square(1 + Math.floor((nr-10)/30) + 3 * Math.floor(((nr % 10)-1)/3));

				for (var i = 1; i <= 9; i++){
					var if_is = false;
					for (var j = 0; j < 9 && !if_is; j++){
						if (i == value_z_nr(rrow[j]) && rrow[j] != nr){
							if_is = true;
							break;
						}
					}
		
					for (var j = 0; j < 9 && !if_is; j++){
						if (i == value_z_nr(ccolumn[j]) && ccolumn[j] != nr){
							if_is = true;
							break;
						}
					}
			
					for (var j = 0; j < 9 && !if_is; j++){
						if (i == value_z_nr(ssquare[j]) && ssquare[j] != nr){
							if_is = true;
							break;
						}
					}
		
					if (!if_is){
						w.push(i);
					}
				
				}
				if (w.length == 0){
					alert('System was not able to generate a hint ;-/');
				} else {
					tresc = 'A little hint: \n';
					tresc += w[0];
					for (var i = 1 ; i < w.length ; i++ ){
						tresc += ', '+ w[i];
					}
					alert(tresc);
				}
			}

			function highlight(i){ //highlight
				highlight_table(row(i % 10));
				highlight_table(column(Math.floor(i/10)));

			}

			/**
			* Function checks if selected square number has value that is already on the board
			*/
			function check_duplicates(i){ //check for duplicates

				check_duplicatestable(row(i % 10), i);
				check_duplicatestable(column(Math.floor(i/10)), i);
				check_duplicatestable(square(1 + Math.floor((i-10)/30) + 3 * Math.floor(((i % 10)-1)/3)), i);
			}

			/**
			* Function hides the whole board
			*/
			function fade(){ //fade
				$(".field").css('background-color', 'transparent');
			}

			/**
			* Function returns an array of numbers of squares in one row
			*/
			function square(i){ //square
				w = new Array();
				x = ((i - 1) % 3) * 3 + 1;
				y = (Math.floor((i - 1) / 3)) * 3 + 1;
				for(dx = 0; dx <= 2; dx++){
					for(dy = 0; dy <= 2; dy++){
						w.push((x + dx) * 10 + dy + y);
					}
				}
				return w;
			}

			/**
			* Function checks if the fragment of board is correct
			*/
			function correct_table(t){ 
				var o = "";
				var result = true;
				for(i = 0; i < 9; i++){
					var v = $('#i' + t[i]).val();
					if (!(v >= '1' && v <= '9')){ 
						return false;
					}
					if (o.indexOf(v) != -1){
						result = false;
					}
					o += v;
				}
				return result;
			}

            function updateUI() {
				var btnUndo = document.getElementById('undo');
				var btnRedo = document.getElementById('redo');
            	btnUndo.disabled = !undoManager.hasUndo();
                btnRedo.disabled = !undoManager.hasRedo();
            }

			/**
			* Function checks if the board is correct
			*/
			function correct_answer(){ //correct answer
				var i;
				for(i = 1; i <= 9; i++){
					if (!correct_table(row(i))) return false; //correctTable(row)
					if (!correct_table(column(i))) return false; //correctTable(column)
					if (!correct_table(square(i))) return false; //correctTable(square)
				}
				return true;
			}

			/**
			* Function returns a string that represents a board
			*/
			function Board(description){ //board(board description)
				var i;
				board = "<table class='ttt'>";
				for(i = 0; i < description.length; i++){
					if (i % 9 == 0){ 
						board += "<tr>";
					}
					board += "<td class='field' id='td"+ coordinates(i) +"'>";
					if (description[i] == '0'){
						board += "<input class='field2' onclick='entrance("+i+")' type='text' size='1' maxlength='1' id='i" + coordinates(i) + "'>";
					}
					else
					{
						board += "<input class='field2' onclick='entrance("+i+")' type='text' size='1' maxlength='1' readonly= '' id='i" + coordinates(i) +
							"' value='"+description[i]+"'>";
					}
					board += "</td>";
					if (i % 9 == 8){
						board += "</tr>";
					}
				}
				return board+"</table>";
			};

//-------------------------------------------------------------------


			/**
			* Function changes the value of selected board
			*/
			function change_value_squares(nr, na_co){ //change the value of a square
					$('#i'+nr).val(na_co);
			}

			function entrance(nr){ //enter
				//IT DOES NOT WORK
			}

			function clear_history(){ //clear history
				undoManager.clear();
				updateUI();
			}

			function iwentuj(){
					
				$(".field input").focus(function(){
					last = $(this).parent().attr('id').substr(2,2);
					highlight(last); //highlight
					last_wart_in = value_z_nr(last);

					if (last_conflict != -8){
						check_duplicates(last_conflict); //check for duplicates
					}

				});

				$(".field input").blur(function(){
					fade(); //fade
					last_conflict = $(this).parent().attr('id').substr(2,2); //last conflict
					last_wart_out = value_z_nr(last_conflict);
					last_last = $(this).parent().attr('id').substr(2,2);

					if (last_wart_in != last_wart_out && last_wart_out != -1 && last_wart_in != -1){
						var ident = last +''+last_wart_in+''+last_wart_out;
						if (last_update != ident){
							last_update = ident;
							undoManager.register(undefined, change_value_squares, [last_last, last_wart_in], 'undo change values', undefined, change_value_squares, [last_last, last_wart_out], 'redo change values');
						}
				
						akt_boardChar[9*((last_last % 10)-1) + Math.floor(last_last/10) -1]=last_wart_out;	
					}


				});

				$(".field").mouseover(function(){
					highlight_mouse($(this).attr('id').substr(2,2));
				});

				$(".field").mouseout(function(){
					fade(); //fade
					highlight_mouse_rule($(this).attr('id').substr(2,2)); //highligh under mouse
					if (last != -8){
						highlight(last); //highlight
					}
					if (last_conflict != -8){
						check_duplicates(last_conflict); //check for duplicates
					}
				});
		
			}

//-------------------------------------------------------------------

			$(document).ready(function(){
				$("#board").html(Board(akt_board));
				$("table").css('border-spacing', '0');
				edges_draw(); //draw borders
				iwentuj();
	
				$("#check").click(function(event){
					if (correct_answer()){
						alert("Good! Grats!");
					} else {
						alert("Not good! ;-/");
					}
				});



				$("#hint").click(function(event){
					if (last !=  -8){
						hint(last);
					}
				});

				$("#save").click(function(event){

					localStorage.setItem('or_was_already_save', 'so'); //have we saved yet?
					localStorage.setItem('save_board', ''); 
					localStorage.setItem('save_board', akt_boardChar);
					localStorage.setItem('size_save_board', akt_board.length); //board size
					localStorage.setItem('minutes', minutes); //minutes
					localStorage.setItem('sec', sec); //seconds
					localStorage.setItem('number_board', number_board); //board number
				});

				$("#load").click(function(event){
					if (localStorage.getItem('or_was_already_save') == 'so'){
						var r=confirm("Do you really want to load board? If you do not save, you will loose everything you made!");
						if (r==true){
							akt_boardChar2 = localStorage.getItem('save_board');
							length = localStorage.getItem('size_save_board');
							var n = [];
							for (var i = 0 ; i < 2*length ; i++){
								if (i % 2 == 0){
									n.push(akt_boardChar2[i]);
								}
							}
							akt_boardChar = n;
					
							akt_board = akt_boardChar.join(""); //actual board char
			
							minutes = localStorage.getItem('minutes');
							sec = localStorage.getItem('sec');
							number_board = localStorage.getItem('number_board'); //board number
			
							document.getElementById('nr_nr').value = number_board;
		
							last = -8;
							last_conflict = -8; //last conflict

							$("#board").html(Board(akt_board));
							$("table").css('border-spacing', '0');
							edges_draw(); //draw boarders

							iwentuj();
		
							undoManager.clear();
							updateUI();
			
						} else {
		
						}	
					}
				});

				if (localStorage.getItem('or_was_already_save') == 'so'){ //have we saved yet?
					$('#load').css('visibility', 'visible');	
				}

				$("#pausa").click(function(event){
					paused = !paused;

					if (paused){
						$("#pause").html('Resume'); //pause, resume
						$("#board").css('visibility', 'hidden'); //board
					} else {
						$("#pause").html('Pause');
						odliczaj(document.getElementById('seconds')); //countdown(seconds)
						$("#board").css('visibility', 'visible'); //board
					}
				});
	
	//----------------------------
	
				//---UNDO-REDO
	
				undoManager = new UndoManager();
					
                
				var btnUndo = document.getElementById('undo');
				var btnRedo = document.getElementById('redo');
                
				function updateUI() {
					btnUndo.disabled = !undoManager.hasUndo();
					btnRedo.disabled = !undoManager.hasRedo();
				}
				undoManager.setCallback(updateUI);

				btnUndo.onclick = function() {
					undoManager.undo();
					updateUI();
				};
				btnRedo.onclick = function() {
					undoManager.redo();
					updateUI();
				};
                
				updateUI();
	
				//---UNDO-REDO
	
	
				count(document.getElementById('seconds')); //count(seconds);
			});
