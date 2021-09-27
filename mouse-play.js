
        var div = document.getElementById('container');
        var button = document.querySelector('button');
        //div style
        // div.style.background = "#4c9bd8";
        div.style.width = "800px";
        div.style.height = '500px';
        div.style.borderRadius = "10px";
        div.style.margin = 'auto'
        // button style
        button.textContent = "SUBMIT";
        button.style.marginTop = "370px";
        button.style.marginLeft = "600px";
        button.style.padding = "20px 40px";
        button.style.borderRadius = "10px";
        button.style.border = "none";
        // button.style.background = "#b1f4cf";
        button.style.fontSize = '18px';
        button.style.fontWeight = "550";
        button.style.fontFamily = "narrow";

        function random(nums) {
            return Math.floor(Math.random() * nums);
        }

        function randomColor() {
            return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        }

        function setColor () {
            var colorValue = randomColor();
            button.style.backgroundColor = colorValue;
            button.style.color = "white"
        }
        function setDeafultColor () {
            button.style.background ="#537895"
            button.style.color = "black"

        }
        
        div.addEventListener('mousemove',setColor);
        div.addEventListener('mouseout',setDeafultColor);
       

        