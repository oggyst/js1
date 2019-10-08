function run(max , min) 
{   
    const numberOfRows = document.getElementById('numberOfcolumns').value;
    const numberOfcolumns = document.getElementById('numberOfRows').value;
    if(numberOfRows == "" || numberOfcolumns == "" )
    {
        alert('Please fill required fields.');
    } 
    else if (numberOfRows < 1 || numberOfcolumns < 1)
    {
        alert('Only positive values ( 1 or greater)');
    }
    else
        {
        let rowNumbers = [];
        let columnNumbers = [];
        let matrix = [[]];
        let arrayAverage = 0;
        let arrayRowAverage = 0;
        let counter;
        let smallest = 10000;
        let biggest = 0;
        let biggestIndexI, biggestIndexJ, smallestIndexI, smallestIndexJ;
        
        
        function getRowNumbers (i)
        {
            return rowNumbers [i];
        }
        function setRowNumbers (i,x)
        {
            rowNumbers [i] = x;
        }
        function setElementMatrix (x,i,j)
        {
            matrix[i][j] = x;
        }
        function getColumnNumbers (i)
        {
            return columnNumbers [i];
        }
        function setColumnNumbers (i, x)
        {
            columnNumbers [i] = x;
        }
        function getElementMatrix (i, j)
        {
            return matrix [i][j];
        }
        function increaseArrayAverage (x)
        {
            arrayAverage += x;
        }
        function setArrayAverage (x, y)
        {
            if (y == null)
            {
                arrayAverage = x;
            } else
            arrayAverage = x / y;
        }
        function getArrayAverage()
        {
            return arrayAverage;
        }
        function increaseArrayRowAverage (x)
        {
            arrayRowAverage += x;
        }
        function setArrayRowAverage (x, y)
        {
            if (y == null)
            {
                arrayRowAverage = x;
            } else
            arrayRowAverage = x / y;
        }
        function getArrayRowAverage()
        {
            return arrayRowAverage;
        }
        function increaseCounter ()
        {
            counter++;
        }
        function getCounter ()
        {
            return counter;
        }
        function setCounter (x)
        {
            counter = x;
        }
        function setSmallest(x)
        {
            smallest = x;
        }
        function getSmallest ()
        {
            return smallest;
        }
        function setBiggest (x)
        {
            biggest = x;
        }
        function getBiggest ()
        {
            return biggest;
        }
        function  setBiggestIndexI (x)
        {
            biggestIndexI = x;
        }
        function  setBiggestIndexJ (x)
        {
            biggestIndexJ = x;
        }
        function getBiggestIndexI ()
        {
            return biggestIndexI;
        }
        function getBiggestIndexJ ()
        {
            return biggestIndexJ;
        }
        function  setSmallestIndexI (x)
        {
            smallestIndexI = x;
        }
        function  setSmallestIndexJ (x)
        {
            smallestIndexJ = x;
        }
        function getSmallestIndexI ()
        {
            return smallestIndexI;
        }
        function getSmallestIndexJ ()
        {
            return smallestIndexJ;
        }


        for (var i = 0; i < numberOfcolumns; i++) 
        {
            setRowNumbers(i,(Math.floor(Math.random() * (max - min)) + min));
            increaseArrayAverage (getRowNumbers(i));
        }

        setArrayAverage (getArrayAverage(), rowNumbers.length);
        for (var i = 0; i < numberOfRows; i++) 
        {
            setColumnNumbers( i, (Math.floor(Math.random() * (max - getArrayAverage()) + getArrayAverage())));
        }

        document.write ('<table>');
        for (var i = 0; i < numberOfcolumns; i++) 
        {
            setArrayAverage(0);
            setCounter(0);
            document.write ('<tr>')
            matrix[i] = [];
            for (var j = 0; j < numberOfRows; j++)
            {
               setElementMatrix (getRowNumbers(i) * getColumnNumbers (j), i ,j);
                
                increaseArrayAverage(getElementMatrix(i,j));
                document.write('<td>' + getElementMatrix(i,j) + '</td>');
                if (getElementMatrix(i,j) % 2 == 0)
                {
                    increaseCounter();
                }
            }
            setArrayAverage (getArrayAverage() , numberOfRows);
            document.write('<td>There is '+ getCounter() + ' even numbers in this colummn , and average is ' + Math.floor(getArrayAverage()) + '</td>');
            
            document.write('</tr>');
        }
        document.write('</table>');

        for(var i = 0; i < numberOfRows; i++)
        {
            setArrayRowAverage(0);
            for(var j = 0; j < numberOfcolumns; j++)
            {
                increaseArrayRowAverage (getElementMatrix(j,i));
                if (getElementMatrix(j,i) > biggest) 
                {
                    setBiggest(getElementMatrix(j,i));
                    setBiggestIndexI (i);
                    setBiggestIndexJ (j);
                }
                else if (getElementMatrix(j,i)<smallest)
                {
                setSmallest(getElementMatrix(j,i));
                setSmallestIndexI(i);
                setSmallestIndexJ(j);
                }
            }
            setArrayRowAverage(getArrayRowAverage(), numberOfcolumns);
            document.write (i + 1 + '. row average is ' + Math.floor(getArrayRowAverage()) + '<br>');
        }

        matrix[getSmallestIndexJ()][getSmallestIndexI()] = getBiggest();
        matrix[getBiggestIndexJ()][getBiggestIndexI()] = getSmallest();
    }
}
