# HtmlConvertor
<p align="center">
  <a href="https://www.npmjs.com/package/html-convertor?activeTab=readme"><img src="https://img.shields.io/npm/v/html-convertor" alt="Build Status"></a>
  <a href="https://github.com/cookieopjax/HtmlConvertor/blob/main/LICENSE"><img src="https://img.shields.io/github/license/cookieopjax/HtmlConvertor" alt="Build Status"></a>
</p>

This library provides an easy way to convert HTML elements into PDF or tables into XLSX files. With just a few lines of code, you can transform your HTML content into a downloadable PDF or XLSX file.

## Usage

#### Include it as a script in your HTML

You can include the library as a script in your HTML file, like this:
```html
<header>
  <!--take care of your file path-->
  <script src="./exceljs.min.js" ></script>
  <script src="./FileSaver.min.js" ></script>
  <script src="./html2pdf.bundle.min.js" ></script>
  <script src="./table2excel.core.js" ></script>
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
* filename: Optional. A string that specifies the name of the downloaded file, without the file extension.


Here's an example of how to use the toPdf() function:

```javascript
toPdf('#content', 'myFile');
```

This will convert the HTML element with the ID content into a PDF file named myFile.pdf.


### Table to XLSX
You can use the tableToExcel() function to convert a table element into an XLSX file. The function takes two parameters:

```javascript
tableToExcel(selector, filename);
```

* selector: Required. A string that specifies the table element you want to convert. This can be any valid CSS selector, such as #myTable or .myTableClass.
* filename: Optional. A string that specifies the name of the downloaded file, without the file extension.
Here's an example of how to use the tableToExcel() function:

```javascript
tableToExcel('#myTable', 'myFile');
```

This will convert the table element with the ID myTable into an XLSX file named myFile.xlsx.

###### Note that the tableToExcel() function only works with table elements.


### Dependencies
https://github.com/JackGit/table2excel.js

https://github.com/eKoopmans/html2pdf.js