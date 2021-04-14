let app = new function(){
    this.el = document.getElementById('games');
    this.games=[]
    const gamesURL = `http://localhost:3000/games`

    this.FetchAll = function(){
        let data='';

        if(this.games.length > 0) {
         for(i=0; i < this.games.length; i++){
           data+='<tr>';
           data+='<td>'+(i+1)+'.'+this.games[i]+'</td>';
           data+='<td><button onclick="app.Edit(' + i + ')" class="btn btn-warning">Edit</button></td>';
           data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-success">I beated it!</button></td>';
           data += '</tr>'; 
         }   
        }
        this.Count(this.games.length)
        return this.el.innerHTML = data
    };

    this.Add = function(){
        el = document.getElementById("add-game")
        let game = el.value
        if(game){
            this.games.push(game.trim());
            el.value = '';
            this.FetchAll();
            
        }
    };

    this.Edit = function(item){
        el= document.getElementById('edit-game');
        el.value = this.games[item];
        document.getElementById('edit').style.display = 'block';
        self=this;

        document.getElementById('save-edit').onsubmit = function(){
            let game = el.value;
            if(game){
                self.games.splice(item, 1, game.trim());
                self.FetchAll();
                CloseInput();
            }
        }

    };

    this.Delete = function(item){
        this.games.splice(item, 1)
        this.FetchAll();
    };

    this.Count = function(data){
    let el = document.getElementById('counter');
    let name ='Games';
    if(data){
        if(data==1){
            name = 'Game'
        }
        el.innerHTML = data+' '+name;
    }
    else{
        el.innerHTML = "No "+ name;
    }
    };
}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit').style.display = 'none';
}