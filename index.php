<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Trello</title>
</head>

<body>
    <nav class="navmenu">
        <ul>
            <button class="butcolone">
                <li>Colone</li>
            </button>
            <button class="generatenote">
                <li>Note</li>
            </button>
        </ul>
    </nav>
    <header>
        <div class="modale">
            <div class="form">
                <h3 class="info">Remplir les information de la nouvelle Tache</h3>
                <div class="divtextarea">
                    <label for="story" class="labclass">Tache</label>
                    <textarea id="story" name="story"> </textarea>
                </div>

                <div class="labdate">
                    <label for="date" class="labclass">date:</label>
                    <i id="clandare" class='bx bxs-calendar'></i>
                    <input type="date" id="date" class="inputclass" name="date">
                    
                </div>

                <div class="start_time">
                    <label for="starttime">Start Time:</label>
                    <i id="idtime" class='bx bx-time' ></i>
                    <input type="time" id="starttime" name="starttime">
                </div>

                <div class="end_time">
                    <label for="endtime">End Time:</label>
                    <i id="idtime" class='bx bx-time' ></i>
                    <input type="time" id="endtime" name="endtime" class="inputclass">
                </div>

                <div class="add_button">
                    <button class="buttonAjou">Ajouter</button>
                </div>
            </div>
        </div>
    </header>
    <span class="iconeseting"><i class='bx bx-cog'></i></span>








    <script src="script.js"></script>
</body>

</html>