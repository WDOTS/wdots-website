# Web Devs of the Shire website

# Contribute

## Install

```
$ git clone git@github.com:WDOTS/wdots-website.git
$ npm i
```

## Run 

When server is running, you can access the website at [http://localhost:9000](http://localhost:9000)

### Developer mode

Start the server:

```
$ npm run dev
```

Run the SCSS watch task:
 
 ```
 $ npm run watch
 ```

## Production mode

```
$ npm start 
```

## Add a new page

1. Add `yourname.htm` file to the `/views` directory
2. Add `yourname.scss` file to the `/styles` directory 
3. You can access your new file by browsing to http://localhost/yourname 

## Lint

Ensure code is fully linted before pushing

```
$ npm run lint -s
```
