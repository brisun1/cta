



@extends('layouts.app')

@section('content')

<div class="content">
  <div class="title m-b-md">
     <h1>index page</h1>
    {{-- <h4> {{$ip_country}}</h4> --}}
  </div>
    
  <div id="example" class=""></div>
  <div id="test" class=""></div>
  <div id="shop" class="text-danger">
  
</div>




   
    <div id="map" class="invisible"></div>

    <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCi9zEbNbmidV5rNdS3kcM0gEW1oAOYelY&callback=initMap"
    async defer></script>   
    <script type="text/javascript" src="/js/app.js"></script>
    
@endsection



