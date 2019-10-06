
function run(max , min) 
{
    let rowNumbers = [];
    let numberOfCollummnss = [];
    let matrix = [[]];
    let arrayAverage = 0;
    let arrayRowAverage = 0;
    let counter = 0;
    let smallest = 10000;
    let biggest = 0;
    let biggestIndexI, biggestIndexJ, smallestIndexI, smallestIndexJ;
    const numberOfRows = document.getElementById('numberOfCollummns').value;
    const numberOfCollummns = document.getElementById('numberOfRows').value;
    for (var i = 0; i < numberOfCollummns; i++) 
    {
        rowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
        arrayAverage = arrayAverage + rowNumbers[i];
    }
    arrayAverage = arrayAverage / rowNumbers.length;

    for (var i = 0; i < numberOfRows; i++) 
    {
        numberOfCollummnss [i] = (Math.floor(Math.random() * (max - arrayAverage) + arrayAverage));
    }
    document.write ('<table>');
    for (var i = 0; i < numberOfCollummns; i++) 
    {
        arrayAverage=0;
        counter = 0;
        document.write ('<tr>')
        matrix[i] = [];
        for (var j = 0; j < numberOfRows; j++)
        {
            matrix [i][j] = rowNumbers[i] * numberOfCollummnss[j];
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
        for(var j = 0; j<numberOfCollummns; j++)
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
        arrayRowAverage = arrayRowAverage / numberOfCollummns;
        document.write (i + 1 + '. row average is ' + Math.floor(arrayRowAverage) + '<br>');
    }
    matrix[smallestIndexJ][smallestIndexI] = biggest;
    matrix[biggestIndexJ][biggestIndexI] = smallest;
}