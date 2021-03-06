# admin

a web based admin panel

## API

#### [properties](#admin-properties)

  - [id](#admin-properties-id)


#### [methods](#admin-methods)

  - [listen](#admin-methods-listen) (options, callback)

  - [start](#admin-methods-start) (options, callback)


a web based admin panel

- **id** 

  - **type** : any


<a name="admin-methods"></a> 

## methods 

<a name="admin-methods-listen"></a> 

### admin.listen(options, callback)

start a listening admin web server

- **options** 

  - **type** : object

  - **properties**

    - **port** 

      - **type** : number

      - **default** : 8888

      - **description** : the port to listen on

    - **host** 

      - **type** : string

      - **default** : 0.0.0.0

      - **description** : the host interface to listen on

- **callback** 

  - **type** : function

<a name="admin-methods-start"></a> 

### admin.start(options, callback)

start a listening admin web server

- **options** 

  - **type** : object

  - **properties**

    - **port** 

      - **type** : number

      - **default** : 8888

      - **description** : the port to listen on

    - **host** 

      - **type** : string

      - **default** : 0.0.0.0

      - **description** : the host interface to listen on

- **callback** 

  - **type** : function


## dependencies 
- [connect](http://npmjs.org/package/connect) v2.7.1
- [highlight](http://npmjs.org/package/highlight) v0.2.3

*README auto-generated with [docs](https://github.com/bigcompany/resources/tree/master/docs)*