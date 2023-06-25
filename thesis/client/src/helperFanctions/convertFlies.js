import { jsPDF } from 'jspdf';

export const convertToPDF = () => {
  const elementHTML = document.querySelector('#project');
  const doc = new jsPDF();
  doc.html(elementHTML, {
    callback: function (doc) {
      doc.save('easy-tethis.pdf');
    },
    margin: [10, 10, 10, 10],
    autoPaging: 'text',
    x: 0,
    y: 0,
    width: 190,
    windowWidth: 800,
  });
};
