# api

provides a web API for interacting with resources

## API

#### [properties](#api-properties)

  - [id](#api-properties-id)

  - [version](#api-properties-version)


#### [methods](#api-methods)

  - [listen](#api-methods-listen) (options, callback)


<a name="api-properties"></a>

## properties 
provides a web API for interacting with resources

- **id** 

  - **type** : any

- **version** 

  - **description** : the semantic version of the API

  - **type** : string

  - **default** : v0.0.1


<a name="api-methods"></a> 

## methods 

<a name="api-methods-listen"></a> 

### api.listen(options, callback)

when the api resource starts

- **options** 

  - **type** : object

  - **properties**

    - **id** 

      - **type** : any

    - **version** 

      - **description** : the semantic version of the API

      - **type** : string

      - **default** : v0.0.1

- **callback** 

  - **description** : the callback executed after server listen

  - **type** : function

  - **required** : false



*README auto-generated with [docs](https://github.com/bigcompany/resources/tree/master/docs)*