const { ipcRenderer } = window.require('electron')


function openFile() {
    console.log(1)
    ipcRenderer.send('open-dir', 'openDir')
    
}

function openFileDialog() {
    ipcRenderer.send('open-dir-dialog', 'openDirDialog')
}

ipcRenderer.on('selectedFile', (e, data) => {
    console.log('data', data)
    const imgBox = document.querySelector('.img-box');

    const _imgBox = document.querySelector('.imgBox');

    let _imgStr = ''

    for (const i of data.filePaths) {
        console.log(createImg(i)) 
        //_imgStr += String(createImg(i)) 
        //_imgBox.appendChild(createImg(i))
        
        _imgStr += `<img src=${i} style='width: 300px;height: 300px;'/>`
    }
    _imgBox.innerHTML = _imgStr
})

function createImg(src) {
    let img = new Image();
    img.onload = () => {

    }
    img.src = src
    img.style.wodth = '30px';
    img.style.height = '30px';

    return img;
}
    



    

