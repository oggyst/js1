function run(max , min) 
{   
    const numberOfRows = document.getElementById('numberOfcolumns').value;
    const numberOfcolumns = document.getElementById('numberOfRows').value;
    if(numberOfRows == "" || numberOfcolumns == "" )
    {
        alert('Please fill required fields.');
    } 
    else
        {
        let rowNumbers = [];
        let columnNumbers = [];
        let matrix = [[]];
        let arrayAverage = 0;
        let arrayRowAverage = 0;
        let counter = 0;
        let smallest = 10000;
        let biggest = 0;
        let biggestIndexI, biggestIndexJ, smallestIndexI, smallestIndexJ;
        for (var i = 0; i < numberOfcolumns; i++) 
        {
            rowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            arrayAverage = arrayAverage + rowNumbers[i];
        }
        arrayAverage = arrayAverage / rowNumbers.length;

        for (var i = 0; i < numberOfRows; i++) 
        {
            columnNumbers [i] = (Math.floor(Math.random() * (max - arrayAverage) + arrayAverage));
        }
        document.write ('<table>');
        for (var i = 0; i < numberOfcolumns; i++) 
        {
            arrayAverage=0;
            counter = 0;
            document.write ('<tr>')
            matrix[i] = [];
            for (var j = 0; j < numberOfRows; j++)
            {
                matrix [i][j] = rowNumbers[i] * columnNumbers[j];
                arrayAverage = arrayAverage +  matrix [i][j];
                document.write('<td>' +matrix [i][j] + '</td>');
                if (matrix[i][j] % 2 == 0)
                {
                    counter++;
                }
            }
            arrayAverage = arrayAverage / numberOfRows;
            document.write('<td>There is '+ counter + ' even numbers in this colummn , and average is ' + Math.floor(arrayAverage) + '</td>');
            
            document.write('</tr>');
        }
        document.write('</table>');
        for(var i = 0; i<numberOfRows; i++)
        {
            arrayRowAverage = 0;
            for(var j = 0; j<numberOfcolumns; j++)
            {
                arrayRowAverage += matrix[j][i];
                if (matrix[j][i] > biggest) 
                {
                    biggest = matrix[j][i];
                    biggestIndexI = i;
                    biggestIndexJ = j;
                }
                else if (matrix[j][i]<smallest)
                smallest = matrix[j][i];
                smallestIndexI = i;
                smallestIndexJ = j;
            }
            arrayRowAverage = arrayRowAverage / numberOfcolumns;
            document.write (i + 1 + '. row average is ' + Math.floor(arrayRowAverage) + '<br>');
        }
        matrix[smallestIndexJ][smallestIndexI] = biggest;
        matrix[biggestIndexJ][biggestIndexI] = smallest;
    }
}
