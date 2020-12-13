class Form
{
    constructor()
    {
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement('H3');
    }
    display()
    {
        var title = createElement('H2');
        title.html("car racing game");
        title.position(130, 50);

       
        this.input.position(130, 160);
        this.button.position(130, 200);

        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount +1;
            player.index = playerCount;
            
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(130,160);
        });
    }
    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}