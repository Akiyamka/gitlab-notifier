# Fire Api Spec
## Types
- Coordinates: [
  longitude,
  latitude
]

- Bounds: [
    Coordinates, // sw
    Coordinates  // ne
  ]

---
## GET /places/
Firefighter locations.  
With `near` parameter sorted descending by distance.

### Headers:
 - content-type: application/json

### Query parameters:
 - near={lng},{lat}

### Response:
```
[
  {
    "id": UUID,
    "name": String,
    "contacts": String[],
    "address": String,
    "distance": String,
    "coordinates": Coordinates
  }
]
```

### Examples:

- `/places/`
- `/places/?near=27.539291381835938,53.855969201823164`

---
## GET /units/{place_id}/

### Description
Operational information on the availability of equipment.

### Headers:
 - content-type: application/json

### Query parameters:  
None

### Response:
```
[
  {
   "name": String,
   "available": Boolean
  }
]
```
---
## GET /geocoder/

### Description
Search location by keywords

### Query parameters:  
- search

### Response:
```
[
  {
   "name": String,
   "id": String
  }
]
```

### Examples:

- `/geocoder/?search="Проспект"`

---
## GET /geocoder/{geocoder_id}/

### Description
Get location center and bounds

### Query parameters:  
None

### Response:
```
  {
   "center": Coordinates,
   "bounds": Bounds,
  }
```