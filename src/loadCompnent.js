function loadComponent(id , file, stylesfile){

        fetch(`blocks/${file}`).then(response => response.text()).then(htmltext => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmltext, 'text/html');

        const element = doc.getElementById(id);

        document.getElementById(id).innerHTML = element.innerHTML;
       })
         //fetch(`blocks/${file}`).then(response => response.text()).then(data => {
         //document.getElementById(id).innerHTML = data;})
         
       // document.getElementById(id).innerHTML = component;
        let link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = `blocks/${stylesfile}`;
        document.head.appendChild(link);
}
// The id of both host and guest element must be same