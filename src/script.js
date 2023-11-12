document.getElementById('resume').addEventListener('click', function () {
    // Specify the path to the PDF file
    const filePath = 'images/example.pdf';

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute and create a download URL
    link.download = 'example.pdf';
    link.href = filePath;

    // Append the link to the document
    document.body.appendChild(link);

    // Programmatically trigger a click on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});