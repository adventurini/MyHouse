# MyHouse v1.0.0

Api for MyHouse project storing and getting information from the sqlite database.

- [Answers](#answers)
	- [Create a answer.](#create-a-answer.)
	- [Get answers](#get-answers)
	
- [Houses](#houses)
	- [Create houses](#create-houses)
	- [Get houses](#get-houses)
	
- [Parcel](#parcel)
	- [Avg price/sqr ft for keyword.](#avg-price/sqr-ft-for-keyword.)
	- [Get parcel data](#get-parcel-data)
	- [Get residential data](#get-residential-data)
	- [Get residential data by zip code](#get-residential-data-by-zip-code)
	- [Search by keyword](#search-by-keyword)
	
- [Questions](#questions)
	- [Create a question](#create-a-question)
	- [Get questions](#get-questions)
	


# Answers

## Create a answer.



	POST /api/answers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| answer			| String			|  <p>The answer to the question</p>							|
| amount_diff			| Number			|  <p>Amount diff per sq ft.</p>							|
| question_id			| Number			|  <p>ID of the question the answer belongs to.</p>							|

### Examples

Create example:

```
axios.post('/api/answers', {
    answer: "Some thing here about the house",
    amount_diff: 3000,
    question_id: 1
});
```

### Success Response

Example:

```
 {
    "id": 1,
    "answer": "Garnet",
    "question_id": 1,
    "amount_diff": 30
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get answers



	GET /api/answers


### Examples

Request example:

```
axios.get('/api/answers');
```

### Success Response

Example:

```
[
    {
           "id": 1,
           "answer": "Garnet",
           "question_id": 1,
           "amount_diff": 30
          
       }...
]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
# Houses

## Create houses



	POST /api/houses


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| address			| String			|  <p>The address of the house.</p>							|
| year_made			| Number			|  <p>Year the house was made.</p>							|
| year_remodel			| Number			| **optional** <p>Year the house was remodeled.</p>							|
| sq_ft			| Number			|  <p>Sq footage of the house.</p>							|
| sq_ft_est_lower_level			| Number			| **optional** <p>Sq footage of the lower level.</p>							|
| sq_ft_est_abv_grd			| Number			| **optional** <p>Sq footage above ground.</p>							|
| sq_ft_est_basement			| Number			| **optional** <p>Sq footage of the basement.</p>							|
| lot_size			| Number			|  <p>Sq footage of the lot.</p>							|
| street_number			| Number			|  <p>Street Number.</p>							|
| street_name			| String			|  <p>Name of the street.</p>							|
| street_suffix			| String			|  <p>Street suffix.</p>							|
| city			| String			|  <p>City.</p>							|
| county			| String			|  <p>County.</p>							|
| zip			| Number			|  <p>5 digit zip code.</p>							|
| beds			| Number			|  <p>Number of bedrooms.</p>							|
| baths			| Number			|  <p>Number of bathrooms.</p>							|
| architecture_level			| String			| **optional** 							|
| architecture_style			| String			| **optional** 							|
| basement_type			| String			| **optional** 							|
| exterior_features			| String			| **optional** 							|
| garage_features			| String			| **optional** 							|
| garage_size			| String			| **optional** 							|
| garage_dimensions			| String			| **optional** 							|
| heating			| String			| **optional** 							|
| pool			| String			| **optional** 							|
| public_remarks			| String			| **optional** 							|
| porch_type			| String			| **optional** 							|

### Examples

Request example:

```
axios.post('/api/houses', {
     address: "Some address",
     year_made: 1999,
     year_remodel: 2000,
     sq_ft: 3000,
     sq_ft_est_lower_floor: 2000,
     sq_ft_est_abv_grn: 1500,
});
```

### Success Response

House Data

```
{

}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get houses



	GET /api/houses


### Examples

Request example:

```
axios.get('/api/houses');
```

### Success Response

Parcel Data

```
{

}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
# Parcel

## Avg price/sqr ft for keyword.



	POST /api/residential/search/avg


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| keyword			| String			|  <p>Keyword to look for in public remarks.</p>							|

### Examples

Request example:

```
axios.post('/api/residential/search/avg', {keyword: "granite"});
```

### Success Response

Residential Data

```
[
 {
        "avg(`price_sqr_ft`)": 210.10526315789474,
        "avg(`sale_price`)": 315024.29411764705,
        "avg(`sqft_est_tot_fin`)": 1946.6470588235295
    }
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get parcel data



	GET /api/parcel


### Examples

Request example:

```
axios.post('/api/parcel');
```

### Success Response

Parcel Data

```
[
 {
        "id": 1,
        "county": "Autauga",
        "state": "AL",
        "seat": "Prattville",
        "population": 55347,
        "sqmi": "594",
        "geoid": 1001,
        "city": null,
        "source_availability": "yes",
        "parcel_availability": "yes",
        "total_cost": "0",
        "tax_cost": "0",
        "parcel_cost": null,
        "table_name": "al_autauga16",
        "total_objects": "36993",
        "last_refresh": "2016-04-04",
        "address_availability": "1",
        "owner_availability": "1",
        "table_updated": "2019-03-25 10:57:18 -0400",
        "path": "/us/al/autauga",
        "ll_schema_version": null
    }...
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get residential data



	GET /api/residential


### Examples

Request example:

```
axios.post('/api/residential');
```

### Success Response

Residential Data

```
[
 {
            "price_sqr_ft": "$ 99",
            "sale_price": 181000,
            "list_price": 179900,
            "90_day_before_sale_zestimate": "$255,000",
            "price_sq_ftfor_keywords": "$155",
            "close_data": "08/22/2018",
            "street_number": 3266,
            "street_name": "HARVARD",
            "street_suffix": "Road",
            "city": "Royal Oak",
            "county": "Oakland",
            "zip": 48073,
            "beds_total": 3,
            "baths_lavs": 1.1,
            "est_fin_abv_grd_sft": 1824,
            "acreage": 0.25,
            "architecture_level": "1 Story",
            "architecture_\tstyle": "Ranch",
            "price_sq_ft": "$ 99",
            "basement_type": null,
            "exterior": "Other",
            "cooling": null,
            "exterior_features": "Fenced",
            "garage_dimensions": null,
            "garage_features": "Attached, Direct Access",
            "garage_size": "1 Car",
            "heating": "Forced Air",
            "original_list_price": 199900,
            "photo_count": 2,
            "pool": "FALSE",
            "public_remarks": "HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.",
            "avg": "$197",
            "count": 154,
            "without": "$196",
            "sqft_est_tot_fin": "1,910",
            "sqft_est_fin_lower_floor": "700",
            "sqft-est_fin_abv_grd": "1,210",
            "sqft_est_tot_bsmt": "800",
            "year_built": 1949,
            "year_remodeled": "2015",
            "porch_type": "Deck"
        },
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get residential data by zip code



	GET /api/residential/zip


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| zip			| Number			|  <p>Residential zip code.</p>							|

### Examples

Request example:

```
axios.post('/api/residential/zip', {zip: 80920});
```

### Success Response

Residential Data

```
[
 {
            "price_sqr_ft": "$ 99",
            "sale_price": 181000,
            "list_price": 179900,
            "90_day_before_sale_zestimate": "$255,000",
            "price_sq_ftfor_keywords": "$155",
            "close_data": "08/22/2018",
            "street_number": 3266,
            "street_name": "HARVARD",
            "street_suffix": "Road",
            "city": "Royal Oak",
            "county": "Oakland",
            "zip": 48073,
            "beds_total": 3,
            "baths_lavs": 1.1,
            "est_fin_abv_grd_sft": 1824,
            "acreage": 0.25,
            "architecture_level": "1 Story",
            "architecture_\tstyle": "Ranch",
            "price_sq_ft": "$ 99",
            "basement_type": null,
            "exterior": "Other",
            "cooling": null,
            "exterior_features": "Fenced",
            "garage_dimensions": null,
            "garage_features": "Attached, Direct Access",
            "garage_size": "1 Car",
            "heating": "Forced Air",
            "original_list_price": 199900,
            "photo_count": 2,
            "pool": "FALSE",
            "public_remarks": "HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.",
            "avg": "$197",
            "count": 154,
            "without": "$196",
            "sqft_est_tot_fin": "1,910",
            "sqft_est_fin_lower_floor": "700",
            "sqft-est_fin_abv_grd": "1,210",
            "sqft_est_tot_bsmt": "800",
            "year_built": 1949,
            "year_remodeled": "2015",
            "porch_type": "Deck"
        },
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Search by keyword



	POST /api/residential/search


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| keyword			| String			|  <p>Keyword to look for in public remarks.</p>							|

### Examples

Request example:

```
axios.post('/api/residential/search', {keyword: "granite"});
```

### Success Response

Residential Data

```
[
 {
            "price_sqr_ft": "$ 99",
            "sale_price": 181000,
            "list_price": 179900,
            "90_day_before_sale_zestimate": "$255,000",
            "price_sq_ftfor_keywords": "$155",
            "close_data": "08/22/2018",
            "street_number": 3266,
            "street_name": "HARVARD",
            "street_suffix": "Road",
            "city": "Royal Oak",
            "county": "Oakland",
            "zip": 48073,
            "beds_total": 3,
            "baths_lavs": 1.1,
            "est_fin_abv_grd_sft": 1824,
            "acreage": 0.25,
            "architecture_level": "1 Story",
            "architecture_\tstyle": "Ranch",
            "price_sq_ft": "$ 99",
            "basement_type": null,
            "exterior": "Other",
            "cooling": null,
            "exterior_features": "Fenced",
            "garage_dimensions": null,
            "garage_features": "Attached, Direct Access",
            "garage_size": "1 Car",
            "heating": "Forced Air",
            "original_list_price": 199900,
            "photo_count": 2,
            "pool": "FALSE",
            "public_remarks": "HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.",
            "avg": "$197",
            "count": 154,
            "without": "$196",
            "sqft_est_tot_fin": "1,910",
            "sqft_est_fin_lower_floor": "700",
            "sqft-est_fin_abv_grd": "1,210",
            "sqft_est_tot_bsmt": "800",
            "year_built": 1949,
            "year_remodeled": "2015",
            "porch_type": "Deck"
        }...
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
# Questions

## Create a question



	POST /api/questions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| question			| String			|  <p>The question to be added.</p>							|

### Examples

Post example:

```
axios.post('/api/questions', {
    question: "What did the duck ask the rooster?"
});
```

### Success Response

Example:

```

{
           "id": 1,
           "questions": "What kind of food does your fridge have in it?",
   }
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get questions



	GET /api/questions


### Examples

Request example:

```
axios.post('/api/questions');
```

### Success Response

Example:

```
[
{
           "id": 1,
           "questions": "What kind of food does your fridge have in it?",
           "answers": [{
               "id": 1,
               "answers": "Meat mostly",
               "question_id": 1,
               "amount_diff": 0
               
           }...
           ]
       }...
]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```

