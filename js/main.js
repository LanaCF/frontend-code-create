const doc = document;

const display = doc.querySelector('.display');

const formTag = doc.forms.formTag;
const tag = formTag.tag;
const selectBtnTag = formTag.selectBtnTag;

const formTagCreate = doc.forms.formTagCreate;
const addNewTag = formTagCreate.addNewTag;
const addTagBtn = formTagCreate.addTagBtn;

selectBtnTag.onclick = function() {
  const valueTag = tag.value;
  const options = tag.options;
  const index = tag.selectedIndex;
  const label = options[index].label;
  const arrTag = label.split(',');

  if (label.includes('/')) {
    display.innerHTML = `<${arrTag[0]}><${arrTag[1]}>`;
  } else {
    display.innerHTML = `<${arrTag[0]}>`;
  }

  console.log(display);
}

addTagBtn.onclick = function() {
  const valueTag = addNewTag.value;

  const optionTag = new Option(valueTag, valueTag);
  tag.append(optionTag);
  formTagCreate.reset();
}


console.log(tag[0].value);