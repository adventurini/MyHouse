define({ "api": [
  {
    "type": "post",
    "url": "/api/answers",
    "title": "Create a answer.",
    "version": "1.0.0",
    "name": "CreateAnswers",
    "group": "Answers",
    "examples": [
      {
        "title": "Create example:",
        "content": "axios.post('/api/answers', {\n    answer: \"Some thing here about the house\",\n    amount_diff: 3000,\n    question_id: 1\n});",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>The answer to the question</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount_diff",
            "description": "<p>Amount diff per sq ft.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "question_id",
            "description": "<p>ID of the question the answer belongs to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Answer ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "question_id",
            "description": "<p>ID of the question this answer belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount_diff",
            "description": "<p>The amount difference per sq ft.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": " {\n    \"id\": 1,\n    \"answer\": \"Garnet\",\n    \"question_id\": 1,\n    \"amount_diff\": 30\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/answers/answers-router.js",
    "groupTitle": "Answers",
    "sampleRequest": [
      {
        "url": "http://localhost:3333/api/answers"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/answers",
    "title": "Get answers",
    "version": "1.0.0",
    "name": "GetAnswers",
    "group": "Answers",
    "examples": [
      {
        "title": "Request example:",
        "content": "axios.get('/api/answers');",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Answer ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Answer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "question_id",
            "description": "<p>ID of the question this answer belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "amount_diff",
            "description": "<p>The amount difference per sq ft.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "[\n    {\n           \"id\": 1,\n           \"answer\": \"Garnet\",\n           \"question_id\": 1,\n           \"amount_diff\": 30\n          \n       }...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/answers/answers-router.js",
    "groupTitle": "Answers",
    "sampleRequest": [
      {
        "url": "http://localhost:3333/api/answers"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/parcel",
    "title": "Get parcel data",
    "version": "1.0.0",
    "name": "GetParcelData",
    "group": "Parcel",
    "examples": [
      {
        "title": "Request example:",
        "content": "axios.post('/api/parcel');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Parcel Data",
          "content": "[\n {\n        \"id\": 1,\n        \"county\": \"Autauga\",\n        \"state\": \"AL\",\n        \"seat\": \"Prattville\",\n        \"population\": 55347,\n        \"sqmi\": \"594\",\n        \"geoid\": 1001,\n        \"city\": null,\n        \"source_availability\": \"yes\",\n        \"parcel_availability\": \"yes\",\n        \"total_cost\": \"0\",\n        \"tax_cost\": \"0\",\n        \"parcel_cost\": null,\n        \"table_name\": \"al_autauga16\",\n        \"total_objects\": \"36993\",\n        \"last_refresh\": \"2016-04-04\",\n        \"address_availability\": \"1\",\n        \"owner_availability\": \"1\",\n        \"table_updated\": \"2019-03-25 10:57:18 -0400\",\n        \"path\": \"/us/al/autauga\",\n        \"ll_schema_version\": null\n    }...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/parcelverse/parcelverse-router.js",
    "groupTitle": "Parcel",
    "sampleRequest": [
      {
        "url": "http://localhost:3333/api/parcel"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/residential",
    "title": "Get residential data",
    "version": "1.0.0",
    "name": "GetResidentialData",
    "group": "Parcel",
    "examples": [
      {
        "title": "Request example:",
        "content": "axios.post('/api/residential');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Residential Data",
          "content": "[\n {\n            \"price_sqr_ft\": \"$ 99\",\n            \"sale_price\": 181000,\n            \"list_price\": 179900,\n            \"90_day_before_sale_zestimate\": \"$255,000\",\n            \"price_sq_ftfor_keywords\": \"$155\",\n            \"close_data\": \"08/22/2018\",\n            \"street_number\": 3266,\n            \"street_name\": \"HARVARD\",\n            \"street_suffix\": \"Road\",\n            \"city\": \"Royal Oak\",\n            \"county\": \"Oakland\",\n            \"zip\": 48073,\n            \"beds_total\": 3,\n            \"baths_lavs\": 1.1,\n            \"est_fin_abv_grd_sft\": 1824,\n            \"acreage\": 0.25,\n            \"architecture_level\": \"1 Story\",\n            \"architecture_\\tstyle\": \"Ranch\",\n            \"price_sq_ft\": \"$ 99\",\n            \"basement_type\": null,\n            \"exterior\": \"Other\",\n            \"cooling\": null,\n            \"exterior_features\": \"Fenced\",\n            \"garage_dimensions\": null,\n            \"garage_features\": \"Attached, Direct Access\",\n            \"garage_size\": \"1 Car\",\n            \"heating\": \"Forced Air\",\n            \"original_list_price\": 199900,\n            \"photo_count\": 2,\n            \"pool\": \"FALSE\",\n            \"public_remarks\": \"HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.\",\n            \"avg\": \"$197\",\n            \"count\": 154,\n            \"without\": \"$196\",\n            \"sqft_est_tot_fin\": \"1,910\",\n            \"sqft_est_fin_lower_floor\": \"700\",\n            \"sqft-est_fin_abv_grd\": \"1,210\",\n            \"sqft_est_tot_bsmt\": \"800\",\n            \"year_built\": 1949,\n            \"year_remodeled\": \"2015\",\n            \"porch_type\": \"Deck\"\n        },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/residental/residential-router.js",
    "groupTitle": "Parcel",
    "sampleRequest": [
      {
        "url": "http://localhost:3333/api/residential"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/residential/zip",
    "title": "Get residential data by zip code",
    "version": "1.0.0",
    "name": "GetResidentialDataByZip",
    "group": "Parcel",
    "examples": [
      {
        "title": "Request example:",
        "content": "axios.post('/api/residential/zip', {zip: 80920});",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "zip",
            "description": "<p>Residential zip code.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Residential Data",
          "content": "[\n {\n            \"price_sqr_ft\": \"$ 99\",\n            \"sale_price\": 181000,\n            \"list_price\": 179900,\n            \"90_day_before_sale_zestimate\": \"$255,000\",\n            \"price_sq_ftfor_keywords\": \"$155\",\n            \"close_data\": \"08/22/2018\",\n            \"street_number\": 3266,\n            \"street_name\": \"HARVARD\",\n            \"street_suffix\": \"Road\",\n            \"city\": \"Royal Oak\",\n            \"county\": \"Oakland\",\n            \"zip\": 48073,\n            \"beds_total\": 3,\n            \"baths_lavs\": 1.1,\n            \"est_fin_abv_grd_sft\": 1824,\n            \"acreage\": 0.25,\n            \"architecture_level\": \"1 Story\",\n            \"architecture_\\tstyle\": \"Ranch\",\n            \"price_sq_ft\": \"$ 99\",\n            \"basement_type\": null,\n            \"exterior\": \"Other\",\n            \"cooling\": null,\n            \"exterior_features\": \"Fenced\",\n            \"garage_dimensions\": null,\n            \"garage_features\": \"Attached, Direct Access\",\n            \"garage_size\": \"1 Car\",\n            \"heating\": \"Forced Air\",\n            \"original_list_price\": 199900,\n            \"photo_count\": 2,\n            \"pool\": \"FALSE\",\n            \"public_remarks\": \"HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.\",\n            \"avg\": \"$197\",\n            \"count\": 154,\n            \"without\": \"$196\",\n            \"sqft_est_tot_fin\": \"1,910\",\n            \"sqft_est_fin_lower_floor\": \"700\",\n            \"sqft-est_fin_abv_grd\": \"1,210\",\n            \"sqft_est_tot_bsmt\": \"800\",\n            \"year_built\": 1949,\n            \"year_remodeled\": \"2015\",\n            \"porch_type\": \"Deck\"\n        },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/residental/residential-router.js",
    "groupTitle": "Parcel",
    "sampleRequest": [
      {
        "url": "http://localhost:3333/api/residential/zip"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/residential/search",
    "title": "Search by keyword",
    "version": "1.0.0",
    "name": "GetResidentialDataByZipAndKeyword",
    "group": "Parcel",
    "examples": [
      {
        "title": "Request example:",
        "content": "axios.post('/api/residential/zip', {keyword: \"granite\"});",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Keyword to look for in public remarks.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Residential Data",
          "content": "[\n {\n            \"price_sqr_ft\": \"$ 99\",\n            \"sale_price\": 181000,\n            \"list_price\": 179900,\n            \"90_day_before_sale_zestimate\": \"$255,000\",\n            \"price_sq_ftfor_keywords\": \"$155\",\n            \"close_data\": \"08/22/2018\",\n            \"street_number\": 3266,\n            \"street_name\": \"HARVARD\",\n            \"street_suffix\": \"Road\",\n            \"city\": \"Royal Oak\",\n            \"county\": \"Oakland\",\n            \"zip\": 48073,\n            \"beds_total\": 3,\n            \"baths_lavs\": 1.1,\n            \"est_fin_abv_grd_sft\": 1824,\n            \"acreage\": 0.25,\n            \"architecture_level\": \"1 Story\",\n            \"architecture_\\tstyle\": \"Ranch\",\n            \"price_sq_ft\": \"$ 99\",\n            \"basement_type\": null,\n            \"exterior\": \"Other\",\n            \"cooling\": null,\n            \"exterior_features\": \"Fenced\",\n            \"garage_dimensions\": null,\n            \"garage_features\": \"Attached, Direct Access\",\n            \"garage_size\": \"1 Car\",\n            \"heating\": \"Forced Air\",\n            \"original_list_price\": 199900,\n            \"photo_count\": 2,\n            \"pool\": \"FALSE\",\n            \"public_remarks\": \"HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.\",\n            \"avg\": \"$197\",\n            \"count\": 154,\n            \"without\": \"$196\",\n            \"sqft_est_tot_fin\": \"1,910\",\n            \"sqft_est_fin_lower_floor\": \"700\",\n            \"sqft-est_fin_abv_grd\": \"1,210\",\n            \"sqft_est_tot_bsmt\": \"800\",\n            \"year_built\": 1949,\n            \"year_remodeled\": \"2015\",\n            \"porch_type\": \"Deck\"\n        }...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/residental/residential-router.js",
    "groupTitle": "Parcel",
    "sampleRequest": [
      {
        "url": "http://localhost:3333/api/residential/search"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/questions",
    "title": "Create a question",
    "version": "1.0.0",
    "name": "CreateQuestions",
    "group": "Questions",
    "examples": [
      {
        "title": "Post example:",
        "content": "axios.post('/api/questions', {\n    question: \"What did the duck ask the rooster?\"\n});",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>The question to be added.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Question ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "questions",
            "description": "<p>Question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "\n{\n           \"id\": 1,\n           \"questions\": \"What kind of food does your fridge have in it?\",\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/questions/questioins-router.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:3333/api/questions"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/questions",
    "title": "Get questions",
    "version": "1.0.0",
    "name": "GetQuestions",
    "group": "Questions",
    "examples": [
      {
        "title": "Request example:",
        "content": "axios.post('/api/questions');",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Question ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "questions",
            "description": "<p>Question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "answers",
            "description": "<p>Question options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "[\n{\n           \"id\": 1,\n           \"questions\": \"What kind of food does your fridge have in it?\",\n           \"answers\": [{\n               \"id\": 1,\n               \"answers\": \"Meat mostly\",\n               \"question_id\": 1,\n               \"amount_diff\": 0\n               \n           }...\n           ]\n       }...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/questions/questioins-router.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:3333/api/questions"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
