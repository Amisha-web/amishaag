
<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

		<link rel="stylesheet" href="style.css" TYPE="text/css" >
		<link rel="stylesheet" href="dynamic_css.php" TYPE="text/css" >
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" >

		<title>SUDOKU MASTER</title>

	</head>
	<body>
		<div class="whole">

		<div class="navigation_bar navigation_bar-fixed-top"> 
			<div class="navigation_bar-inner">
				<div class="brand" style="margin-left:10px;" ><font color="white">SUDOKU MASTER</font></div>
				<div class="container">

					<div id='check' class="btn btn-primary">Check</div>
					<div id='hint' class="btn btn-primary">Hint</div>
					<div class="break"></div>
					<div id='pause' class="btn btn-primary">Pause</div>

					<div id='save' class="btn btn-primary">Save game</div>
					<div id='load' class="btn btn-primary">Load game</div>
	
					<div id='undo' class="btn btn-success">Undo</div>
					<div id='redo' class="btn btn-success">Redo</div>
	
	
				</div>
			</div>
		</div>

           
			<div id="choice_board">
					<table class="boardd" border="5" width="400px" height="400px">
						<tr>
							<td rowspan="3" >Select the board number: <input id="nr_nr" type="text" name="number" value="0" style="width:40px;height:23px;font-weight:bold;" readonly ></td>
							<td><input type="button" value=" /\ " class="gd" onclick="board_further();" style="font-size:7px;margin:0;padding:0;width:20px;height:17px;" ></td>
						</tr>
						<tr>
							<td><input type=button value=" \/ " class="gd" onclick="board_back();" style="font-size:7px;margin:0;padding:0;width:20px;height:18px;" ></td>
						</tr>
					</table>
			</div>
			<center><div id='board'>Place for board</div></center>
	
	
			<center><div class="wrapper">
				<div class="item">
					<div id='seconds'>00:00</div>
					<span class="information">
						Actual game time
					</span>
				</div>
			</div></center>
            <div class="author" style="margin-bottom:10px;"><font color="white">Created By: APAR SINGHAL</font></div>

	
		</div> <!-- - whole -->
		<div class="break"></div>
		<div id='debug'>Debug</div>
		<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script type="text/javascript" src="undomanager.js"></script>
		<script type="text/javascript" src="scripts.js"></script>

	</body>
</html>
