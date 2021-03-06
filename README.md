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

#### Start the server (*nix):

```
$ DEBUG=wdots npm run dev
```

#### Start the server (Windows):

```
$ set DEBUG=wdots npm run dev
```

#### Run the SCSS watch task:
 
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

## index.htm

`/views/index.htm` is special. This markup wraps the markup from the `/views/*.htm` files. Effectively,
this means that the content of the page you are on will replace the `{{{content}}}` tag in `index.htm`.

So if you want the header and footer to appear on every page, you can put them in `index.htm`.

## Lint

Ensure code is fully linted before pushing

```
$ npm run lint -s
```
