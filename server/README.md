# MyHouse v1.0.0

Api for MyHouse project storing and getting information from the sqlite database.

- [Answers](#answers)
	- [Create a answer.](#create-a-answer.)
	- [Get answers](#get-answers)
	
- [Parcel](#parcel)
	- [Get parcel data](#get-parcel-data)
	- [Get residential data](#get-residential-data)
	
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
# Parcel

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

