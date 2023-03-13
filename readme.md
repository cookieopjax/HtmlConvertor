# HtmlConvertor

This library provides an easy way to convert HTML elements into PDF or tables into XLSX files. With just a few lines of code, you can transform your HTML content into a downloadable PDF or XLSX file.

## Usage

#### Include it as a script in your HTML

```
https://unpkg.com/html-convertor@1.0.1/htmlConvertor.js
```

You can include the library as a script in your HTML file, like this:
```html
<header>
  <script src="./htmlConverter.js" type="module"></script>
</header>

<script type="module">
  import { toPdf, tableToExcel } from "./htmlConverter.js";
</script>

```

### HTML to PDF
You can use the toPdf() function to convert any HTML element into a PDF file. The function takes two parameters:

```javascript
toPdf(selector, filename);
```

* selector: Required. A string that specifies the HTML element you want to convert. This can be any valid CSS selector, such as #myElement or .myClass.
* filename: Optional. A string that specifies the name of the downloaded file.


Here's an example of how to use the toPdf() function:

```javascript
toPdf('#content', 'myFile.pdf');
```

This will convert the HTML element with the ID content into a PDF file named myFile.pdf.


### Table to XLSX
You can use the tableToExcel() function to convert a table element into an XLSX file. The function takes two parameters:

```javascript
tableToExcel(selector, filename);
```

* selector: Required. A string that specifies the table element you want to convert. This can be any valid CSS selector, such as #myTable or .myTableClass.
* filename: Optional. A string that specifies the name of the downloaded file.
Here's an example of how to use the tableToExcel() function:

```javascript
tableToExcel('#myTable', 'myFile.xlsx');
```

This will convert the table element with the ID myTable into an XLSX file named myFile.xlsx.

###### Note that the tableToExcel() function only works with table elements.


### Dependencies
https://github.com/JackGit/table2excel.js

https://github.com/eKoopmans/html2pdf.js