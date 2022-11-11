 
        // Wait until full content has loaded to run functions
        document.addEventListener('DOMContentLoaded', function() {
        
            // Submit button disabled by default
            document.querySelector('#submit').disabled = true;

            document.querySelector('#task').onkeyup = () => {
                if (document.querySelector('#task').value.length > 0){
                    document.querySelector('#submit').disabled = false;
                } else {
                    document.querySelector('#submit').disabled = true;
                }
                    
            }

            // Change font color of title
            document.querySelectorAll('button').forEach(function(button) {
                button.onclick = function() {
                    document.querySelector('#title').style.color = button.dataset.color;
            }
            });
        
            // Add elements to To-do list
             document.querySelector('form').onsubmit = () => {
                const task = document.querySelector('#task').value;
            
                const li = document.createElement('li');
                li.innerHTML = task;

                document.querySelector('#tasks').append(li);

                document.querySelector('#task').value = '';

                document.querySelector('#submit').disabled = true;

                // Stop form from submitting (everything will be done in the browser)
                return false;

            // Clear list items -- (not functional yet)
            document.querySelector('#clear').onclick = () => {
                document.querySelector('#task').remove(li);
            }

            // Check off an item
        }
        });
    