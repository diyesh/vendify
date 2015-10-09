<h1>Vendify (Shopify)</h1>

Vendify is a template application that lists all current vendors alphabetcally and also gives you the option to showcase featured vendors in your [Shopify](http//shopify.com) theme. If you run a multiple brand webshop with Shopify, then vendify might better help you list all your vendors (brands) and promote featured or top preforming brands. 

<p>
The repository is setup similar to how your directory stucture on Shopify looks however it also includes the development assets of the application for the devs. If you just want to install this in your theme follow the Installation process below.  
</p>
<p>
Screenshots: [here](#)
</p>

<h4>Dependencies</h4>
The dependencies are compressed for production into /assets directory using gulp and componenets found in the /src directory.

- [Enquire.js](#)
- [Savvior](#)
- [jQuery Sticky](#)


Directory structure
---------------
```
├── assets
│   └── Javascript and SCSS file
│
├── config
│   └── settings.json and schema for Shopify Customize.
│
├── node_modules
│   └── gulp.js and the requid plugins for development.
│
├── snippets
│   ├── page.brands-az.liquid
│   └── page.brands-featured.liquid
│
├── src
│   ├── bower_componenets
│   │   └── Required dependencies kept in version control.
│   └── js
│       └── Inline javascript (dist).
│
├── snippets
│   └── custom code snippets
│
│
├── templates
│   └── page.brands.liquid
│       └── the brands page template.
```

<h2>Install</h2>
Setup is fairly easy, there is not much to this at all. If you're lazy and use ruby or gulp to connect to your theme then just add the assets, snippets and template to your theme directory otherwise you can follow the below steps. 

<h5>Step 1</h5>
You need to first setup a new "brands" page in your theme and you can do this by following the instructions found [here][page_setup]. 

<h5>Step 2</h5>
Goto your <b>Customize Theme</b> page in shopify.

<h5>Step 3</h5>
Create 2 new files in the directory named <b>assets</b>. Name one file <b>brands.min.js</b> and the other file <b>brands.scss</b>. Copy and paste the code for these files:

- [brands.scss][brands_scss]. 
- [brands.min.js][brands_javascript].

<h5>Step 4</h5>
It's good practice to seperate your code into logical chuncks. Shopify allows us to do this with snippets. You need to Create a 2 new files in the directory named <b>snippets</b>. Name one of these files <b>page_brands-az</b> and the other file <b>page_brands-featured</b>. Copy and paste the code for these files:

- [page_brands-az][brands_az]. 
- [page_brands-featured][brands_featured]. 

<h5>Step 5</h5>
Open your templates directory and add the following two lines to the template file named <b>page.brands.liquid</b>.

<pre>
{% include 'page_brands-featured' %}
{% include 'page_brands-az' %}
</pre>

<h5>Step 6</h5>
Lastly we want to be able to control what featured brands we are going to showcase. For this we need to add some .json code to our config directory files. Open this directory and add the following lines to the <b>settings_data.json</b> and the <b>settings_schema.json</b> files:

- [settings_data.json][settings_data]
- [settings_schema.json][settings_json]

<h5>Issues</h5>
Everyones shopify setup is different or unique. If you don't see your brands page then you have either not setup your collections correctly or your page correctly. However this all should get you started. 

Resources
---------------------
- [Themes Documentation][1] 
- [Liquid Tag Cheat Sheet][2] 


Support
---------------------
[Email](mailto:nicos.savidis@gmail.com)

License
---------------------
Anyone is free to use this theme design and development enviroment as a reference under the [MIT License](LICENSE). 


[page_setup]: https://docs.shopify.com/manual/your-website/pages/create-page
[brands_scss]: #
[brands_javascript]: #
[brands_az]: # 
[brands_featured]: #
[settings_data]: #
[settings_json]: #


[1]: http://docs.shopify.com/themes
[2]: https://github.com/Shopify/shopify_theme
