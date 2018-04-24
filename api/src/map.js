google.maps.event.addDomListener(window, 'load', drawMap);

function drawMap(){
    let map;

    const coordenadas = {

    	lat: 40.416728,
    	lng: -3.703339
    }
    let mapOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('google_canvas'), mapOptions);
    
    map.setCenter(coordenadas);

    let marker = new google.maps.Marker({

    	position: coordenadas,
    	map: map,
    	title: 'Lorem Ipsum'
    
    })
}