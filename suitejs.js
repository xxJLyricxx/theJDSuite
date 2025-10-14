    var acc = document.getElementsByClassName("accordion");
    var testString = 'int num = 0;\nint num2 = 1;\nString name = "";\nString LastName = "";\nBoolean Fact = true;';
    var testremovables = [];
    var testreplacables = [];
    var functionName = "";
    let testArray = setUpRemoveReplace(testString, testremovables, testreplacables);
    const box = document.getElementById("resultantBox");
    const observer = new MutationObserver(() => {
        // Check if content width exceeds current box width
        if (box.scrollWidth > box.clientWidth && box.offsetWidth < parseInt(getComputedStyle(box).maxWidth)) {
        box.classList.add("expanding");
        box.style.width = Math.min(box.scrollWidth + 10, parseInt(getComputedStyle(box).maxWidth)) + "px";
        } else if (box.scrollWidth <= box.clientWidth || box.offsetWidth >= parseInt(getComputedStyle(box).maxWidth)) {
        box.classList.remove("expanding");
        }
    });
    observer.observe(box, { childList: true, characterData: true, subtree: true });
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
        }
    )
    function removeChunks(str){
        // add a library or linked list to this so that we can loop it
        let standardRemove = ["\n", ";", "{", "}", "public", "private"];
        str = str.toLowerCase();
        for (i=0; i<standardRemove.length; ++i) {
            str = str.replaceAll(standardRemove[i], " ");
        }
        str = str.replaceAll('""', "<<EMPTY_STRING>>");
        str = str.replaceAll("''", "<<EMPTY_STRING>>");
        str = str.replace(/\s+/g, '*~*');
    
        str = str.split('*~*');
        if (str[0] == '' || str[0] == "") {
            str.shift();
        }
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
        return finalString;
    }
    function splitThreeWays(orig, type, name, value) {
        let i = 0;
        let seq = 0;
        let seqArr = [];
        seqArr.push(type);
        seqArr.push(name);
        seqArr.push(value);
        while (i < orig.length){
            if ((seq%3)== 2){
                if (orig[i] == "="){
                ++i;
                seqArr[seq%3].push(orig[i]);
                ++i;
                } else {
                    seqArr[seq%3].push("<<empty>>");
                }
            } else {
                seqArr[seq%3].push(orig[i]);
                ++i;
            }
            ++seq;
        };
        return seqArr
    }
    function buildFinale(arr1, arr2, arr3) {
        let max1 = getMaxLengthString(arr1);
        let max2 = getMaxLengthString(arr2);
        let max3 = getMaxLengthString(arr3);
        let blockCount = 12 + max1 + max2 + max3;
        let fin = "";
        for (i=0; i<blockCount ; ++i){
            fin += "*";
        }
        fin += "\n";

        fin += "* ";

        if (max1%2 == 1 ) {
            max1 += 1;
        };

        if(max1 > 8) {
            for (let i = 0; i < ((max1 - 8) / 2); i++){
                fin += " ";
            };
            
            fin += "DATATYPE";
            
            for (let i = 0; i < (max1 - 8 - ((max1 - 8) / 2)); i++){
                fin += " ";
            };
        } else {
            max1 = 8;
            fin += "DATATYPE";
        };

        fin += " * ";
        
        if(max2 > 13) {
            for (let i = 0; i < ((max2 - 13) / 2); i++){
                fin += " ";
            };
            fin += "VARIABLE NAME";
            for (let i = 0; i < (max2 - 13 - ((max2 - 13) / 2)); i++){
                fin += " ";
            };
        } else {
            max2 = 13;
            fin += "VARIABLE NAME";
        };

        fin += " * ";

        if (max3%2 == 0 ) {
            max3 += 1;
        };

        if(max3 > 5){
            for (let i = 0; i < ((max3 - 5) / 2); i++){
                fin += " ";
            };
            fin += "VALUE";
            for (let i = 0; i < (max3 - 5 - ((max3 - 5) / 2)); i++){
                fin += " ";
            };
        } else {
            max2 = 5;
            fin += "VALUE";
        };

        fin += " *\n";

        for (i=0; i<blockCount ; ++i){
            fin += "*";
        }
        fin += "\n";

        for(i = 0; i < arr1.length; i++){
            fin += "* ";
            let spaces = 0;

            if (arr1[i].length < max1){
                spaces = max1 - arr1[i].length;
                while (spaces > 0){
                    fin += " ";
                    --spaces;
                }
                fin += arr1[i].toUpperCase();
            } else {
                fin += arr1[i].toUpperCase();
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
                if (arr3[i].length < 20) {
                    fin += arr3[i];
                } else {
                    fin += arr3[i].slice(0, 20);
                }
            } else {
                if (arr3[i].length < 20) {
                    fin += arr3[i];
                } else {
                    fin += arr3[i].slice(0, 20);
                }
            }

            fin += " *\n";

        }

        for (i=0; i<blockCount ; ++i){
            fin += "*";
        }

        fin += "\n";
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
    function copyYTSToClipboard(){
        const copyText = "This is the Text";

        // Use the Clipboard API to write the text
        navigator.clipboard.writeText(copyText)
            .then(() => {
                alert("Text copied to clipboard.");
                }
            )
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert("Failed to copy text.");
                }
            );
    }

    async function fetchFileAndSetConstant() {
        try {
            const response = await fetch('watchLaterRemover.txt');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } 

            // get the file content
            const yTRemoverText = await response.text();

            //Copy it to the clipboard
            await navigator.clipboard.writeText(yTRemoverText)
            .then(() => {
                alert("Text copied to clipboard.");
                }
            )
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert("Failed to copy text.");
                }
            );
            
            // const fileContent = await response.text();
            // const MY_CONSTANT_WEB = fileContent;
            // console.log(MY_CONSTANT_WEB);
        } catch (err) {
            console.error('Error fetching file:', err);
        }
    }

    async function openYTSWindow() {
        try {
            const response = await fetch('watchLaterRemover.txt');
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }

            const fileContent = await response.text();

            // Create a new tab and write the file content into it
            const newTab = window.open();
            newTab.document.open();
            newTab.document.write(`
            <pre style="white-space: pre-wrap; word-wrap: break-word; font-family: monospace; padding: 1em;">
        ${fileContent.replace(/[&<>"']/g, (char) => (
        {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]
        ))}
            </pre>
            `);
            newTab.document.close();

        } catch (err) {
            console.error('Error fetching or displaying file:', err);
        }
        }

    
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