var A = [];
var B = [];
var matrix = [[]];
function run(max , min) 
{
    var arrayAverage = 0;
    var arrayRowAverage = 0;
    var counter = 0;
    var smallest = 10000;
    var biggest = 1000;
    var bigI, bigJ, smallJ, bigJ;
    for (var i = 0; i < 35; i++) 
    {
        A[i] = (Math.floor(Math.random() * (max - min)) + min);
        arrayAverage = arrayAverage + A[i];
    }
    arrayAverage = arrayAverage / A.length;

    for (var i = 0; i < 35; i++) 
    {
        B [i] = (Math.floor(Math.random() * (max - arrayAverage) + arrayAverage));
    }
    document.write ("<table>");
    for (var i = 0; i < 35; i++) 
    {
        arrayAverage=0;
        counter = 0;
        document.write ("<tr>")
        matrix[i] = [];
        for (var j = 0; j<35; j++)
        {
            matrix [i][j] = A[i] * B[j];
            arrayAverage = arrayAverage +  matrix [i][j];
            document.write("<td>" +matrix [i][j] + "</td>");
            if (matrix[i][j] % 2 == 0)
            {
                counter++;
            }
        }
        arrayAverage = arrayAverage / 35;
        document.write("<td>There is "+ counter + " even numbers in this colummn , and average is " + Math.floor(arrayAverage) + "</td>");
        
        document.write("</tr>");
    }
    document.write("</table>");
    for(var i = 0; i<35; i++)
    {
        arrayRowAverage = 0;
        for(var j = 0; j<35; j++)
        {
            arrayRowAverage += matrix[j][i];
            if (matrix[j][i] > biggest)
            {
                biggest = matrix[j][i];
                bigI = i;
                bigJ = j;
            }
            else if (matrix[j][i]<smallest)
            smallest = matrix [j][i];
            smallI = i;
            smallJ = j;
        }
        arrayRowAverage = arrayRowAverage / 35;
        document.write (i + 1 + ". row average is " + Math.floor(arrayRowAverage) + "<br>");
    }
    matrix[smallI][smallJ] = biggest;
    matrix[bigJ][bigI] = smallest;
}