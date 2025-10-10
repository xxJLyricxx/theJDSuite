    var acc = document.getElementsByClassName("accordion");
    var testString = 'int num = 0;\nint num2 = 1;\nString name = "";\nString LastName = "";\nBoolean Fact = true;';
    var testremovables = [];
    var testreplacables = [];
    let testArray = setUpRemoveReplace(testString, testremovables, testreplacables);
    // console.log(testArray);
    function setUpRemoveReplace(str, remove, replace){
        if (str.endsWith(';')){
            str += '\n';
        }
        remove.push(" ");
        remove.push(";\n");
        remove.push("=");
        remove.push('""');

        replace.push("<<SPACE>>");
        replace.push("<<SPACE>>");
        replace.push("::");
        replace.push("<<EMPTY_STRING>>");
        
        for(i = 0; i < replace.length; i++){
            str = str.replaceAll(remove[i], replace[i]);
        };
        let arr = str.split("<<SPACE>>");  
        return arr
    }
    function comingSoon(){
        alert("This feature isn't quite ready yet. Coming soon though.");
    }
    document.getElementById("toStringText").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            toStringFunction();
        }
    });
    function removeChunks(str, arr){
        // add a library or linked list to this so that we can loop it
        str = str.replaceAll(" ", "<<SPACE>>");
        str = str.replaceAll(";\n", "<<SPACE>>");
        str = str.replaceAll(";", "<<SPACE>>");
        str = str.replaceAll("=", "::");
        str = str.replaceAll('""', "<<EMPTY_STRING>>");
        str = str.replaceAll('"', "<<EMPTY_STRING>>");
        str = str.split("<<SPACE>>");
            return str;
    }
    function toStringFunction(){
        let variableType = [];
        let variableName = [];
        let variableValue = [];

        let inputString = document.getElementById("toStringText").innerText;
        inputString = removeChunks(inputString);
        inputString = inputString.filter(item => item !== '');
        let arrayLength = inputString.length;

        let bigArray = splitThreeWays(inputString, variableType, variableName, variableValue);
        // -=-=-=--=-=-=
        let finalString = buildFinale(variableType, variableName, variableValue);
        let enterString = "This is the test string, its really long lorum empsom keep ing going goign an dgoing ";
        document.getElementById("resultantBox").textContent = finalString;
        console.log(finalString);
        return finalString;
    }
    function splitThreeWays(orig, type, name, value) {
        let i = 0;
        let seqArr = [];
        let equals = [];
        seqArr.push(type);
        seqArr.push(name);
        seqArr.push(equals);
        seqArr.push(value);
        while (i < orig.length){
            seqArr[i%4].push(orig[i]);
            ++i;
        };
        return seqArr
    }
    function buildFinale(arr1, arr2, arr3) {
        let max1 = getMaxLengthString(arr1);
        let max2 = getMaxLengthString(arr2);
        let max3 = getMaxLengthString(arr3);
        let blockCount = 10 + max1 + max2 + max3;

        let fin = "";
        for (i=0; i<blockCount ; ++i){
            fin += "*";
        }
        fin += "\n";
        console.log(blockCount);
        console.log(fin);
        
        fin += "* "
        for (let i = 0; i < max1; i++){
            fin += " ";
        };
        fin += " * ";
        for (let i = 0; i < max2; i++){
            fin += " ";
        };
        fin += " * ";
        for (let i = 0; i < max3; i++){
            fin += " ";
        };
        fin += " *\n";

        for(i = 0; i < arr1.length; i++){
            fin += "* ";
            let spaces = 0;

            if (arr1[i].length < max1){
                spaces = max1 - arr1[i].length;
                while (spaces > 0){
                    fin += " ";
                    --spaces;
                }
                fin += arr1[i];
            } else {
                fin += arr1[i];
            }
            
            fin += " * ";
            
            if (arr2[i].length < max2){
                spaces = max2 - arr2[i].length;
                while (spaces > 0){
                    fin += " ";
                    --spaces;
                }
                fin += arr2[i];
            } else {
                fin += arr2[i];
            }
            
            fin += " * ";

            if (arr3[i].length < max3){
                spaces = max3 - arr3[i].length;
                while (spaces > 0){
                    fin += " ";
                    --spaces;
                }
                fin += arr3[i];
            } else {
                fin += arr3[i];
            }

            fin += " *\n";
        }
        for (i=0; i<blockCount ; ++i){
            fin += "*";
        }
        fin += "\n";
        // console.log(fin);
        return fin;
    }
    function getMaxLengthString(array){
        let maxLength = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i].length > maxLength) {
                maxLength = array[i].length;
            }
        }
        return maxLength
    }
    function dropdownMenu(){
        var x = document.getElementById("dropDownClick");
        if (x.className === "topnav") {
            x.className += "responsive";
        /* change topnav to topnav.responsive*/ 
        }
        else{
            x.className = "topnav";
        }
    }
    var acc = document.getElementsByClassName("accordion");
    
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        });
    }