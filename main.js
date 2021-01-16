'use strict';

function generateList(value) {
  const $parentUl = document.createElement('ul');
  
  value.map(elementValue => {
    const $parentLi = document.createElement("li");
    
    if (Array.isArray(elementValue)) {
      const $childUl = document.createElement('ul');
      
      elementValue.map(el => {
        const $childLi = document.createElement("li");
        $childLi.append(el);
        $childUl.append($childLi);
      })
      $parentLi.append($childUl);
      $parentUl.append($parentLi);

    } else {
      $parentLi.append(elementValue);
      $parentUl.append($parentLi);
    }
  })
  document.body.append($parentUl);
}

generateList([3, [43, 4, 76], 4, [3, 4], 45, [3, 4, 5], 4, 5]);

/////////////////////////////////////////////////

const $table = document.createElement('table');
  
  for (let j = 0; j < 10; j++) {
    const $row = document.createElement('tr');
   
    for (let i = 1; i <= 10; i++) {
      const $cell = document.createElement('td');
      $cell.textContent = `${j * 10 + i}`;
      $row.append($cell);
    }
    $table.append($row);
  }
  document.body.append($table);