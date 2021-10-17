let timeline = document.querySelector('#timeline');

function snsPost(){
    const postValue = document.querySelector('#postInput').value;
    const imgInput = document.querySelector('#imgInput');

    let container = document.createElement('div');
    container.setAttribute('class', 'container');

    let owner = document.createElement('h1');
    let content = document.createElement('p');
    let img = document.createElement('img');
    img.setAttribute('class', 'img');

    owner.appendChild(document.createTextNode('김예린'));
    content.appendChild(document.createTextNode(postValue));
    let fReader = new FileReader();
    fReader.readAsDataURL(imgInput.files[0]);
    fReader.onloadend = function (event){
        img.src = event.target.result;
    }

    container.appendChild(owner);
    container.appendChild(content);
    container.appendChild(img);

    timeline.insertBefore(container, timeline.children[0]);
}