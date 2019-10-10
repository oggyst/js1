function run(max , min) 
{   
    const intNumberOfRows = document.getElementById('numberOfColumns').value;
    const intNumberOfColumns = document.getElementById('numberOfRows').value;
    if(intNumberOfRows == "" || intNumberOfColumns == "" )
    {
        alert('Please fill required fields.');
    } else if (intNumberOfRows < 1 || intNumberOfColumns < 1)
        alert('All numbers must be 1 or greater');
    else
        {
        let arrRowNumbers = [];
        let arrColumnNumbers = [];
        let arrMatrix = [[]];
        let intArrayAverage = 0;
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;

        for (var i = 0; i < intNumberOfRows; i++) 
        {
            arrColumnNumbers [i] = (Math.floor(Math.random() * (max - intArrayAverage) + intArrayAverage));
        }
        document.write ('<table>');
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            intArrayAverage=0;
            intCounter = 0;
            document.write ('<tr>')
            arrMatrix[i] = [];
            for (var j = 0; j < intNumberOfRows; j++)
            {
                arrMatrix [i][j] = arrRowNumbers[i] * arrColumnNumbers[j];
                intArrayAverage = intArrayAverage +  arrMatrix [i][j];
                document.write('<td> a' + i + '*b' + j + ' = ' +arrMatrix [i][j] + '</td>');
            }
            document.write('</tr>');
        }
    }
}