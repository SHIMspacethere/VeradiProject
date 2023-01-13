function buttonInputCalc(l) {
  try {
    let list = [];
    let person = [];
    let union = [];
    let id = 0;
    let u = 0;
    let c = 0;

    list = l.map(v => [...v]);
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        if (list[i][j] >= 1 && list[i][j] <= 3) {
          let temp = [];
          temp = [i, j, list[i][j]];
          person.push(temp);
          temp = [list[i][j], id];
          list[i][j] = temp;
          // console.log(list[i][j]);
          id++;
        }
      }
    }
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        let temp = [];
        if (list[i][j] == 4) {
          c = -1;
          while (1) {
            if (list[i][j + c][0] >= 1 && list[i][j + c][0] <= 3) {
              temp.push(list[i][j + c][1]); 
              break;
            } else if (list[i][j + c] == 0) break;
            else if (list[i][j + c] == 4) break;
            else if (list[i][j + c] >= 6) break;
            else {
            }
            c--;
          }
          c = 1;
          while (1) {
            if (list[i][j + c][0] >= 1 && list[i][j + c][0] <= 3) {
              temp.push(list[i][j + c][1]);
              break;
            } else if (list[i][j + c] == 0) break;
            else if (list[i][j + c] == 4) break;
            else if (list[i][j + c] >= 6) break;
            else {
            }
            c++;
          }

          if (list[i + 1][j] == 6 || list[i + 1][j] == 7) {
            c = -1;
            if (list[i + 1][j] == 7) {
              if (list[i + 2][j][0] >= 1 && list[i + 2][j][0] <= 3)
                temp.push(list[i + 2][j][1]);
            }
            while (1) {
              if (list[i + 1][j + c] == 4) {
                if (list[i + 2][j + c][0] >= 1 && list[i + 2][j + c][0] <= 3)
                  temp.push(list[i + 2][j + c][1]);
              } else if (list[i + 1][j + c] == 5 || list[i + 1][j + c] == 9) {
                if (list[i + 1][j + c] == 9) {
                  if (list[i + 2][j + c][0] >= 1 && list[i + 2][j + c][0] <= 3)
                    temp.push(list[i + 2][j + c][1]);
                  break;
                }
              } else {
                break;
              }
              c--;
            }
            c = 1;
            while (1) {
              if (list[i + 1][j + c] == 4) {
                if (list[i + 2][j + c][0] >= 1 && list[i + 2][j + c][0] <= 3)
                  temp.push(list[i + 2][j + c][1]);
              } else if (list[i + 1][j + c] == 5 || list[i + 1][j + c] == 10) {
                if (list[i + 1][j + c] == 10) {
                  if (list[i + 2][j + c][0] >= 1 && list[i + 2][j + c][0] <= 3)
                    temp.push(list[i + 2][j + c][1]);
                  break;
                }
              } else {
                break;
              }
              c++;
            }
          } else if (list[i + 1][j] == 8) {
            if (list[i + 2][j + c][0] >= 1 && list[i + 2][j + c][0] <= 3)
              temp.push(list[i + 2][j + c][1]);
          } else {
            break;
          }
          temp.sort();
          union[u] = temp;
          // console.log('union['+u+'] : ' + union[u]);
          u++;
        }
      }
    }
    let result = [person, []];
    let temp = [];
    for (let i = 0; i < union.length; i++) {
      temp.push(union[i]);
    }
    result[1] = temp;
    return result;
  } catch (e) {
    console.error(e);
    return;
  }
}



export default buttonInputCalc;
