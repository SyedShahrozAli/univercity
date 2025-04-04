function loadComponent(id , file){

        fetch(file).then(response => response.text()).then(data => {
        document.getElementById(id).innerHTML = data;})
        
        let link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "styles.css";
        document.head.appendChild(link);
}