const container = document.getElementById('WScontainer');

let start = "NO"

const wordStart = ["1B","C0","45","D1","5F","31","67","AC","4C","40"];
const wordEnds = ["66","C4","85","71","FF","3F","6B","A6","9C","73"];
const words = [["1B", "2A", "39", "48", "57", "66"],
["C0", "C1", "C2", "C3", "C4"],
["45", "55", "65", "75", "85"],
["D1", "C1", "B1", "A1", "91", "81", "71"],
["5F", "6F", "7F", "8F", "9F", "AF", "BF", "CF", "DF", "EF", "FF"],
["31", "32", "33", "34", "35", "36", "37", "38", "39", "3A", "3B", "3C", "3D", "3E", "3F"],
["67", "68", "69", "6A", "6B"],
["AC", "AB", "AA", "A9", "A8", "A7", "A6"],
["4C", "5C", "6C", "7C", "8C", "9C"],
['40', '51', '62', '73']];

container.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('WScell')) {
        const cellId = clickedElement.id;

        if(start == "NO") {
            start = cellId;
            document.getElementById(cellId).style.backgroundColor = "#DB504A";
        } else {
            if ( wordStart.includes(start) ){
                let ind = wordStart.indexOf(start)
                if( wordEnds[ind] == cellId){
                    for (const word of words[ind]){
                        console.log(word)
                        document.getElementById(word).style.backgroundColor = "#4A051C";
                        document.getElementById(word).style.color = "#FCC590";
                        document.getElementById(word).disabled  = true;

                        document.getElementById("word" + ind).style.textDecoration = "line-through";
                    }
                } else {
                  document.getElementById(cellId).style.backgroundColor = "#E5E5E5"
                }
            } else {
                document.getElementById(cellId).style.backgroundColor = "#E5E5E5";
            }
            start = "NO"
        }


        console.log(`Button pressed! ID is: ${start}`);
    }
});