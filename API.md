# Welcome to Maya's Thesis Prototype API

## Routes

* ROUTE: /api
* VERB: GET
* RESPONSE:
``` 
{
    participants: [ 
        {
            id: participant id #
            list: [
                list of partiticpant items
            ]
        },
        ...
    ]

} 
```

* ROUTE: /api
* VERB: POST
* RESPONSE:

```
{
    participants: [
        {
            id: participant id #
            list: [
                list of partiticpant items
            ]
        },
        ...
    ]

}
```


* ROUTE: /api/:id/:newID
* VERB: PUT
* URL PARAMETERS:
    * id - ID to alter
    * newID - new ID 
* RESPONSE: 

```
{
    participants: [
        {
            id: participant id #
            list: [
                list of partiticpant items
            ]
        },
        ...
    ]

}
```

* ROUTE: /api/:id
* VERB: DELETE
* URL PARAMETERS:
    * id - ID to delete
RESPONSE: 

```
{
    participants: [
        {
            id: participant id #
            list: [
                list of partiticpant items
            ]
        },
        ...
    ]

}
```

