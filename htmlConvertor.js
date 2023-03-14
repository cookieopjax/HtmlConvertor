//https://github.com/eKoopmans/html2pdf.js
export async function toPdf(selector, filename = "tablePdf") {
  let ele = document.querySelector(selector); //儲存dom element

  let opt = { filename: `${filename}.pdf` };
  if (!ele)
    throw new ReferenceError(`Cannot find element with selector '${selector}'`);

  html2pdf(ele, opt);
}

//https://github.com/JackGit/table2excel.js
export async function tableToExcel(selector, filename = "tableExcel") {
  let ele = document.querySelector(selector); //儲存dom element

  if (!ele)
    throw new ReferenceError(`Cannot find element with selector '${selector}'`);

  if (ele.tagName !== "TABLE") throw new Error(`'${selector}' is not a table`);

  new Table2Excel(selector).export(filename);
}
