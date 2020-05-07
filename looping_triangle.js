var triangle = '#';
for (i=0;i<7;++i) {
  console.log(triangle);
  triangle += '#';
}

/* expected output:
#
##
###
####
#####
######
#######
*/



// how it should be:
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);