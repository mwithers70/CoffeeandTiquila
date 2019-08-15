# CoffeeandTequlia

# _GooglePlacesAPI Package Documentation_

Add location awareness for more contextual results.<br>

CoffeePlaces API Key <br>
AIzaSyDVTh5l2v-sI0fvh8MXMzrrLmYPuAzN_2k <br>

_POST_ addPlace <br>
Add a new place to Google Maps. The new place is available immediately in Nearby Searches initiated by your application. The new place also enters a moderation queue to be considered for Google Maps. A newly-added place does not appear in Text Search or Radar Search results, or to other applications, until it has been approved by the moderation process.

_POST_ getImageURL<br>
Get the image URL for an image of a place

_POST_ getNearbyPlaces<br>
Search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching for.

_POST_ getNearbyPlacesByName<br>
Search for up to 200 places at once, but with less detail than is typically returned from a Text Search or Nearby Search request.

_POST_ getNearbyPlacesByType<br>
Search for up to 200 places at once, but with less detail than is typically returned from a Text Search or Nearby Search request.

_POST_ getNearbyPlacesRadar<br>
Search for up to 200 places at once, but with less detail than is typically returned from a Text Search or Nearby Search request.

_POST_ getPlaceDetails<br>
Request more details about a particular establishment or point of interest.

_POST_ searchPlacesByText<br>
The service responds with a list of places matching the text string and any location bias that has been set.

# _GoogleMapsDistanceMatrix API Documentation_

Calculate travel distance and time between destinations.<br>

Google DistanceMax API Key <br>
AIzaSyDvHUJVFuiHHbYzCquxakGYS5NZXAJ-6Wc

_POST_ getBicyclingDistanceMatrix<br>
Requests distance calculation for bicycling via bicycle paths & preferred streets (where available)

_POST_ getDrivingDistanceMatrix<br>
Indicates distance calculation using the road network.

_POST_ getTransitDistanceMatrix<br>
Requests distance calculation via public transit routes (where available).

_POST_ getWalkingDistanceMatrix<br>
Requests distance calculation for walking via pedestrian paths & sidewalks (where available).
