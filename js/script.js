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
        let intArrayRowAverage = 0;
        let intCounter = 0;
        let intSmallest = 10000;
        let intBiggest = 0;
        let intBiggestIndexI, intBiggestIndexJ, intSmallestIndexI, intSmallestIndexJ;
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;
        console.log (intArrayAverage);

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
                document.write('<td>' +arrMatrix [i][j] + '</td>');
                if (arrMatrix[i][j] % 2 == 0)
                {
                    intCounter++;
                }
            }
            intArrayAverage = intArrayAverage / intNumberOfRows;
            document.write('<td>There is '+ intCounter + ' even numbers in this colummn , and average is ' + Math.floor(intArrayAverage) + '</td>');
            
            document.write('</tr>');
        }
        document.write('</table>');
        for(var i = 0; i<intNumberOfRows; i++)
        {
            intArrayRowAverage = 0;
            for(var j = 0; j<intNumberOfColumns; j++)
            {
                intArrayRowAverage += arrMatrix[j][i];
                if (arrMatrix[j][i] > intBiggest) 
                {
                    intBiggest = arrMatrix[j][i];
                    intBiggestIndexI = i;
                    intBiggestIndexJ = j;
                }
                else if (arrMatrix[j][i]<intSmallest)
                intSmallest = arrMatrix[j][i];
                intSmallestIndexI = i;
                intSmallestIndexJ = j;
            }
            intArrayRowAverage = intArrayRowAverage / intNumberOfColumns;
            document.write (i + 1 + '. row average is ' + Math.floor(intArrayRowAverage) + '<br>');
        }
        arrMatrix[intSmallestIndexJ][intSmallestIndexI] = intBiggest;
        arrMatrix[intBiggestIndexJ][intBiggestIndexI] = intSmallest;
    }
}
