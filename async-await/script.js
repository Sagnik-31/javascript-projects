const parent = document.getElementById("first")

async function github(){
    
    try{
        
        const response = await fetch("https://api.github.com/users")

         if(!response.ok){
         throw new Error("Data is not persent");
        }
        const data = await response.json()

        for(let user of data){
            const element = document.createElement('div') //each element is a card then appended to parent div
            element.classList.add("user");

            const image = document.createElement('img');
            image.src = user.avatar_url;

            const userName = document.createElement('h2');
            userName.textContent = user.login;

            const anchor = document.createElement('a');
            anchor.href = user.html_url;
            anchor.textContent = "visit profile";

            element.append(image,userName,anchor);
            parent.append(element);
        }
    }
    catch(error){
        console.log("Error fetching data:", error);
    }

}

github();