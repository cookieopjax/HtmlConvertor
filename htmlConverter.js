function loadScript(src) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    document.body.appendChild(script);
    script.onload = () => resolve();
    script.onerror = () => reject(`Cannot find ${src}.`);
    script.src = src;
  });
}

//https://github.com/eKoopmans/html2pdf.js
export async function toPdf(selector, filename = "tablePdf") {
  await loadScript("./html2pdf.bundle.min.js");

  let ele = document.querySelector(selector); //儲存dom element

  let opt = { filename: `${filename}.pdf` };
  if (!ele)
    throw new ReferenceError(`Cannot find element with selector '${selector}'`);

  html2pdf(ele, opt);
}

//https://github.com/JackGit/table2excel.js
export async function tableToExcel(selector, filename = "tableExcel") {
  await loadScript("./exceljs.min.js");
  await loadScript("./FileSaver.min.js");
  await loadScript("./table2excel.core.js");

  let ele = document.querySelector(selector); //儲存dom element

  if (!ele)
    throw new ReferenceError(`Cannot find element with selector '${selector}'`);

  if (ele.tagName !== "TABLE") throw new Error(`'${selector}' is not a table`);

  new Table2Excel(selector).export(filename);
}
