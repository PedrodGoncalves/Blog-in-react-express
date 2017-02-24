export default ({body}) => {
    return `
     <!DOCTYPE html>
     <html>
            <head>
                <title>
                    myblog
                </title>
            </head>

            <body>
                <div id='entry'>${body}
                </div>
                <script src="bundle.js" type="text/javascript"></script>
            </body>
        </html>
      `;
};
